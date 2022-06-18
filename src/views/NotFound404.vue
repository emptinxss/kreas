<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>Oops!</h1>
      </div>
      <h2>404 - Page not found</h2>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <a href="/" class="linke text-decoration-none">Go To Homepage</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#notfound {
  position: relative;
  height: 100vh;
  color: #2c3e50;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.notfound {
  max-width: 410px;
  width: 100%;
  text-align: center;
}

.notfound .notfound-404 {
  height: 142px;
  position: relative;
  z-index: -1;
}

.notfound .notfound-404 h1 {
  font-size: 112px;
  margin: 0px;
  font-weight: 900;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.notfound h2 {
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
}

.notfound p {
  font-size: 14px;
  font-weight: 400;
  margin: 2rem;
}

.linke {
  color: #2c3e50;
}
</style>
