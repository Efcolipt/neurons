<template>
  <div class="neuron-item">
    <span>{{ neuron.name }}</span>
    <div class="neuron-tags">
      <span class="item-neuron-tags" v-for="tag in neuron.tags" :key="tag.name">
        {{ tag.name }}
      </span>
    </div>
    <div class="neuron-memory">
      <span>{{ neuron.memory || "предустановленный" }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NeuronsItem",
  props: {
    neuron: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
