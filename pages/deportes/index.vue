<template>
    <div>
      <h1>Deportes</h1>
      <ul>
        <li v-for="article in articles" :key="article.slug">
          <NuxtLink :to="`/deportes/${article.slug}`">{{ article.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $content }) {
      const articles = await $content('deportes').fetch();
      return { articles };
    }
  }
  </script>
  