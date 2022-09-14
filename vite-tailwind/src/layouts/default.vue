<script setup></script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/svg/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/count">Count</RouterLink>
    <RouterLink to="/fetch">Fetch</RouterLink>
    <RouterLink to="/position">Position</RouterLink>
    <RouterLink to="/tailwind">Tailwind</RouterLink>
    <RouterLink to="/bootstrap">Bootstrap</RouterLink>
    <RouterLink to="/test">TestCode</RouterLink>
  </nav>
  <RouterView />
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  margin-top: 2rem;
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: aquamarine;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 20px;
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    padding: 1rem 0;
    margin-top: 1rem;
    font-size: 1rem;
    text-align: left;
  }
}
</style>
