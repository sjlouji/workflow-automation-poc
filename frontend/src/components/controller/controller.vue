<script setup>
import Trigger from "@/components/controller/trigger.vue";
import Node from "@/components/controller/node.vue";

import { ref } from 'vue'

const activeName = ref('triggers')
</script>

<template>
  <el-tabs v-model="activeName" >
    <el-tab-pane label="Triggers" name="triggers">
      <Trigger />
    </el-tab-pane>
    <el-tab-pane label="Nodes" name="nodes">
      <Node />
    </el-tab-pane>
  </el-tabs>
</template>

<style>
.el-tabs {
  height: 20px;
}

.el-tabs > .el-tabs__header {
  background: hsl(210, 40%, 96.08%);
}

.el-tabs > .el-tabs__header > .el-tabs__nav-wrap > .el-tabs__nav-scroll {
  padding-left: 10px;
  padding-right: 10px;
}

.el-tabs__item {
  font-size: 12px;
  color: rgba(106, 106, 106, 0.94);
  font-weight: bold;
}

.el-tabs__item > .is-active {
  color: #0071f8 !important;
}
</style>