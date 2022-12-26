<script setup>
import dashboardVue from "./components/dashboard.vue";
</script>
<template>
  <!-- <dashboardVue></dashboardVue> -->
  <main class="flex w-full h-screen items-center justify-center bg-bgColor/60">
    <div class="flex flex-col items-center justify-center gap-9">
      <div>
        <img class="mr-1" src="./assets/logo.svg" alt="" />
      </div>
      <div class="w-96 flex flex-col bg-white p-8 pt-10">
        <h2 class="leading-7 text-2xl font-bold mb-12">Kirish</h2>
        <form action="" class="flex flex-col gap-6">
          <label
            for="username"
            class="text-xs tracking-wider font-medium leading-4"
            >LOGIN</label
          >
          <input
            class="rounded-md bg-inputBG text-sm p-2"
            v-modal="login"
            type="text"
            placeholder="adm8904"
            name="username"
          />
          <label
            for="password"
            class="text-xs tracking-wider font-medium leading-4"
            >PAROL</label
          >
          <input
            v-bind:value="password"
            class="rounded-md bg-inputBG text-sm p-2"
            type="password"
            name="password"
          />
          <button
            type="submit"
            class="mt-3 border-inputColor text-sm p-2 py-3 rounded-md bg-btnColor text-white"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {
    dashboardVue,
  },
};
</script>
