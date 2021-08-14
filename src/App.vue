<template>
  <div>
    <Modal :show="this.$store.state.showModalNeuronsCRUD">
      <template v-slot:header> Форма </template>
      <template v-slot:content>
        <FormNeuronsCRUD />
      </template>
    </Modal>
    <Modal :show="this.$store.state.showModalTagsCRUD">
      <template v-slot:header> Форма </template>
      <template v-slot:content>
        <FormTagsCRUD />
      </template>
    </Modal>
    <TheNavbar />
    <router-view />
  </div>
</template>
<script>
import TheNavbar from "@/components/TheNavbar";
import Modal from "@/components/Modal";
import FormNeuronsCRUD from "@/components/Form/FormNeuronsCRUD";
import FormTagsCRUD from "@/components/Form/FormTagsCRUD";
export default {
  name: "App",
  components: {
    TheNavbar,
    Modal,
    FormNeuronsCRUD,
    FormTagsCRUD,
  },
};
</script>
