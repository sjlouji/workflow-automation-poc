<script lang="ts" setup>
import {
  ArrowRight,
} from '@element-plus/icons-vue'
import { ref } from "vue";

const nodes = ref([
  { id: 'node.transformation_validation', label: 'Transformation validation' },
  { id: 'node.draft_contract_creation', label: 'Draft contract creation' },
  { id: 'node.approval', label: 'Approval' },
  { id: 'node.notification', label: 'Notification' },
  { id: 'node.contract_creation', label: 'Contract creation' },
])

</script>

<template>
  <div class="flex flex-wrap">
    <el-menu mode="vertical">
      <el-menu-item v-for="node in nodes" :key="node.id" :index="node.id">
        <span class="menu-item-content">
          <span>{{ node.label}}</span>
          <el-icon><ArrowRight /></el-icon>
        </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.menu-item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: lighter;
  font-size: 13px;
}
</style>