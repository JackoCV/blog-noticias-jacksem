<template>
  <div>
    <h1>Blog de Noticias</h1>
    <nav>
      <ul>
        <li><NuxtLink to="/sucesos">Sucesos</NuxtLink></li>
        <li><NuxtLink to="/deportes">Deportes</NuxtLink></li>
        <li><NuxtLink to="/espectaculos">Espectáculos</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<style>
nav ul {
  list-style: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 15px;
}
</style>
