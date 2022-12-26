/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        btnColor: "#2E5BFF",
        bgColor: "#E5E5E5",
        inputBG: "rgba(224, 231, 255, 0.2)",
        dashBtnColor: "#F1F1F3",
        dashTopshadow: "0px 25px 40px rgba(0, 0, 0, 0.03)",
        dashBtnColor2: 'rgba(51, 102, 255, 0.6)',
        dashInputColor: "#E8E8E8",
        dashfilterColor: "#3365FC",
        dashfilterBgColor: "#EDF1FD",
        dashListBorderColor: "rgba(46, 91, 255, 0.08)",
        dashListHeaderColor: "#B1B1B8",
        dashUZSColor: "#B2B7C1",
        dashListTitleColor: "#5BABF2",
      },
      sizes: {
        lg: "670px",
      }
    },
  },
  plugins: [],
}
