<script setup>

import Trigger from "@/components/workflow/controller/trigger.vue";
import Node from "@/components/workflow/controller/node.vue";
</script>

<template>
  <el-tabs type="border-card" class="vue-flow-controller-tabs">
    <el-tab-pane label="Triggers">
      <Trigger />
    </el-tab-pane>
    <el-tab-pane label="Nodes">
      <Node />
    </el-tab-pane>
  </el-tabs>
</template>