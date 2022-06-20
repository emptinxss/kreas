<template>
  <div class="not-found">
    <div>
      <h1 class="fw-bold">Oops!</h1>

      <h2>404 - Page not found</h2>
      <p class="m-2">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <button class="btn btn-warning">
        <a href="/" class="link-home">Back to Home</a>
      </button>
    </div>
  </div>
</template>

<script></script>

<style>
.not-found {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100vh;
  color: #2c3e50;
}

.not-found h1 {
  font-size: 7rem;
}

.not-found h2 {
  font-size: 2srem;
  font-weight: 700;
}

.link-home {
  text-decoration: none;
  color: #2c3e50;
}
</style>
