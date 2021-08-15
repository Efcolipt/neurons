<template>
  <header>
    <div class="header-box">
      <BaseButton
        @click.native="
          $store.commit('setShowModalNeurons', !$store.state.showModalNeurons)
        "
      >
        + Датасет
      </BaseButton>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheNavbar",
};
</script>
<style scoped>
header {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  border-right: 2px solid #121a24;
}
.header-box {
  padding: 25px 10px;
  border-bottom: 2px solid #121a24;
}

.header-box button {
  background: none;
  border: none;
  color: #94a9be;
}
</style>
