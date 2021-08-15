<template>
  <div class="tags" v-if="tags.length > 0">
    <div class="row flex">
      <TagItem
        v-for="tag in tags"
        :key="tag"
        :ref="`item${tag}`"
        @click.native="addSortTags(tag)"
      >
        {{ tag }}
      </TagItem>
    </div>
  </div>
  <div v-else>
    <p class="empty">Пока ничего тут нет :)</p>
  </div>
</template>

<script>
import TagItem from "@/components/Tag/TagItem";
export default {
  name: "Tag",
  components: {
    TagItem,
  },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addSortTags(tag) {
      const a = `item${tag}`;
      if (!(this.$refs[a][0].$el.className.indexOf("tag-item--active") > -1)) {
        this.$store.commit("AddSortTags", tag);
      } else {
        this.$store.commit("RemoveSortTags", tag);
      }
      this.$refs[a][0].$el.classList.toggle("tag-item--active");
    },
  },
};
</script>
