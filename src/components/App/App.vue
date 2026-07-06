<template>
  <Suspense>
    <RouterView />
    <template #fallback>
      <div class="loader"></div>
    </template>
  </Suspense>
</template>

<style>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
