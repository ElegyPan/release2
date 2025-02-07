function loadScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.head.appendChild(script);
}

loadScript('./resources/scripts/js/echarts.min.js');
loadScript('./resources/scripts/js/data.js');


/*饼图*/

var optionPie1 = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        /*注意颜色写的位置*/
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [
            {
                name: "点位统计",
                type: "pie",
                /*如果radius是百分比则必须加引号*/
                radius: ["10%", "70%"],
                center: ["50%", "50%"],
                roseType: "radius",
                data: [
                    { value: 9, name: "古交市" },
                    { value: 3, name: "尖草坪区" },
                    { value: 3, name: "晋源区" },
                    { value: 6, name: "清徐具" },
                    { value: 6, name: "小店区" },
                    { value: 6, name: "综改区" },
                    { value: 3, name: "迎泽区" },
                    { value: 2, name: "阳曲县" }
                ],
                /*修饰饼形图文字相关的样式 label对象*/
                label: {
                    fontSize: 10
                },
                /*修饰引导线样式*/
                labelLine: {
                    /*连接到图形的线长度*/
                    length: 6,
                    /*连接到文字的线长度*/
                    length2: 8
                }
            }
        ]
    };


// 柱形图
  var optionBar1 = {
    color: new echarts.graphic.LinearGradient(
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0,
      0,
      0,
      1,
      [
        { offset: 0, color: "#00fffb" }, // 0 起始颜色
        { offset: 1, color: "#0061ce" } // 1 结束颜色
      ]
    ),
    tooltip: {
      trigger: "dataA02"
    },
    grid: {
      left: "0%",
      right: "3%",
      bottom: "3%",
      top: "3%",
      //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
      containLabel: true,
      // 是否显示直角坐标系网格
      show: true,
      //grid 四条边框的颜色
      borderColor: "rgba(0, 240, 255, 0.3)"
    },
    xAxis: [
      {
        type: "category",
        data: [
            "3-28",
            "3-29",
            "3-30",
            "3-31",
            "4-1",
            "4-2",
            "4-3"
        ],
        axisTick: {
          alignWithLabel: false,
          // 把x轴的刻度隐藏起来
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        // x轴这条线的颜色样式
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
            // width: 3
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          alignWithLabel: false,
          // 把y轴的刻度隐藏起来
          show: false
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        // y轴这条线的颜色样式
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
            // width: 3
          }
        },
        // y轴分割线的颜色样式
        splitLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
          }
        }
      },

        {
            type: "value",
            axisTick: {
                alignWithLabel: false,
                // 把y轴的刻度隐藏起来
                show: false
            },
            axisLabel: {
                color: "#4c9bfd",
                show:false
            },
            // y轴这条线的颜色样式
            axisLine: {
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)",
                    show:false
                    // width: 3
                }
            },
            // y轴分割线的颜色样式
            splitLine: {
                show:false,
                lineStyle: {
                    color: "rgba(0, 240, 255, 0.3)",
                    show:false
                }
            }
        }
    ],
    series: [
      {
        name: "流量",
        type: "bar",
        barWidth: "50%",
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          900,
          750
        ]
      },
        {
            name: "降水量",
            type: "line",
            yAxisIndex: 1,
            color:"#f0a29b",
            data: [
                17,
                15,
                14,
                21,
                19,
                9,
                7
            ]
        }
    ]
  };
