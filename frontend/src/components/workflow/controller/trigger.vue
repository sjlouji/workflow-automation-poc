<script lang="ts" setup>
import {
  ArrowRight,
} from '@element-plus/icons-vue'
import { ref } from "vue";

const nodes = ref([
  { id: 'node.schedules', label: 'Schedules' },
  { id: 'node.http_request', label: 'HTTP request' },
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