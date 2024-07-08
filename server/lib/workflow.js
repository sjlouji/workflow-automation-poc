class Task {
    constructor(name, execute) {
        this.name = name;
        this.execute = execute;
    }

    async run(context) {
        console.log(`Running task: ${this.name}`);
        await this.execute(context);
    }
}

class Workflow {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    async run(context) {
        console.log(`Starting workflow: ${this.name}`);
        for (const task of this.tasks) {
            await task.run(context);
        }
        console.log(`Workflow ${this.name} completed.`);
    }
}

module.exports = { Task, Workflow };