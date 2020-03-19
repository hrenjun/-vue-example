<template>
  <div style="width: 600px;height:800px;" id="myChart"></div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  mounted() {
    /*生命周期函数 刷新就会触发 */

    this.drawPie();
  },

  methods: {
    drawPie() {
      var charts = this.$echarts.init(document.getElementById("myChart"));

      var option = {
        title: {
          text: "这个是测试",
          link: "https://www.baidu.com",

          target: "blank",
		  textAlign: "left",
		  top:20
        },
        tooltip: {
			 trigger: 'item',
		},
        //提示层
        legend: {
		  data: ["数值"],
		  top:20
        },
        radar: {
          name: {
            textStyle: {
              color: "#fff", //字体颜色
              backgroundColor: "#999", //背景色

              borderRadius: 3, //圆角
              padding: [3, 5] //padding
            }
          },

          center: ["50%", "50%"],
          radius: "60%",
          startAngle: 270,
          indicator: [
            {
              name: "每周一走访",
              max: 600
            },
            {
              name: "每周一清查",

              max: 600
            },
            {
              name: "每日一设卡",
              max: 600
            },
            {
              name: "每周一研判",
              max: 600
            },
            {
              name: "每村一组织",
              max: 600
            },
            {
			  name: "每周一训练",
              max: 600
            }
          ]
        },

        series: [
          {
            name: "测试标题名字",
            type: "radar",
            data: [
              {
                value: [400, 200, 200, 500, 300, 200],

                name: "数值",
                areaStyle: {
                  opacity: 0.9,
                  color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                    {
                      color: "#B8D3E4",
                      offset: 0
                    },
                    {
                      color: "#72ACD1",
                      offset: 1
                    }
                  ])
                }
              }
            ]
          }
        ]
      };

      charts.setOption(option);
    }
  }
};
</script>
<style>
.declare {
  padding: 0.4rem;
  font-size: 0.3rem;
}
</style>