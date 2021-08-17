<template>
  <div>
    <TheNavbar>
      <div class="header-box">
        <BaseButton
          @click.native="
            $store.commit('setShowModalNeurons', !$store.state.showModalNeurons)
          "
        >
          + Датасет
        </BaseButton>
      </div>
    </TheNavbar>
    <div class="container">
      <section>
        <h3>Теги</h3>
        <Tag :tags="$store.state.tags" />
      </section>
      <section>
        <h3>Датасеты</h3>
        <Neurons :neurons="$store.getters.SortByTags" />
      </section>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag/Tag.vue";
import Neurons from "@/components/Neurons/Neurons.vue";
import TheNavbar from "@/components/TheNavbar.vue";
export default {
  name: "Home",
  components: {
    Tag,
    Neurons,
    TheNavbar,
  },
};
</script>

<style></style>
