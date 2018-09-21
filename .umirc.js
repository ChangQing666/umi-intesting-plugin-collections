
// ref: https://umijs.org/config/
import path from "path";

export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      hd: true,
      fastClick: true,
      dynamicImport: true,
      title: 'umi-intresting-plugin-collection',
      dll: true,
      pwa: true,
      routes: {
        exclude: [/models\//],
      },
      hardSource: true,
    }],
  ],
  sass: {},
  base: '/',
  alias:{
    '@': path.resolve(__dirname,'src')
  },
  // history: 'hash',
  exportStatic: true,
  proxy:{
    "/api": {
      target: "http://10.10.42.53/v1",
      changeOrigin: true,
      secure: false,
      pathRewrite: { "^/api" : "" }
    }
  }
}
