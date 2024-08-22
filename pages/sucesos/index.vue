<template>
    <div>
      <h1>Sucesos</h1>
      <ul>
        <li v-for="article in articles" :key="article.slug">
          <NuxtLink :to="`/sucesos/${article.slug}`">{{ article.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $content }) {
      const articles = await $content('sucesos').fetch();
      return { articles };
    }
  }
  </script>
  