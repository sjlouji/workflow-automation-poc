<script setup>
import {
  Plus,
} from '@element-plus/icons-vue'

import { ref } from "vue";
import {triggers} from "@/constants/trigger.js";
import useWorkflowStore from "@/store/workflow.js";

const nodes = ref(triggers);
const store = useWorkflowStore();

function generateTriggerNode(node) {
  return {
    id: node.id,
    label: node.label,
    type: 'input',
    position: { x: Math.random() * 80, y: Math.random() * 80 },
  }
}

const addNode = (node) => {
  store.nodes.push(generateTriggerNode(node));
}
</script>

<template>
    <div class="flex flex-wrap menu-item-content">
      <el-card shadow="always" v-for="node in nodes" :key="node.id" :index="node.id" @click="() => addNode(node)">
        <div class="menu-item">
          <span class="menu-item-header">{{ node.label }}</span>
          <span>
            <el-icon :size="15" color="blue"><Plus /></el-icon>
          </span>
        </div>
        <div class="menu-item-description">{{ node.description }}</div>
      </el-card>
    </div>
</template>

<style scoped>
.menu-item {
  display: flex;
  justify-content: space-between;
}

.menu-item-content {
  grid-gap: 1rem;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 20px;
  cursor: pointer;
}

.menu-item-header {
  font-size: 12px;
  font-weight: bold;
}

.menu-item-description {
  font-size: 10px;
  text-align: start;
  text-transform: none;
  color: #8a8a8a;
  font-weight: 500;
}
</style>