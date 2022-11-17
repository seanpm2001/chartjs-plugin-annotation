(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{570:function(n,t,a){"use strict";a.r(t);var o=a(26),e=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"callout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#callout"}},[this._v("#")]),this._v(" Callout")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:5>\nconst DATA_COUNT = 16;\nconst MIN = 20;\nconst MAX = 100;\n\nUtils.srand(8);\n\nconst labels = [];\nfor (let i = 0; i < DATA_COUNT; ++i) {\n  labels.push('' + i);\n}\n\nconst numberCfg = {count: DATA_COUNT, min: MIN, max: MAX};\n\nconst data = {\n  labels: labels,\n  datasets: [{\n    data: Utils.numbers(numberCfg)\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'line',\n  borderColor: 'rgb(100, 149, 237)',\n  borderDash: [6, 6],\n  borderDashOffset: 0,\n  borderWidth: 3,\n  label: {\n    display: true,\n    backgroundColor: 'rgb(100, 149, 237)',\n    content: (ctx) => 'Average: ' + average(ctx).toFixed(2)\n  },\n  scaleID: 'y',\n  value: (ctx) => average(ctx)\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'line',\n  borderColor: 'rgba(102, 102, 102, 0.5)',\n  borderDash: [6, 6],\n  borderDashOffset: 0,\n  borderWidth: 3,\n  label: {\n    display: true,\n    backgroundColor: 'rgba(102, 102, 102, 0.5)',\n    borderWidth: 1,\n    borderColor: 'rgba(102, 102, 102, 0.5)',\n    callout: {\n      display: true,\n      borderColor: 'rgba(102, 102, 102, 0.5)',\n      borderDash: [6, 6],\n      borderWidth: 2,\n      margin: 0\n    },\n    color: 'black',\n    content: (ctx) => (average(ctx) + standardDeviation(ctx)).toFixed(2),\n    position: 'start',\n    xAdjust: 100,\n    yAdjust: -50\n  },\n  scaleID: 'y',\n  value: (ctx) => average(ctx) + standardDeviation(ctx)\n};\n// </block:annotation2>\n\n// <block:annotation3:3>\nconst annotation3 = {\n  type: 'line',\n  borderColor: 'rgba(102, 102, 102, 0.5)',\n  borderDash: [6, 6],\n  borderDashOffset: 0,\n  borderWidth: 3,\n  label: {\n    display: true,\n    backgroundColor: 'rgba(102, 102, 102, 0.5)',\n    borderWidth: 1,\n    borderColor: 'rgba(102, 102, 102, 0.5)',\n    callout: {\n      display: true,\n      borderColor: 'rgba(102, 102, 102, 0.5)',\n      borderDash: [6, 6],\n      borderWidth: 2,\n      margin: 0\n    },\n    color: 'black',\n    content: (ctx) => (average(ctx) - standardDeviation(ctx)).toFixed(2),\n    position: 'end',\n    xAdjust: -100,\n    yAdjust: 50\n  },\n  scaleID: 'y',\n  value: (ctx) => average(ctx) - standardDeviation(ctx)\n};\n// </block:annotation3>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scale: {\n      y: {\n        beginAtZero: true,\n        max: 120,\n        min: 0\n      }\n    },\n    plugins: {\n      annotation: {\n        annotations: {\n          annotation1,\n          annotation2,\n          annotation3\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\n// <block:utils:4>\nfunction average(ctx) {\n  const values = ctx.chart.data.datasets[0].data;\n  return values.reduce((a, b) => a + b, 0) / values.length;\n}\n\nfunction standardDeviation(ctx) {\n  const values = ctx.chart.data.datasets[0].data;\n  const n = values.length;\n  const mean = average(ctx);\n  return Math.sqrt(values.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);\n}\n\n// </block:utils>\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = dataset.data.map(() => Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add data',\n    handler: function(chart) {\n      chart.data.labels.push(chart.data.labels.length);\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.push(Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove data',\n    handler: function(chart) {\n      chart.data.labels.shift();\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.shift();\n      });\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);