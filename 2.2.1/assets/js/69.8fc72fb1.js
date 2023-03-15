(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{387:function(n,t,o){"use strict";o.r(t);var e=o(4),i=Object(e.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"interaction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#interaction"}},[this._v("#")]),this._v(" Interaction")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:setup:3>\nconst AXIS = ['xy', 'x', 'y'];\nconst MODE = ['nearest', 'point', 'x', 'y'];\n\nlet axisIndex = 0;\nlet modeIndex = 0;\n\nUtils.srand(8);\n\nconst data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n  datasets: [{\n    type: 'line',\n    label: 'Dataset 1',\n    borderColor: 'rgb(54, 162, 235)',\n    borderWidth: 2,\n    fill: false,\n    data: Utils.numbers({count: 7, min: 0, max: 100}),\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'box',\n  backgroundColor: 'rgba(255, 245, 157, 0.2)',\n  borderColor: 'rgb(255, 245, 157)',\n  borderWidth: 2,\n  enter: function({element}) {\n    console.log(element.label.options.content + ' entered');\n    element.label.options.font.size = 14;\n    return true;\n  },\n  click: function({element}) {\n    console.log(element.label.options.content + ' clicked');\n  },\n  leave: function({element}) {\n    console.log(element.label.options.content + ' left');\n    element.label.options.font.size = 12;\n    return true;\n  },\n  label: {\n    display: true,\n    content: 'Outer box annotation',\n    position: {\n      y: 'start'\n    },\n    font: {\n      size: 12\n    }\n  },\n  xMax: 'June',\n  xMin: 'February',\n  xScaleID: 'x',\n  yMax: 90,\n  yMin: 10,\n  yScaleID: 'y'\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'box',\n  backgroundColor: 'rgba(165, 214, 167, 0.2)',\n  borderColor: 'rgb(165, 214, 167)',\n  borderWidth: 2,\n  enter: function({element}) {\n    console.log(element.label.options.content + ' entered');\n    element.label.options.font.size = 14;\n    return true;\n  },\n  click: function({element}) {\n    console.log(element.label.options.content + ' clicked');\n  },\n  leave: function({element}) {\n    console.log(element.label.options.content + ' left');\n    element.label.options.font.size = 12;\n    return true;\n  },\n  label: {\n    display: true,\n    content: 'Inner box annotation',\n    position: {\n      y: 'start'\n    },\n    font: {\n      size: 12\n    }\n  },\n  xMax: 'May',\n  xMin: 'March',\n  xScaleID: 'x',\n  yMax: 75,\n  yMin: 25,\n  yScaleID: 'y'\n};\n// </block:annotation2>\n\n// <block:utils:4>\nfunction getTitle({chart}) {\n  const options = chart.options.plugins.annotation.interaction;\n  const mode = options.mode || 'nearest';\n  const axis = options.axis || 'xy';\n  const intersect = !!options.intersect;\n  return 'Mode: ' + mode + ', axis: ' + axis + ', intersect: ' + intersect;\n}\n// </block:utils>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scales: {\n      y: {\n        beginAtZero: true,\n        min: 0,\n        max: 100\n      }\n    },\n    plugins: {\n      title: {\n        display: true,\n        text: getTitle,\n        position: 'bottom',\n        font: {\n          size: 14\n        }\n      },\n      annotation: {\n        annotations: {\n          annotation1,\n          annotation2\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\nconst actions = [\n  {\n    name: 'Change mode',\n    handler: function(chart) {\n      const options = chart.options.plugins.annotation.interaction;\n      modeIndex++;\n      if (modeIndex > MODE.length) {\n        modeIndex = 0;\n      }\n      options.mode = MODE[modeIndex];\n      chart.update();\n    }\n  },\n  {\n    name: 'Change axis',\n    handler: function(chart) {\n      const options = chart.options.plugins.annotation.interaction;\n      axisIndex++;\n      if (axisIndex > AXIS.length) {\n        axisIndex = 0;\n      }\n      options.axis = AXIS[axisIndex];\n      chart.update();\n    }\n  },\n  {\n    name: 'Toogle intersect',\n    handler: function(chart) {\n      const options = chart.options.plugins.annotation.interaction;\n      options.intersect = !options.intersect;\n      chart.update();\n    }\n  },\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n  output: 'console.log output is shown here, click one of the annotations'\n};\n"}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);