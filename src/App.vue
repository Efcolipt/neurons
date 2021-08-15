<template>
  <div>
    <Modal :show="this.$store.state.showModalNeurons">
      <template v-slot:header> <h3>Добавление датасета</h3> </template>
      <template v-slot:content>
        <FormNeurons />
      </template>
    </Modal>
    <TheNavbar />
    <router-view />
  </div>
</template>
<script>
import TheNavbar from "@/components/TheNavbar";
import Modal from "@/components/Modal";
import FormNeurons from "@/components/Form/FormNeurons";
export default {
  name: "App",
  components: {
    TheNavbar,
    Modal,
    FormNeurons,
  },
};
</script>
