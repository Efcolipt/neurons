<template>
  <div class="modal" v-if="show">
    <div class="modal-header">
      <h3><slot name="header"></slot></h3>
      <div class="close" @click="$emit('close')">&times;</div>
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
  z-index: 10;
}
.modal-header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.close {
  font-size: 20px;
  padding: 0px 7px;
  border: 1px solid #ccc;
  cursor: pointer;
  vertical-align: -webkit-baseline-middle;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease-in, background 0.3s ease-in;
}

.close:hover {
  border: 1px solid #fff;
  background: #fff;
  color: #1e2b38;
}
</style>
