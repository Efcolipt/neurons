<template>
  <form class="form" @submit.prevent>
    <div class="form-control">
      <h2>Параметры датасета</h2>
      <BaseInput type="text" placeholder="Название датасета" />
      <BaseInput type="text" placeholder="Теги" />
      <BaseInput type="text" placeholder="Размер датасета" />
    </div>

    <BaseButton>Сформировать</BaseButton>
  </form>
</template>

<script>
export default {
  name: "FormNeuronsCRUD",
};
</script>
