<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.date }} | {{ article.author }}</p>
    <nuxt-content :document="article" />

    <nav class="navigation">
      <NuxtLink v-if="prev" :to="`/sucesos/${prev.slug}`">Anterior: {{ prev.title }}</NuxtLink>
      <NuxtLink v-if="next" :to="`/sucesos/${next.slug}`">Siguiente: {{ next.title }}</NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('sucesos', params.slug).fetch();

    const [prev, next] = await $content('sucesos')
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
