(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{337:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[s._v("#")]),s._v(" API")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 半原生查询")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SearchResponse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LambdaEsQueryWrapper")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标准原生查询 可指定 RequestOptions")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SearchResponse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SearchRequest")]),s._v(" searchRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RequestOptions")]),s._v(" requestOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IOException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("温馨提示")]),s._v(" "),a("p",[s._v("在一些高阶语法中,比如指定高亮字段,如果我们返回类型是实体对象本身,但实体中通常又没有高亮字段,导致高亮字段无法接收,此时可以用RestClietn原生的返回对象SearchResponse.\n尽管EE覆盖了我们使用ES的绝大多场景,但仍可能存在没有覆盖到的场景,此时您仍可以通过RestClient提供的原生语法进行查询,调用标准原生查询方法即可,入参和返回均为RestClient原生\n如果您需要在代码中用到RestHighLevelClient,您可以直接使用@Autowired注解注入使用,EE已经帮您自动配置了该bean,所以使用EE永远是>=RestHighLevelClient的.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);