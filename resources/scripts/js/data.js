
/*初始数据编码规则：
 


*/

//XXX
 var dataA01=[
                    { value: 9, name: "古交市" },
                    { value: 3, name: "尖草坪区" },
                    { value: 3, name: "晋源区" },
                    { value: 6, name: "清徐具" },
                    { value: 6, name: "小店区" },
                    { value: 6, name: "综改区" },
                    { value: 3, name: "迎泽区" },
                    { value: 2, name: "阳曲县" }
                ];

//XXX
var dataA02 = {
    name: "",
    value: 1200,
    // 1. 修改当前柱形的样式
    itemStyle: {
      color: "#254065"
    },
    // 2. 鼠标放到柱子上不想高亮显示
    emphasis: {
      itemStyle: {
        color: "#254065"
      }
    },
    // 3. 鼠标经过柱子不显示提示框组件
    tooltip: {
      extraCssText: "opacity: 0"
    }
  };
  
  
function A(){
console.log(dataA02);
}
A();