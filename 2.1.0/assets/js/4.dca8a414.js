(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{430:function(t,e,a){t.exports=a.p+"assets/img/elementBoxProps.645c7c00.png"},431:function(t,e,a){t.exports=a.p+"assets/img/elementEllipseProps.ef1b550b.png"},432:function(t,e,a){t.exports=a.p+"assets/img/elementLabelProps.97ea168e.png"},433:function(t,e,a){t.exports=a.p+"assets/img/elementLineProps.67f9d0c4.png"},434:function(t,e,a){t.exports=a.p+"assets/img/elementPointProps.de8e50cf.png"},435:function(t,e,a){t.exports=a.p+"assets/img/elementPolygonProps.67d2feff.png"},533:function(t,e,a){"use strict";a.r(e);var n=a(26),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_2-x-migration-guide"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-x-migration-guide"}},[t._v("#")]),t._v(" 2.x Migration guide")]),t._v(" "),n("p",[n("code",[t._v("chartjs-plugin-annotation")]),t._v(" plugin version 2 introduces a number of breaking changes. In order to improve performance, offer new features, and improve maintainability, it was necessary to break backwards compatibility, but we aimed to do so only when worth the benefit.")]),t._v(" "),n("h2",{attrs:{id:"chart-js-version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#chart-js-version"}},[t._v("#")]),t._v(" Chart.js version")]),t._v(" "),n("p",[t._v("The annotation plugin requires at least version 3.7.0 to work because of some bug fixes that happened within chart.js itself.")]),t._v(" "),n("h2",{attrs:{id:"options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),n("p",[t._v("A number of changes were made to the configuration options passed to the plugin configuration. Those changes are documented below.")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("xScaleID")]),t._v(" option default has been changed, now set to "),n("code",[t._v("undefined")]),t._v(". If the option is missing, the plugin will try to use the first scale of the chart, configured as "),n("code",[t._v("'x'")]),t._v(" axis. If more than one scale has been defined in the chart as "),n("code",[t._v("'x'")]),t._v(" axis, the option is mandatory to select the right scale.")]),t._v(" "),n("li",[n("code",[t._v("yScaleID")]),t._v(" option default has been changed, now set to "),n("code",[t._v("undefined")]),t._v(". If the option is missing, the plugin will try to use the first scale of the chart, configured as "),n("code",[t._v("'y'")]),t._v(" axis. If more than one scale has been defined in the chart as "),n("code",[t._v("'y'")]),t._v(" axis, the option is mandatory to select the right scale.")]),t._v(" "),n("li",[t._v("When "),n("a",{attrs:{href:"https://www.chartjs.org/docs/latest/axes/cartesian/#common-options-to-all-cartesian-axes",target:"_blank",rel:"noopener noreferrer"}},[t._v("stacked scales"),n("OutboundLink")],1),t._v(" are used, instead of the whole chart area, the designated scale area is used as fallback for "),n("code",[t._v("xMin")]),t._v(", "),n("code",[t._v("xMax")]),t._v(", "),n("code",[t._v("yMin")]),t._v(", "),n("code",[t._v("yMax")]),t._v(", "),n("code",[t._v("xValue")]),t._v(" or "),n("code",[t._v("yValue")]),t._v(" options.")]),t._v(" "),n("li",[n("code",[t._v("position")]),t._v(" for the label of the line annotation changes the behavior when "),n("code",[t._v("start")]),t._v(" or "),n("code",[t._v("end")]),t._v(" is set, and  when the line annotation location is defined by "),n("code",[t._v("xMin")]),t._v(", "),n("code",[t._v("xMax")]),t._v(", "),n("code",[t._v("yMin")]),t._v(", and "),n("code",[t._v("yMax")]),t._v(" options.\n"),n("ul",[n("li",[t._v("in the previous version 1.x, if the "),n("code",[t._v("position")]),t._v(" was set to "),n("code",[t._v("start")]),t._v(" or "),n("code",[t._v("end")]),t._v(", it was calculated using chart area dimension (when "),n("code",[t._v("start")]),t._v(" using "),n("code",[t._v("top")]),t._v(" or "),n("code",[t._v("left")]),t._v(", when "),n("code",[t._v("end")]),t._v(" using "),n("code",[t._v("bottom")]),t._v(" or "),n("code",[t._v("right")]),t._v(").")]),t._v(" "),n("li",[t._v("in version 2.x, if the "),n("code",[t._v("position")]),t._v(" is set to "),n("code",[t._v("start")]),t._v(", it is the point where the line starts being drawn, and when set to "),n("code",[t._v("end")]),t._v(", it is the point where the line ends drawing. The "),n("code",[t._v("xMin")]),t._v(", "),n("code",[t._v("xMax")]),t._v(", "),n("code",[t._v("yMin")]),t._v(", and "),n("code",[t._v("yMax")]),t._v(" options are not related to the chart area anymore but are related to the values sequence (and their order) on the associated scale.")])])]),t._v(" "),n("li",[n("code",[t._v("cornerRadius")]),t._v(" option was replaced by "),n("code",[t._v("borderRadius")]),t._v(" in the box annotation configuration and in the label configuration of line annotation to align with Chart.js options.")]),t._v(" "),n("li",[n("code",[t._v("xPadding")]),t._v(" and "),n("code",[t._v("yPadding")]),t._v(" options were merged into a single "),n("code",[t._v("padding")]),t._v(" object in the label configuration of line annotation to align with Chart.js options.")]),t._v(" "),n("li",[n("code",[t._v("enabled")]),t._v(" option was replaced by "),n("code",[t._v("display")]),t._v(" in the callout configuration of label annotation, in the label configuration of line and box annotations and in the arrow heads configuration of line annotation to have the same option on all elements.")]),t._v(" "),n("li",[n("code",[t._v("dblClickSpeed")]),t._v(" option was removed from the plugin options because "),n("code",[t._v("dblclick")]),t._v(" event hook is not available anymore.")]),t._v(" "),n("li",[n("code",[t._v("drawTime")]),t._v(" option at top level plugin configuration is moved to new "),n("code",[t._v("common")]),t._v(" object in the plugin annotation options, which contains options to apply to all annotations:")])]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("annotation")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("common")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("drawTime")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'afterDraw'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("annotations")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"elements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#elements"}},[t._v("#")]),t._v(" Elements")]),t._v(" "),n("p",[t._v("In "),n("code",[t._v("chartjs-plugin-annotation")]),t._v(" plugin version 2 the label of box and line annotations is a sub-element. This has changed how to access to the label options. Now the label options are at "),n("code",[t._v("element.label.options")]),t._v(". The following example shows how to show and hide the label when the mouse is hovering the box:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'box'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or 'line'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("enter")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("leave")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("display "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("code",[t._v("chartjs-plugin-annotation")]),t._v(" plugin version 2 removes the clipping of the label to the box annotation size.")]),t._v(" "),n("p",[n("code",[t._v("chartjs-plugin-annotation")]),t._v(" plugin version 2 hides the following methods in the "),n("code",[t._v("line")]),t._v(" annotation element because they should be used only internally:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("intersects")])]),t._v(" "),n("li",[n("code",[t._v("isOnLabel")])])]),t._v(" "),n("p",[n("code",[t._v("chartjs-plugin-annotation")]),t._v(" plugin version 2 normalizes the properties of the annotation elements in order to be based on common box model.")]),t._v(" "),n("h4",{attrs:{id:"box-annotation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#box-annotation"}},[t._v("#")]),t._v(" Box annotation")]),t._v(" "),n("p",[t._v("The following diagram is showing the element properties about a "),n("code",[t._v("'box'")]),t._v(" annotation:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(430),alt:"box"}})]),t._v(" "),n("p",[t._v("The label of a box annotation is described as a "),n("a",{attrs:{href:"#label-annotation"}},[t._v("label annotation")]),t._v(" and accessible by "),n("code",[t._v("element.label")]),t._v(".")]),t._v(" "),n("h4",{attrs:{id:"ellipse-annotation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ellipse-annotation"}},[t._v("#")]),t._v(" Ellipse annotation")]),t._v(" "),n("p",[t._v("The following diagram is showing the element properties about a "),n("code",[t._v("'ellipse'")]),t._v(" annotation:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(431),alt:"ellipse"}})]),t._v(" "),n("h4",{attrs:{id:"label-annotation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#label-annotation"}},[t._v("#")]),t._v(" Label annotation")]),t._v(" "),n("p",[t._v("The following diagram is showing the element properties about a "),n("code",[t._v("'label'")]),t._v(" annotation:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(432),alt:"label"}})]),t._v(" "),n("h4",{attrs:{id:"line-annotation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#line-annotation"}},[t._v("#")]),t._v(" Line annotation")]),t._v(" "),n("p",[t._v("The following diagram is showing the element properties about a "),n("code",[t._v("'line'")]),t._v(" annotation:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(433),alt:"line"}})]),t._v(" "),n("p",[t._v("The label of a line annotation is described as a "),n("a",{attrs:{href:"#label-annotation"}},[t._v("label annotation")]),t._v(" and accessible by "),n("code",[t._v("element.label")]),t._v(".")]),t._v(" "),n("h4",{attrs:{id:"point-annotation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#point-annotation"}},[t._v("#")]),t._v(" Point annotation")]),t._v(" "),n("p",[t._v("The following diagram is showing the element properties about a "),n("code",[t._v("'point'")]),t._v(" annotation:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(434),alt:"point"}})]),t._v(" "),n("h4",{attrs:{id:"polygon-annotation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#polygon-annotation"}},[t._v("#")]),t._v(" Polygon annotation")]),t._v(" "),n("p",[t._v("The following diagram is showing the element properties about a "),n("code",[t._v("'polygon'")]),t._v(" annotation:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(435),alt:"polygon"}})]),t._v(" "),n("h2",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),n("p",[n("code",[t._v("chartjs-plugin-annotation")]),t._v(" plugin version 2 introduces the "),n("a",{attrs:{href:"options#interaction"}},[n("code",[t._v("interaction")])]),t._v(" options, to configure which events trigger annotation interactions. By default, the plugin uses the "),n("a",{attrs:{href:"https://www.chartjs.org/docs/latest/configuration/interactions.html#interactions",target:"_blank",rel:"noopener noreferrer"}},[t._v("chart interaction configuration"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("ul",[n("li",[t._v("When "),n("a",{attrs:{href:"https://www.chartjs.org/docs/latest/charts/scatter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("scatter charts"),n("OutboundLink")],1),t._v(" are used, the interaction default "),n("code",[t._v("mode")]),t._v(" in Chart.js is "),n("code",[t._v("point")]),t._v(", while, in the previous plugin version, the default was "),n("code",[t._v("nearest")]),t._v(".")])]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("dblclick")]),t._v(" event hook was removed from annotations options because, being executed asynchronously, it can not enable the chart re-rendering, automatically after processing the event completely. This is important when the user requires re-draws. It gets slow and messy if every event hook does the draw (or update!).")]),t._v(" "),n("h2",{attrs:{id:"types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[t._v("#")]),t._v(" Types")]),t._v(" "),n("p",[n("code",[t._v("chartjs-plugin-annotation")]),t._v(" plugin version 2 removes the compatibility with TypeScript versions less than 4.1 which is the minimum supported one.")])])}),[],!1,null,null,null);e.default=o.exports}}]);