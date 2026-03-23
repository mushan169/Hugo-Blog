/** @type {import('tailwindcss').Config} */
module.exports = {
  // 匹配 Hugo 模板文件的路径（根据你的项目结构调整）
  content: [
    "./layouts/**/*.{html,js,jsx,ts,tsx}",
    "./content/**/*.{md,html}",
    "./themes/**/*.{html,js}",
    "./assets/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}