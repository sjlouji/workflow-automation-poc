<script setup>
import {markRaw, onMounted, ref} from 'vue'
import {VueFlow, useVueFlow} from '@vue-flow/core'
import {Background} from '@vue-flow/background'
import {MiniMap} from '@vue-flow/minimap'
import Controls from '@/components/workflow/controls.vue'
import useWorkflowStore from '@/store/workflow.js';

import ContractCreationNode from '@/components/controller/nodes/contract-creation.vue';
import NotificationNode from '@/components/controller/nodes/notification.vue';
import ApprovalRoles from '@/components/controller/nodes/approval.vue';
import TransformationValidation from '@/components/controller/nodes/transformation_validation.vue';

const nodeTypes = {
  contract_creation: markRaw(ContractCreationNode),
  notification: markRaw(NotificationNode),
  approval: markRaw(ApprovalRoles),
  transformation_validation: markRaw(TransformationValidation),
}

let drawer = ref(false)
const drawerHeader = ref({})

const vueFlowInstance = useVueFlow();
const store = useWorkflowStore();

const nodes = store.nodes;
const edges = store.edges;

const initializeFlow = () => {
  vueFlowInstance.fitView();
}

const handleNodeDragStop = ({node}) => {
  store.onDragListener(node);
}

const handleConnect = (connection) => {
  vueFlowInstance.addEdges(connection)
}

onMounted(() => {
  vueFlowInstance.onInit(initializeFlow);
  vueFlowInstance.onNodeDragStop(handleNodeDragStop);
  vueFlowInstance.onConnect(handleConnect);
});

</script>

<template>
  <VueFlow
      v-model:nodes="nodes"
      v-model:edges="edges"
      fit-view-on-init
      class="basic-flow"
      :default-viewport="{ zoom: 1 }"
      :min-zoom="1"
      :max-zoom="2"
      :apply-changes="false"
      :node-types="nodeTypes"
  >
    <Background pattern-color="#aaa"/>
    <MiniMap pannable zoomable/>
    <Controls />
  </VueFlow>
</template>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
</style>