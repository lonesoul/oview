(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{196:function(a,e,i){"use strict";i.r(e);var t=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",[i("p",{staticClass:"item-desc"},[a._v("普通的雷达图")]),a._v(" "),i("o-chart",{attrs:{data:a.normalData,legend:a.normalLegend,"col-defs":a.normalColumnConfig}},[i("o-radar",{attrs:{axis:a.normaAxis,position:"item*score","color-field":"user"}})],1),a._v(" "),i("p",{staticClass:"item-desc"},[a._v("雷达面积图")]),a._v(" "),i("o-chart",{attrs:{data:a.normalData,legend:a.normalLegend,"col-defs":a.normalColumnConfig}},[i("o-radar",{attrs:{axis:a.normaAxis,"is-area":"",animate:a.animate,position:"item*score","color-field":"user"}})],1),a._v(" "),i("p",{staticClass:"item-desc"},[a._v("自定义图标-雷达图")]),a._v(" "),i("o-chart",{attrs:{data:a.imageData,"col-defs":a.imageColumnConfig,"custom-render":"extra",height:300,"chart-config":a.chartConfig},on:{"on-render":a.onRender}},[i("o-radar",{attrs:{axis:a.imageAxis,"is-area":"","custom-define":"",animate:a.animate,position:"item*score"}})],1)],1)};t._withStripped=!0;var n=i(3),o=i(2),r={components:{"o-chart":n.a,"o-radar":n.f},data:function(){return{normalData:o.f.normalData,normalLegend:{fieldName:"user",align:"center",itemWidth:null},normaAxis:[{fieldName:"score",label:function(a,e,i){return e===i-1?null:{top:!0}},grid:{lineDash:null,type:"arc"}},{fieldName:"item",grid:{lineDash:null}}],normalColumnConfig:{score:{min:0,max:120,nice:!1,tickCount:4}},animate:{appear:{animation:"groupWaveIn",delay:500}},imageData:o.f.imageData,imageColumnConfig:{score:{min:0,max:100}},imageAxis:[{fieldName:"score",label:null,grid:function(a){return"100"===a?{lineDash:null}:{lineWidth:0}},line:null},{fieldName:"item",grid:{lineDash:null,top:!0},label:null}],chartConfig:{appendPadding:[30,30,30,30]}}},methods:{onRender:function(a){var e=a.chart;e.area().position("item*score").style({fill:"r(0.45,0.55,0.15) 0:#fff 0.35:#DEF5F5 0.75:#C8EEEF 1:#A8E5E6",fillOpacity:100}),this.imageData.map(function(a){var i="风险偏好"===a.item||"风险承受能力"===a.item?-10:0;e.guide().html({position:[a.item,130],html:'<div style="width: 80px;height: 24px;text-align: center"><img src="'+a.img+'" style="width: 24px;height: 24px;" /><div style="color: #808080;transform:scale(0.8, 0.8);font-size:12px;">'+a.item+"</div></div></div>",offsetY:i})})}}},l=i(1),s=Object(l.a)(r,t,[],!1,null,null,null);s.options.__file="examples/components/chart/Radar.vue";e.default=s.exports}}]);