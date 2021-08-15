<template>
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
</template>

<script>
import Tag from "@/components/Tag/Tag.vue";
import Neurons from "@/components/Neurons/Neurons.vue";
export default {
  name: "Home",
  components: {
    Tag,
    Neurons,
  },
};
</script>

<style></style>
