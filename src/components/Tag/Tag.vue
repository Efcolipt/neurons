<template>
  <div class="tags">
    <TagItem v-for="tag in tags" :key="tag.value">
      {{ tag.value }}
    </TagItem>
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
      type: Object,
      default: () => {},
    },
  },
};
</script>
