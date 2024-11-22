<template>
  <div>
    <h1>DADOS DO BACKEND</h1>
    <div v-if="dataStore.data">
        <p>{{ dataStore.data.message }}</p>
    </div>
    <div v-else>
        <p>Carregando...</p>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from '~/stores/data';

const dataStore = useDataStore();

onMounted( async () => {
    await dataStore.fetchData();
});
</script>

<style>

</style>