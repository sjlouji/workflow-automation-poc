<script setup>
import { ref } from 'vue'
import { ElButton, ElDrawer } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const visible = ref(true)
import { VueFlow } from '@vue-flow/core'
import InteractionControls from './components/InteractionControls.vue'

const nodes = ref([
  {
    id: '1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Node 3' },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    data: { label: 'Node 4' },
    position: { x: 400, y: 200 },
  },
])

const edges = ref([
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
])
</script>

<template>
  <div id="app">
    <el-drawer
        :modal-class="louji"
        :direction="'ltr'"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        :model-value="true"
        :modal="false"
        :append-to-body="true">
      <template #header="{ close, titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
      </template>
      This is drawer content.
    </el-drawer>
    <VueFlow :nodes="nodes" :edges="edges" class="interaction-flow" fit-view-on-init>
      <InteractionControls />
    </VueFlow>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>