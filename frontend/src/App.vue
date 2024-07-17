<script setup>
import Workflow from "@/components/workflow/workflow.vue";
import Controller from "@/components/controller/controller.vue";
</script>

<template>
  <div id="app">
    <el-row :gutter="20" class="vue-flow-layout">
      <el-col :span="5" class="p-0">
        <div class="vue-flow-controller">
          <Controller />
        </div>
      </el-col>
      <el-col :span="18" >
        <Workflow />
      </el-col>
    </el-row>
  </div>
</template>
