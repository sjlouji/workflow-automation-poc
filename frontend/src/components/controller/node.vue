<script setup>
import {
  Plus,
} from '@element-plus/icons-vue'

import { ref } from "vue";
import {nodesWorkflows} from "@/constants/nodes.js";
import useWorkflowStore from "@/store/workflow.js";

const nodes = ref(nodesWorkflows);
const store = useWorkflowStore();

function generateDefaultNode(node) {
  return {
    id: node.id,
    label: node.label,
    type: node?.type || 'default',
    position: { x: Math.random() * 80, y: Math.random() * 80 },
  }
}

const addNode = (node) => {
  console.log(node)
  store.nodes.push(generateDefaultNode(node));
}
</script>

<template>
  <div class="flex flex-wrap menu-item-content">
    <el-card shadow="always" v-for="node in nodes" :key="node.id" :index="node.id"  @click="() => addNode(node)">
      <div class="menu-item">
        <span class="menu-item-header">{{ node.label }}</span>
        <span><el-icon :size="15" color="blue"><Plus /></el-icon></span>
      </div>
      <div class="menu-item-description">{{ node.description }}</div>
    </el-card>
  </div>
</template>

<style scoped>

</style>