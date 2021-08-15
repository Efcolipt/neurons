<template>
  <div class="tags-item">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "TagItem",
};
</script>

<style scoped>
.tag-item--active {
  color: #a4bad0;
  background: #242f3d;
}
.tags-item {
  padding: 7px 20px;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
  margin-top: 10px;
  border: 1px solid #304290;
}
</style>
