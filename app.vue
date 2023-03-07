<template>
  <h1>useFetch works</h1>
  <div v-if="response">response: {{ response }}</div>
  <div v-else-if="error">error: {{ error }}</div>
  <div v-else>loading</div>

  <h1>$fetch fails</h1>
  <button @click="post">POST</button>
  <br />
  {{ res }}
</template>

<script setup>
const req = [
  `/api/message`,
  {
    method: 'POST',
    body: {
      message: 'test',
    },
  },
];
const { data: response, error } = await useFetch(...req);

const res = ref(null);
const post = async () => {
  try {
    res.value = await $fetch(...req);
    console.log(res);
  } catch (error) {
    res.value = error;
  }
};
</script>
