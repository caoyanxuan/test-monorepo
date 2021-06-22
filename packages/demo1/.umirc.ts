import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  outputPath: '../../dist/demo1', // 将打包好的dist输出到最外层
  qiankun: {
    slave: {}, 
  },
  base: '/demo1/', 
});
