module.exports = {
    publicPath: './',
    outputDir: 'dist',
    configureWebpack: {
        externals: {
            'vue': 'Vue',
           'element-ui': 'ELEMENT',
        //   'vue-router': 'VueRouter',
        //   'vuex': 'Vuex',
        //   'axios': 'axios'
         
        }
      }
}