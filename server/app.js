const express = require('express');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const { WorkflowModel } = require('./models/workflow');

const { Task, Workflow } = require('./lib/workflow');

const app = express();
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
        switch (task.action) {
            case 'logMessage':
                return new Task(task.name, async (context) => {
                    console.log(`Message: ${context?.message || task.parameters.message}`);
                });
            case 'addNumbers':
                return new Task(task.name, async (context) => {
                    const result = (context?.num1 || task.parameters.num1 )+ (context?.num2 || task.parameters.num2);
                    console.log(`Sum: ${result}`);
                    context.result = result;
                });
            case 'httpRequest':
                return new Task(task.name, async (context) => {
                    const response = await fetch(context?.url || task.parameters.url, {
                        method: task.parameters.method || 'GET',
                        headers: task.parameters.headers || {},
                        body: task.parameters.body ? JSON.stringify(task.parameters.body) : undefined
                    });
                    const data = await response.json();
                    console.log(`HTTP Response: ${JSON.stringify(data)}`);
                    context.response = data;
                });
            case 'delay':
                return new Task(task.name, async (context) => {
                    await new Promise(resolve => setTimeout(resolve, context?.duration || task.parameters.duration));
                    console.log(`Delayed for ${context?.duration || task.parameters.duration} ms`);
                });
            case 'condition':
                return new Task(task.name, async (context) => {
                    if (eval(task.parameters.condition)) {
                        console.log(`Condition met: ${task.parameters.condition}`);
                        context.conditionMet = true;
                    } else {
                        console.log(`Condition not met: ${task.parameters.condition}`);
                        context.conditionMet = false;
                    }
                });
            default:
                throw new Error(`Unknown action: ${task.action}`);
        }
    });
};

app.use(logger('dev'));
app.use(cors());
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
