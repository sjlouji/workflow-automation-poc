<script setup>
import { Handle, Position } from '@vue-flow/core'

const headerMapping = [
  {
    label: 'Source City',
    alias: '',
    required: false,
    custom_validation: ''
  },
  {
    label: 'Destination City',
    alias: '',
    required: false,
    custom_validation: ''
  },
]
</script>

<template>
  <el-card shadow="always" style="width: 650px; padding: 10px; text-align: start; padding: 10px">
    <Handle type="source" :position="Position.Left" />
    <el-collapse >
      <el-collapse-item>
        <template #title>
          <div style="display: flex; flex-direction: column;">
            <span style="font-weight: bold; text-align: start; line-height: 15px">Transformation & Validation</span>
            <span style="font-size: 8px; text-align: start; color: grey; line-height: 15px">Transform Payload and Validate</span>
          </div>
        </template>
        <div>
          <el-form
              label-position="top">
            <el-table :data="headerMapping" style="width: 100%">
              <el-table-column prop="label" label="Label" width="180">
                <template #default="scope">
                  <ElInput :model-value="scope.row.label"/>
                </template>
              </el-table-column>
              <el-table-column prop="alias" label="Alias" width="180">
                <template #default="scope">
                  <ElInput :model-value="scope.row.alias"/>
                </template>
              </el-table-column>
              <el-table-column prop="required" label="Required">
                <template #default="scope">
                  <ElSelect :model-value="scope.row.required">
                    <ElOption>True</ElOption>
                    <ElOption>False</ElOption>
                  </ElSelect>
                </template>
              </el-table-column>
              <el-table-column prop="custom_validation" label="Custom Validation">
                <template #default="scope">
                  <ElInput :model-value="scope.row.custom_validation"/>
                </template>
              </el-table-column>
            </el-table>
            <ElButton type="primary" style="margin: 10px; float: right">
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