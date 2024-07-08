const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    action: String,
    parameters: mongoose.Schema.Types.Mixed, // Stores parameters for the task
});

const workflowSchema = new mongoose.Schema({
    name: String,
    tasks: [taskSchema],
});

const WorkflowModel = mongoose.model('Workflow', workflowSchema);

module.exports = { WorkflowModel };