import { defineStore } from 'pinia';
import { ref } from 'vue';

const useWorkflowStore = defineStore('vue-flow-pinia', () => {
    const nodes = ref([
    ]);

    const edges = ref([
    ]);

    const reset = () => {
        edges.value = [];
        nodes.value = [];
    };

    const log = () => {
        console.log('nodes', nodes.value, 'edges', edges.value);
    };

    const toggleClass = () => {
        nodes.value = nodes.value.map((node) => {
            return {
                ...node,
                class: node.class === 'dark' ? 'light' : 'dark',
            };
        });
    };

    const updatePositions = () => {
        nodes.value = nodes.value.map((node) => {
            return {
                ...node,
                position: {
                    x: Math.random() * 400,
                    y: Math.random() * 400,
                },
            };
        });
    };

    const onDragListener = (node) => {
        const currentNodeIndex = nodes.value.findIndex(node => node.id === node.id);
        nodes.value[currentNodeIndex].position = node?.position || {};
    };

    return {
        nodes,
        edges,
        reset,
        log,
        toggleClass,
        updatePositions,
        onDragListener,
    };
});

export default useWorkflowStore;
