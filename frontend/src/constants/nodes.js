export const nodesWorkflows = [
    { id: 'node.transformation_validation', label: 'Transformation validation', type: 'transformation_validation', description: 'Transform payload from the trigger and validate it.' },
    { id: 'node.draft_contract_creation', label: 'Draft contract creation', type: 'draft_contract_creation', description: 'Create a new contract in draft status' },
    { id: 'node.approval', label: 'Approval', description: 'Add approval flow to a node', type: 'approval', },
    { id: 'node.notification', label: 'Notification', description: 'Send Email Notification from a Node', type: 'notification', },
    { id: 'node.contract_creation', label: 'Contract creation', description: 'Create a new contract', type: 'contract_creation', },
]