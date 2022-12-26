<template class="" >
  <header @click="showData()">
    <div class="flex items-center justify-between container m-auto py-5">
      <img src="../assets/dash-logo.svg" />
      <div class="flex items-center gap-9">
        <button
          class="flex items-center justify-between gap-5 p-2 pl-5 bg-dashBtnColor rounded-md text-sm font-bold font-sans tracking-wide"
        >
          Shohrux <span><img src="../assets/user-logo.svg" /></span>
        </button>
        <a href="#"><img src="../assets/log-out.svg" /></a>
      </div>
    </div>
    <div class="bg-slate-50/50 py-5">
      <div class="flex items-center justify-between container m-auto">
        <div
          class="flex items-center border-2 border-dashBtnColor2/70 rounded-md"
        >
          <a
            href=""
            class="rounded-l py-2 px-6 uppercase text-dashBtnColor2 tracking-widest text-xs font-medium hover:bg-blue-600 hover:text-white"
          >
            Dashboard
          </a>
          <button @click="showData()"
            class="py-2 px-6 uppercase text-dashBtnColor2 tracking-widest text-xs font-medium hover:bg-blue-600 hover:text-white"
          >
            Homiylar
          </button>
          <button
            class="rounded-r py-2 px-6 uppercase text-dashBtnColor2 tracking-widest text-xs font-medium hover:bg-blue-600 hover:text-white"
          >
            Talabalar
          </button>
        </div>
        <div class="flex items-center gap-4">
          <div class="flex items-center bg-dashInputColor rounded-md p-2 gap-1">
            <a href=""><img src="../assets/search.svg" alt="" /></a>
            <input
              class="w-full h-full text-sm bg-dashInputColor outline-0"
              type="text"
              placeholder="Izlash"
            />
          </div>
          <button
            class="flex items-center gap-2 text-dashfilterColor p-1.5 px-5 bg-dashfilterBgColor rounded-md"
          >
            <img src="../assets/filter.svg" /> Filter
          </button>
        </div>
      </div>
    </div>
  </header>
  <main class="bg-bgColor/40 w-full h-screen">
    <div class="container m-auto pt-8 space-y-3">
      <ul
        class="flex items-center p-3 justify-between text-xs font-medium text-dashListHeaderColor"
      >
        <li>#</li>
        <li>F.I.SH.</li>
        <li>TEL.RAQAMI</li>
        <li>HOMIYLIK SUMMASI</li>
        <li>SARFLANGAN SUMMA</li>
        <li>SANA</li>
        <li>HOLATI</li>
        <li>AMALLAR</li>
      </ul>
      <ul class="" v-for="item in dashboardData" :key="dashboardData.id">
        <li
          class="w-full p-3 bg-white flex items-center justify-between rounded-md"
        >
          <span>{{ item.id }}</span>
          <span>{{ item.full_name }}</span>
          <span>{{ item.phone }}</span>
          <span>{{ item.sum }}</span>
          <span>{{ item.spent }}</span>
          <span>{{ (item.created_at = "2022-12-25") }}</span>
          <span>{{ item.get_status_display }}</span>
          <span><img src="../assets/eye.svg" /></span>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import axios from "axios";
export default {
  name: "dashboard",
  props: {
    msg: String,
  },
  data() {
    return {
      dashboardData: "",
    };
  },
  methods: {
    async showData() {
      let config = {
        headers: {
          Accept: "application/json",
        },
      };
      const dashData = await axios.get(
        "https://club.metsenat.uz/api/v1/sponsor-list/",
        config
      );
      this.dashboardData = dashData.data.results;
    },
  },
};
</script>
