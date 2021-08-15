<template>
  <input :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String,
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  background: #283542;
  border: 0;
  font-size: 16px;
  padding: 10px;
  border-radius: 3px;
  color: #94a9be;
  outline: none;
}
</style>
