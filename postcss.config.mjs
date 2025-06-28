/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // 'tailwindcss': {}, // 이 부분을 아래와 같이 변경
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

export default config;