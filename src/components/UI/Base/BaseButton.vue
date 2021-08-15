<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
};
</script>
<style scoped>
.btn {
  width: 100%;
  font-size: 16px;
  padding: 15px;
  background: #283542;
  color: #94a9be;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #304254;
}
</style>
