<script setup>
import { Handle, Position } from '@vue-flow/core'

</script>

<template>
  <el-card shadow="always">
    <Handle type="source" :position="Position.Left" />
    <span class="menu-item-header">Contract creation</span>
    <div class="menu-item">
      <div class="menu-item-description">Create a new contract</div>
    </div>
  </el-card>
</template>

