<template>
  <div class="tags" v-if="tags.length > 0">
    <div class="row flex">
      <TagItem
        v-for="tag in tags"
        :key="tag"
        @click.native="addSortTags($event, tag)"
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
    addSortTags(event, tag) {
      const $el =
        event.target.tagName === "SPAN"
          ? event.target.parentNode
          : event.target;

      if (!$el.classList.contains("tag-item--active")) {
        this.$store.commit("AddSortTags", tag);
      } else {
        this.$store.commit("RemoveSortTags", tag);
      }
      $el.classList.toggle("tag-item--active");
    },
  },
};
</script>
