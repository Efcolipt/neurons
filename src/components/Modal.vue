<template>
  <div class="modal" v-if="show">
    <div class="modal-header">
      <h3><slot name="header"></slot></h3>
    </div>
    <div class="modal-body">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
