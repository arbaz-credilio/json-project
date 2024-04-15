<template>
  <UContainer class="mx-auto mt-6 w-96">
    <UInput v-model="value" placeholder="search" class="w-full" />
  </UContainer>
  <UContainer
    class="grid md:grid-cols-4 grid-cols-2 grid-rows-3 gap-4 w-full lg:w-2/3 mx-auto my-4 items-end"
  >
    <UCard
      v-for="user in showUsers"
      :key="user.id"
      class="cursor-pointer h-full"
      @click="() => navigateTo(`user/${user.id}`)"
    >
      <p>{{ user.name }}</p>
      <p>{{ user.phone }}</p>
    </UCard>
  </UContainer>

  <UContainer class="ml-0 w-full md:w-1/4 m-auto" v-if="isFormOpen">
    <user-form />
  </UContainer>
  <UContainer class="flex justify-center">
    <UButton color="blue" @click="isFormOpen = !isFormOpen">{{
      isFormOpen ? "close" : "Create User"
    }}</UButton>
  </UContainer
  >
</template>

<script setup lang="ts">
const users = getAllUsers();
const value: Ref<string> = ref("");
const formOpen: Ref<boolean> = ref(false);
const showUsers = computed(() => {
  return users?.value.filter((each: any) => {
    return each?.name.toLowerCase().includes(value.value.toLowerCase());
  });
});
let isFormOpen = ref(false);
</script>
