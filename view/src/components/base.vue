<template>
  <div class="com-container">
      <div class="com-chart" ref="">
        nihao 
        {{nowTime}}
      </div>
  </div>
</template>

<script>
// 通用代码
// 通用代码
// 通用代码 ,重要的事情说三遍
export default {
  data () {
    return {
      chartInstance: null,
      allData: null,
      nowTime: ''
    }
  },

  // 生命周期
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    // 初始化图表  init()实例化 setOption设置
    initChart () {
      this.chartInstance = this.$echarts.init()
      const initOption = {}
      this.chartInstance.setOption(initOption)
    },
    async getData () {
      // 获取数据 后 对allData进行赋值
      
      // 处理数据
      this.updateChart()
    },
    // 处理数据
    // 拿到数据后进行 更新
    updateChart () {
      const dataOption = {}
      this.chartInstance.setOption(dataOption)
    },
    // 屏幕适配
    screenAdapter () {
      const adapterOption = {}
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>

<style scoped>

</style>
