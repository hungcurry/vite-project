<script setup>
const refName = ref('curry');

const refObj = ref({
  X: 0,
  Y: 0,
});

const abcFn = () => {
  console.log(`89798`);
  debugger;
};
abcFn();
const abcFn2 = a => a + 2;
abcFn2();
</script>

<template>
  <img
    alt="Vue logo"
    class="logo"
    src="@/assets/svg/logo.svg"
    width="125"
    height="125"
  />

  <!-- header menu -->
  <ul
    v-for="(item, idx) in reactiveAry.data"
    :key="item.name"
    class="navbox fixed left-0 bottom-0 z-50 flex w-full items-center justify-between bg-fb-header text-white lg:static lg:left-auto lg:bottom-auto lg:w-auto lg:justify-center"
  >
    <li
      class="nav js-nav-active flex-1 items-center border-b-4 border-transparent lg:mr-6 lg:flex-grow-0"
      id="n1"
    >
      <a href="javascript:;" class="flex justify-center px-10 py-4 lg:px-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[30px] w-[30px] text-fb"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
          />
        </svg>
      </a>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
h1 {
  font-size: 24px;
}

.card {
  width: 16rem;
  color: $primary;
}

.js-contactPerson::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -10px;
  z-index: 10;
  width: 10px;
  height: 125%;
  transform: translateY(-50%);
}
</style>
