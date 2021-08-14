<template>
  <header>
    <BaseButton
      @click.native="
        $store.commit(
          'setShowModalNeuronsCRUD',
          !$store.state.showModalNeuronsCRUD
        )
      "
    >
      + Датасет
    </BaseButton>
    <BaseButton
      @click.native="
        $store.commit('setShowModalTagsCRUD', !$store.state.showModalTagsCRUD)
      "
    >
      + Тег
    </BaseButton>
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>
