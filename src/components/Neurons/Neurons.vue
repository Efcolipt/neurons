<template>
  <div class="neurons" v-if="neurons.length > 0">
    <div class="row grid">
      <NeuronItem v-for="item in neurons" :key="item.id" :neuron="item" />
    </div>
  </div>
  <div v-else>
    <p class="empty">Пока ничего тут нет :)</p>
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
      type: Array,
      default: () => [],
    },
  },
};
</script>
