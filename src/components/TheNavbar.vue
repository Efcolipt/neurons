<template>
  <header>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>
<style scoped>
header {
  position: absolute;
  z-index: 30;
  left: 0;
  bottom: 0;
  top: 0;
  border-right: 2px solid #121a24;
}
.header-box {
  padding: 25px 10px;
  border-bottom: 2px solid #121a24;
}

.header-box button {
  background: none;
  border: none;
  color: #94a9be;
}
</style>
