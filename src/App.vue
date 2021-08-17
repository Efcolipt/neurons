<template>
  <div>
    <Modal
      :show="this.$store.state.showModalNeurons"
      @close="$store.commit('setShowModalNeurons', false)"
    >
      <template v-slot:header> <h3>Добавление датасета</h3> </template>
      <template v-slot:content>
        <FormNeurons />
      </template>
    </Modal>
    <router-view />
  </div>
</template>
<script>
import Modal from "@/components/Modal";
import FormNeurons from "@/components/Form/FormNeurons";
export default {
  name: "App",
  components: {
    Modal,
    FormNeurons,
  },
};
</script>
