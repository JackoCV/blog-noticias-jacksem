<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.date }} | {{ article.author }}</p>
    <nuxt-content :document="article" />

    <nav class="navigation">
      <NuxtLink v-if="prev" :to="`/deportes/${prev.slug}`">Anterior: {{ prev.title }}</NuxtLink>
      <NuxtLink v-if="next" :to="`/deportes/${next.slug}`">Siguiente: {{ next.title }}</NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {

    const article = await $content('deportes', params.slug).fetch();


    const [prev, next] = await $content('deportes')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch();

    return {
      article,
      prev,
      next
    };
  }
}
</script>

<style>
.navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
