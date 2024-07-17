<script setup>
import { Handle, Position } from '@vue-flow/core'

</script>

<template>
  <el-card shadow="always" style="width: 350px; padding: 10px; text-align: start; padding: 10px">
    <Handle type="source" :position="Position.Left" />
    <el-collapse >
      <el-collapse-item>
        <template #title>
          <div style="display: flex; flex-direction: column;">
            <span style="font-weight: bold; text-align: start; line-height: 15px">Approval</span>
            <span style="font-size: 8px; color: grey; line-height: 15px">Approval Contracts</span>
          </div>
        </template>
        <div>
          <el-form
              label-position="top"
          >
            <el-form-item label="Approval Role" label-position="top">
              <el-select placeholder="Roles">
                <el-option label="Super Admin" value="super_admin" />
                <el-option label="Ware house Admin" value="ware_house_admin" />
              </el-select>
            </el-form-item>
            <ElButton type="primary">
              Save
            </ElButton>
          </el-form>
        </div>
      </el-collapse-item>
    </el-collapse>
    <Handle type="target" :position="Position.Right" />
  </el-card>
</template>

<style scoped>
.el-card {
  --el-card-padding: 5px
}

.el-collapse {
  border-bottom: none;
  border-top: none;
  --el-collapse-border-color: none
}
</style>