<template>
  <form class="form" @submit.prevent>
    <div class="form-control">
      <BaseInput
        v-model="neuron.name"
        type="text"
        placeholder="Название датасета"
      />
      <div class="error" v-if="errors.name">
        <small>{{ errors.name }}</small>
      </div>
      <BaseInput
        v-model="neuron.tags"
        type="text"
        placeholder="Введите теги через запятую"
      />
      <div class="error" v-if="errors.tags">
        <small>{{ errors.tags }}</small>
      </div>
      <BaseInput
        v-model="neuron.memory"
        type="text"
        placeholder="Размер датасета"
      />
      <div class="error" v-if="errors.memory">
        <small>{{ errors.memory }}</small>
      </div>
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
      errors: {
        name: "",
        tags: "",
        memory: "",
      },
    };
  },
  methods: {
    addNeuron() {
      const neuron = Object.assign({}, this.neuron);
      const checkTags = this.neuron.tags.split(",");
      for (let key in this.errors) this.errors[key] = "";
      if (this.neuron.name.length < 4 || this.neuron.name.length > 15) {
        this.errors.name =
          "Имя должно быть не меньше 4 символов и не больше 15";
      }

      if (checkTags === 1 && checkTags[0].length === 0) {
        this.errors.tags = "Введите теги";
      } else {
        checkTags.forEach((el) => {
          if (el.length < 3 || el.length > 15)
            this.errors.tags =
              "Теги должны быть не меньше 3 символов и не больше 15";
        });
      }

      if (
        this.neuron.memory.length > 0 &&
        (this.neuron.memory.replace(/\s/g, "").length === 0 ||
          isNaN(this.neuron.memory))
      ) {
        this.errors.memory = "Введите размер датасета(цифры)";
      }

      for (let key in this.errors) if (this.errors[key] !== "") return;

      this.$store.dispatch("AddNeuron", neuron);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin-top: 20px;
}
.form-control:first-child {
  margin-top: 0;
}
.form-control input {
  margin-top: 10px;
}
.error {
  color: red;
  font-size: 12px;
  margin-top: 2px;
}
button {
  margin-top: 20px;
}
</style>
