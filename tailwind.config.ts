const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // src/app 폴더 내부의 모든 관련 파일을 대상으로 지정
    path.join(__dirname, './src/app/**/*.{js,ts,jsx,tsx,mdx}'),

    // 향후 src/components 폴더를 만들 경우를 대비
    // path.join(__dirname, './src/components/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};