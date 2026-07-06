<template>
  <header :class="$style.header">
    <nav>
      <RouterLink
        to="/"
        :class="$style.link"
        :active-class="$style.activeLink"
        exact
      >
        Home
      </RouterLink>
      <RouterLink
        to="/movies"
        :class="$style.link"
        :active-class="$style.activeLink"
      >
        Search
      </RouterLink>
    </nav>
  </header>
</template>

<style module src="./Header.module.css"></style>
