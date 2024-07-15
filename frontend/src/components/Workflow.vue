
<script>
import axios from 'axios';

export default {
  data() {
    return {
      workflow: {
        name: '',
        steps: ['']
      },
      savedWorkflow: null,
      dragulaOptions: {
        direction: 'vertical'
      }
    };
  },
  methods: {
    addStep() {
      this.workflow.steps.push('');
    },
    updateStep(event, index) {
      this.workflow.steps[index] = event.target.value;
    },
    async saveWorkflow() {
      try {
        const response = await axios.post('http://localhost:3000/save-workflow', {
          name: this.workflow.name,
          tasks: this.workflow.steps.map(step => ({
            name: step,
            action: "logMessage", // Customize the action as needed
            parameters: { "message": "Hello, Workflow!" } // Customize the parameters as needed
          }))
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        this.savedWorkflow = response.data;
        alert('Workflow saved successfully!');
      } catch (error) {
        console.error('Error saving workflow:', error);
        alert('Failed to save workflow.');
      }
    },
    async executeWorkflow() {
      const response = await axios.post('http://localhost:3000/run-workflow/668c33327d3db3436ba3697e', {});
      alert(response.data);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.form-group {
  margin-bottom: 20px;
}
.workflow-container {
  margin-bottom: 20px;
}
.workflow-step {
  margin-bottom: 10px;
}
button {
  padding: 10px;
  margin-top: 10px;
  margin-right: 10px;
}
.saved-workflow {
  margin-top: 20px;
  text-align: left;
}
</style>
