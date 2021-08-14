<template>
  <div class="neuron">
    <NeuronItem v-for="item in neurons" :key="item.name" :neuron="item" />
  </div>
</template>

<script>
import NeuronItem from "@/components/Neurons/NeuronsItem";
export default {
  name: "Neurons",
  components: {
    NeuronItem,
  },
  props: {
    neurons: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
