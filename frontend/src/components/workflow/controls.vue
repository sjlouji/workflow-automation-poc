<script setup>
import {ControlButton, Controls} from "@vue-flow/controls";
import Icon from "@/components/workflow/Icon.vue";
import {useVueFlow} from "@vue-flow/core";

const {
  setViewport
} = useVueFlow();

function resetTransform() {
  setViewport({ x: 0, y: 0, zoom: 1 })
}

</script>

<template>
  <Controls position="bottom-left" >
    <ControlButton title="Reset Transform" @click="resetTransform">
      <Icon name="reset" />
    </ControlButton>
  </Controls>
</template>

<style>
@import '@vue-flow/controls/dist/style.css';
</style>