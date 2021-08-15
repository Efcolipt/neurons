<template>
  <form class="form" @submit.prevent>
    <div class="form-control">
      <BaseInput
        v-model="neuron.name"
        type="text"
        placeholder="Название датасета"
      />
      <BaseInput v-model="neuron.tags" type="text" placeholder="Теги" />
      <BaseInput
        v-model="neuron.memory"
        type="text"
        placeholder="Размер датасета"
      />
    </div>

    <BaseButton @click.native="addNeuron"> Сформировать </BaseButton>
  </form>
</template>

<script>
export default {
  name: "FormNeurons",
  data() {
    return {
      neuron: {
        name: "",
        tags: "",
        memory: "",
      },
    };
  },
  methods: {
    addNeuron() {
      const neuron = Object.assign({}, this.neuron);
      this.$store.dispatch("AddNeuron", neuron);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin-bottom: 20px;
}
.form-control input {
  margin-bottom: 10px;
}
</style>