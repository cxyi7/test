
      import { defineConfig } from 'vite';
      import vue from '@vitejs/plugin-vue';
      import sass from 'sass-loader';

      export default defineConfig({
        plugins: [vue()],
        css: {
          preprocessorOptions: {
            sass: {
              /* preprocessor options */
            },
          },
        },
        server: {
          host: true, // host设置为true才可以使用network的形式，以ip访问项目
          port: 8080, // 端口号
          open: false, // 自动打开浏览器
          cors: true, // 跨域设置允许
          strictPort: false, // 如果端口已占用直接退出
        },
      });
    