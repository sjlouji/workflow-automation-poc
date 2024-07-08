const { Task } = require('./workflow');

const logMessageTask = new Task('Log Message', async (context) => {
    console.log(`Message: ${context.message}`);
});

const addNumbersTask = new Task('Add Numbers', async (context) => {
    const result = context.num1 + context.num2;
    console.log(`Sum: ${result}`);
    context.result = result;
});

module.exports = { logMessageTask, addNumbersTask };