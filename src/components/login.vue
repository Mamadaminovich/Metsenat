<template>
  <main class="flex w-full h-screen items-center justify-center bg-bgColor/60">
    <div class="flex flex-col items-center justify-center gap-9">
      <div>
        <img class="mr-1" src="./assets/logo.svg" alt="" />
      </div>
      <div class="w-96 flex flex-col bg-white p-8 pt-10">
        <h2 class="leading-7 text-2xl font-bold mb-12">Kirish</h2>
        <form action="" class="flex flex-col gap-6 mb-4">
          <label
            for="username"
            class="text-xs tracking-wider font-medium leading-4"
            >LOGIN</label
          >
          <input
            v-model="username"
            class="rounded-md bg-inputBG text-sm p-2"
            type="text"
            placeholder="adm8904"
            name="username"
          />
          <label
            for="parol"
            class="text-xs tracking-wider font-medium leading-4"
            >PAROL</label
          >
          <input
            v-model="parol"
            class="rounded-md bg-inputBG text-sm p-2"
            type="password"
            name="password"
          />
        </form>
        <button
          class="mt-3 border-inputColor text-sm p-2 py-3 rounded-md bg-btnColor text-white"
        >
          <router-link to="/dashboard">Kirish</router-link>
        </button>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      parol: "",
    };
  },
  // methods: {
  //   async postLogin() {
  //     axios.post(
  //       "https://club.metsenat.uz/api/v1/auth/login/",
  //       {
  //         username: username,
  //         password: parol,
  //       },
  //       {
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     );
  //   },
  // },
};
</script>
