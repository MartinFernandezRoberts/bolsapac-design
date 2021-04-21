module.exports = {
  assetsDir: 'assets',

  pages:{
    index: 'src/index/main.js',
  },

  runtimeCompiler: true,

  publicPath: process.env.NODE_ENV === 'production'
  ? '/bolsapac-design/'
  : '/'

}

