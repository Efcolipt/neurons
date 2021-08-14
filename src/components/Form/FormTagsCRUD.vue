<template>
  <form class="form" @submit.prevent>
    <div class="form-control">
      <h2>Параметры тега</h2>
      <BaseInput type="text" placeholder="Название Тега" />
    </div>

    <BaseButton>Сформировать</BaseButton>
  </form>
</template>

<script>
export default {
  name: "FormTagsCRUD",
};
</script>
