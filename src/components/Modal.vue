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

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1e2b38;
  padding: 25px;
  border-radius: 5px;
  width: 420px;
}
.modal-header {
  margin-bottom: 20px;
}
</style>