const express = require('express');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const { WorkflowModel } = require('./models/workflow');

const { Task, Workflow } = require('./lib/workflow');

const app = express();
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

const mapTasks = (taskData) => {
    return taskData.map((task) => {
        // Create task instances based on stored action
        switch (task.action) {
            case 'logMessage':
                return new Task(task.name, async (context) => {
                    console.log(`Message: ${task.parameters.message}`);
                });
            case 'addNumbers':
                return new Task(task.name, async (context) => {
                    const result = task.parameters.num1 + task.parameters.num2;
                    console.log(`Sum: ${result}`);
                    context.result = result;
                });
            default:
                throw new Error(`Unknown action: ${task.action}`);
        }
    });
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/save-workflow', async (req, res) => {
    const { name, tasks } = req.body;
    const workflow = new WorkflowModel({ name, tasks });
    await workflow.save();
    res.send('Workflow saved successfully');
});

app.post('/run-workflow/:id', async (req, res) => {
    const workflow = await WorkflowModel.findById(req.params.id);
    if (!workflow) {
        return res.status(404).send('Workflow not found');
    }

    const tasks = mapTasks(workflow.tasks);
    const wf = new Workflow(workflow.name);
    tasks.forEach(task => wf.addTask(task));

    const context = req.body;

    await wf.run(context);

    res.send('Workflow executed successfully');
});
module.exports = app;
