<template>
  <Suspense>
    <RouterView />
    <template #fallback>
      <div :class="$style.loaderWrap">
        <div :class="$style.spinner"></div>
      </div>
    </template>
  </Suspense>
</template>

<style module>
.loaderWrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.spinner {
  width: 80px;
  height: 80px;
  border: 8px solid #e0f7ff;
  border-top-color: #00bfff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
