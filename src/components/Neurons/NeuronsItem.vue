<template>
  <div class="neuron-item">
    <h3>
      <span>{{ neuron.name }}</span>
      <span @click="$store.dispatch('DeleteNeuron', neuron.id)">&times;</span>
    </h3>
    <div class="neuron-tags">
      <span
        class="item-neuron-tags"
        v-for="tag in neuron.tags"
        :key="neuron.id + tag"
      >
        {{ tag }}
      </span>
    </div>
    <div class="neuron-memory">
      <span>
        {{ neuron.memory ? `${neuron.memory} MB` : "предустановленный" }}
      </span>
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
<style scoped>
.neuron-item h3 {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.neuron-item h3 span:last-child {
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s ease-in;
}
.neuron-item h3 span:last-child:hover {
  color: #a7bdd3;
}

.item-neuron-tags {
  margin-bottom: 5px;
}

.item-neuron-tags:last-child {
  margin-bottom: 0;
}
.neuron-item {
  position: relative;
  padding: 7px 20px;
  border-radius: 5px;
  background: #1e2b38;
  border: 1px solid #304290;
}

.neuron-tags {
  color: #a7bdd3;
  display: flex;
  flex-direction: column;
}
.neuron-memory {
  position: absolute;
  left: 50%;
  bottom: -40px;
  background: #121a24;
  padding: 10px 15px;
  color: #5b6671;
  border-radius: 3px;
  width: 200px;
  transform: translateX(-50%);
}
</style>
