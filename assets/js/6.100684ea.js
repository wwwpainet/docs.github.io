(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"项目简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目简介")]),t._v(" "),e("p",[t._v("项目基于 vue3，集成 vue3 最新生态系统的核心库实现， 主要集成 "),e("code",[t._v("vite构建")]),t._v("、 "),e("code",[t._v("TypeScript")]),t._v("、"),e("code",[t._v("pinia")]),t._v("、"),e("code",[t._v("ESLint")]),t._v("、"),e("code",[t._v("Prettier")]),t._v("、"),e("code",[t._v("Stylelint")]),t._v("、"),e("code",[t._v("husky")]),t._v("、"),e("code",[t._v("lint-staged")]),t._v(" 、"),e("code",[t._v("commitlint")]),t._v("等技术栈")]),t._v(" "),e("h2",{attrs:{id:"所用技术栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#所用技术栈","aria-hidden":"true"}},[t._v("#")]),t._v(" 所用技术栈")]),t._v(" "),e("ul",[e("li",[t._v("框架： "),e("a",{attrs:{href:"https://uniapp.dcloud.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("uni-app"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("构建工具： "),e("a",{attrs:{href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vite"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("前端框架： "),e("a",{attrs:{href:"https://v3.cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue3.x"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("编程语言： "),e("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("代码规范：\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stylelint"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("提交规范：\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.npmjs.com/package/lint-staged",target:"_blank",rel:"noopener noreferrer"}},[t._v("lint-staged"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://commitlint.js.org/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("css 预处理器： "),e("a",{attrs:{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("scss"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("状态管理工具："),e("a",{attrs:{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pinia"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("pinia 数据持久化插件："),e("a",{attrs:{href:"https://allen-1998.github.io/pinia-plugin-persist-uni/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pinia-plugin-persist-uni"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"工程目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工程目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 工程目录")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".\n├── .husky\n│   ├── _\n│   ├── commit-msg commit信息校验钩子\n│   ├── pre-commit commit前置钩子\n├── .vscode\n│   ├── extensions.json vscode工作区插件推荐\n│   ├── settings.json vscode工作区设置\n├── types\n│   ├── global.d.ts\n├── auto\n│   ├── addPage.ts 根据pages.json自动生成页面\n├── build vite配置\n│   ├── vite 插件、打包独立目录\n│       ├── plugins 插件\n│           ├── index.ts 插件入口\n│           ├── autoComponents.ts 按需导入UI库、自定义组件\n│           ├── autoImport.ts 自动引入vue3、uni-app、pinia API\n│           ├── compress.ts 代码压缩（支持gzip、brotli）\n│           ├── monitor.ts 获取Vite的启动，HMR时间等，拦截 --debug 下的所有日志\n│           ├── restart.ts 监听配置文件修改自动重启Vite\n│   ├── build.ts 打包模块配置utils\n│   ├── utils.ts 读取所有环境变量配置文件\n├── src\n│   ├── types ts类型定义\n│      ├── api.d.ts\n│      ├── index.d.ts\n│      ├── store.d.ts\n│   ├── api 请求中心\n│   ├── components 项目组件\n│   └── helps pinia-auto-refs store自动导入以及解构\n│      ├── pinia-auto-refs.ts\n│   ├── router 路由拦截-待定\n│   ├── hooks hooks函数\n│   ├── http uni.request网络请求二次封装\n│      ├── index.ts\n│      ├── requestClass.ts\n│   ├── pages 页面目录\n│   ├── static 静态资源、css\n│   ├── store 状态管理\n│   └── utils 工具包\n│      ├── index.ts 入口文件\n│      ├── platform.ts 获取运行环境\n│      ├── shared.ts 基础公共方法\n│      ├── common.ts 公共函数库\n│      └── storage.ts Storage和Map封装的缓存进行整合\n│      └── params.ts 公共参数定义\n│   ├── App.vue 入口文件\n│   ├── auto-imports.d.ts 自动导入vue-composition-api(自动生成)\n│   ├── components.d.ts 自动导入组件(自动生成)\n│   ├── env.d.ts 全局声明\n│   ├── main.ts 主入口\n│   ├── manifest.json 应用配置文件\n│   ├── pages.json 全局配置文件\n│   └── uni.scss uni-app内置的常用样式变量\n├── .eslintignore eslint忽略配置\n├── .eslintrc.js eslint配置\n├── .gitignore git忽略配置\n├── .lintstagedrc.json lint-staged配置\n├── .prettierignore prettier忽略配置\n├── .stylelintrc.js stylelint配置\n├── commitlint.config.js commitlint配置\n├── index.html 项目入口\n├── package.json\n├── prettier.config.js prettier配置\n├── README.md\n├── tsconfig.json ts配置\n├── unocss.config.ts unocss配置\n└── vite.config.ts vite配置\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br"),e("span",{staticClass:"line-number"},[t._v("46")]),e("br"),e("span",{staticClass:"line-number"},[t._v("47")]),e("br"),e("span",{staticClass:"line-number"},[t._v("48")]),e("br"),e("span",{staticClass:"line-number"},[t._v("49")]),e("br"),e("span",{staticClass:"line-number"},[t._v("50")]),e("br"),e("span",{staticClass:"line-number"},[t._v("51")]),e("br"),e("span",{staticClass:"line-number"},[t._v("52")]),e("br"),e("span",{staticClass:"line-number"},[t._v("53")]),e("br"),e("span",{staticClass:"line-number"},[t._v("54")]),e("br"),e("span",{staticClass:"line-number"},[t._v("55")]),e("br"),e("span",{staticClass:"line-number"},[t._v("56")]),e("br"),e("span",{staticClass:"line-number"},[t._v("57")]),e("br"),e("span",{staticClass:"line-number"},[t._v("58")]),e("br"),e("span",{staticClass:"line-number"},[t._v("59")]),e("br"),e("span",{staticClass:"line-number"},[t._v("60")]),e("br"),e("span",{staticClass:"line-number"},[t._v("61")]),e("br"),e("span",{staticClass:"line-number"},[t._v("62")]),e("br"),e("span",{staticClass:"line-number"},[t._v("63")]),e("br"),e("span",{staticClass:"line-number"},[t._v("64")]),e("br"),e("span",{staticClass:"line-number"},[t._v("65")]),e("br"),e("span",{staticClass:"line-number"},[t._v("66")]),e("br"),e("span",{staticClass:"line-number"},[t._v("67")]),e("br"),e("span",{staticClass:"line-number"},[t._v("68")]),e("br"),e("span",{staticClass:"line-number"},[t._v("69")]),e("br")])]),e("h2",{attrs:{id:"一、前端构建工具选择-vite-代替-webpack-提升前端开发体验"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、前端构建工具选择-vite-代替-webpack-提升前端开发体验","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、前端构建工具选择 vite 代替 webpack 提升前端开发体验")]),t._v(" "),e("blockquote",[e("p",[t._v("痛点：Vue CLI 基于 Webpack 构建工具生成，随着模块的不断增多，构建速度会越来越慢，开发体验上比较差")])]),t._v(" "),e("h4",{attrs:{id:"测试：-vue3-项目不同构建工具对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试：-vue3-项目不同构建工具对比","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试： vue3 项目不同构建工具对比")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th"),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Dev 启动时长")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Dev 启动加载")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Build 时长")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Vue cli")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("2568ms")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("320ms")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("5.14s")])]),t._v(" "),e("tr",[e("td",[t._v("Vite")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("232ms")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("379ms")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("2.38s")])])])]),t._v(" "),e("p",[t._v("测试两者的 dev 命令运行耗时相差十倍，且理论上，项目越大性能差距越大，最大的原因是 Vite 在开发模式下并没有做太多打包操作！")]),t._v(" "),e("h4",{attrs:{id:"优势："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优势：","aria-hidden":"true"}},[t._v("#")]),t._v(" 优势：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("1）"),e("strong",[t._v("Vite 更加轻量，并且构建速度足够快；")])]),t._v(" "),e("blockquote",[e("p",[t._v("Webpack 是使用 nodejs 去实现，而 Vite 使用 Esbuild 预构建依赖。Esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快不是一个数量级；")])])]),t._v(" "),e("li",[e("p",[t._v("2）"),e("strong",[t._v("与 Vue 解耦，多框架支持, 对 TypeScript、JSX、CSS 等支持开箱即用；")])])]),t._v(" "),e("li",[e("p",[t._v("3）"),e("strong",[t._v("兼容 Rollup 插件机制与 API，方便拓展；")])])]),t._v(" "),e("li",[e("p",[t._v("4）"),e("strong",[t._v("Vue 官方推荐，对 vue 项目兼容性不错；")])])])]),t._v(" "),e("h2",{attrs:{id:"二、项目构建优化配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、项目构建优化配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、项目构建优化配置")]),t._v(" "),e("ul",[e("li",[t._v("自动按需导入组件库以及自定义公共组件")]),t._v(" "),e("li",[t._v("自动导入 vue 函数 如 ref, computed，watch 等，主要是为使用 vue3 Composition API 编码的时候不需要手动导入")]),t._v(" "),e("li",[t._v("别名路径配置")]),t._v(" "),e("li",[t._v("pinia 数据持久化存储， 通过在 stroe 中配置 persist, 将会通过浏览器缓存来持久化存储数据.")]),t._v(" "),e("li",[t._v("打包后移除 console 和注释")]),t._v(" "),e("li",[t._v("打包压缩图片")]),t._v(" "),e("li",[t._v("静态资源压缩，开启 gzip 压缩，生成压缩包.gz 文件")]),t._v(" "),e("li",[t._v("分析构建模块包，通过配置 manualChunks  拆分代码，独立打包并按需加载")]),t._v(" "),e("li",[t._v("打包分析,可视化分析构建包，查看模块占用空间大小以及模块的依赖关系")]),t._v(" "),e("li",[t._v("监听配置文件修改自动重启 Vite")])]),t._v(" "),e("h2",{attrs:{id:"三、集成-typescript-类型注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、集成-typescript-类型注解","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、集成 Typescript 类型注解")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("提升代码的可读性和可维护性：")])]),t._v(" "),e("blockquote",[e("p",[t._v("举个 🌰 看后端某个接口返回值，一般需要去 network 看 or 去看接口文档，才知道返回数据结构，而正确用了 ts 后，编辑器会提醒接口返回值的类型，相当实用。")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("在编译阶段就发现大部分错误，避免了很多线上 bug")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等")])])])]),t._v(" "),e("h2",{attrs:{id:"四、集成-pinia-状态管理器替代-vuex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、集成-pinia-状态管理器替代-vuex","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、集成 Pinia 状态管理器替代 vuex")]),t._v(" "),e("p",[t._v("Pinia.js 是 Vue 官方团队推荐代替 Vuex 的一款轻量级状态管理库。，因此也被认为是下一代的 Vuex，即 Vuex5.x，在 Vue3.0 的项目中使用也是备受推崇")]),t._v(" "),e("h4",{attrs:{id:"优势：-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优势：-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 优势：")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("完整的 TypeScript 支持：与在 Vuex 中添加 TypeScript 相比，添加 TypeScript 更容易；")])]),t._v(" "),e("blockquote",[e("p",[t._v("不需要再创建自定义的复杂包装器来支持 TypeScript 所有内容都类型化，并且 API 的设计方式也尽可能的使用 TS 类型推断")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("足够轻量，压缩后的体积只有 1.6kb;")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("去除 mutations，只有 state，getters，actions（支持同步和异步）；")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("使用相比 Vuex 更加方便，每个模块独立，更好的代码分割，没有模块嵌套，store 之间可以自由使用")])]),t._v(" "),e("blockquote",[e("p",[t._v("Pinia 通过设计提供扁平结构，就是说每个 store 都是互相独立的，谁也不属于谁，也就是扁平化了，更好的代码分割且没有命名空间。也可以通过在一个模块中导入另一个模块来隐式嵌套 store，甚至可以拥有 store 的循环依赖关系")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("不需要注入、导入函数、调用它们，享受自动补全，让开发更加方便")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("支持使用插件扩展 Pinia 功能")])])])]),t._v(" "),e("h2",{attrs:{id:"五、对-storage-和-map-封装的缓存进行整合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、对-storage-和-map-封装的缓存进行整合","aria-hidden":"true"}},[t._v("#")]),t._v(" 五、对 Storage 和 Map 封装的缓存进行整合")]),t._v(" "),e("blockquote",[e("p",[t._v("提高页面反应速度的一个方式就是使用缓存。缓存策略可以缩短页面请求资源的距离，减少延迟，并且由于缓存文件可以重复利用，还可以减少带宽，降低网络负荷, 因此对 Storage 和 Map 封装的缓存进行整合")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Storage 和 Map 共用一套 api, 在命名上解决以下划线_开头命名的缓存到 Storage，并且 Map 也有副本")])]),t._v(" "),e("li",[e("p",[t._v("不是以下划线_开头的表示会缓存到 Map 中，在程序生命周期内有并且在有效时间内有效")])]),t._v(" "),e("li",[e("p",[t._v("可灵活设置缓存过期时间")])]),t._v(" "),e("li",[e("p",[t._v("尽量不操作 Storage(读取速度慢)")])])]),t._v(" "),e("h2",{attrs:{id:"六、-request-全局网络请求封装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、-request-全局网络请求封装","aria-hidden":"true"}},[t._v("#")]),t._v(" 六、 Request 全局网络请求封装")]),t._v(" "),e("blockquote",[e("p",[t._v("为了减少调用时的重复性代码以及进行一些全局配置, 方便我们统一处理后端返回的错误码，处理一些共同的逻辑以及更好的支持 Typescript，将 Request 网络请求基于 Promise 进行二次封装。")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("将其封装为一个类，而不是一个函数的原因是因为类可以创建多个实例，适用范围更广，封装性更强一些。")])]),t._v(" "),e("li",[e("p",[t._v("包含 config 常用请求配置项、封装请求拦截器、响应拦截器，请求方式配置，在发送网络请求前后，对请求头或响应结果等进行一些特殊处理的方法。")])]),t._v(" "),e("li",[e("p",[t._v("API 接口统一管理，单独划分出 API 层来管理项目的所有 API，以功能模块来划分每个 API 归属的文件。")])]),t._v(" "),e("li",[e("p",[t._v("可以根据不同情况进行拓展")])])]),t._v(" "),e("h2",{attrs:{id:"七、集成-eslint、prettier、stylelint-配置代码格式化检查和自动格式化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、集成-eslint、prettier、stylelint-配置代码格式化检查和自动格式化","aria-hidden":"true"}},[t._v("#")]),t._v(" 七、集成 Eslint、Prettier、Stylelint, 配置代码格式化检查和自动格式化")]),t._v(" "),e("h4",{attrs:{id:"功能："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能：","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能：")]),t._v(" "),e("ul",[e("li",[t._v("在开发过程中保持代码风格统一以及代码质量检查。")]),t._v(" "),e("li",[t._v("保存文件时自动校验、修复代码风格和质量")]),t._v(" "),e("li",[t._v("格式化多种类型文件")]),t._v(" "),e("li",[t._v("CodeReview 时只需关注代码逻辑")])]),t._v(" "),e("h4",{attrs:{id:"特性："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特性：","aria-hidden":"true"}},[t._v("#")]),t._v(" 特性：")]),t._v(" "),e("p",[t._v("eslint 侧重代码质量检查， 是做 js 的代码格式化的，但是扩展性很强，包括变量是否使用，是否要 console.log。 prettier 侧重代码格式化检查，支持多语言，并且只专注于格式化，范围更广。")]),t._v(" "),e("p",[t._v("vscode 的插件可以单独配置，单独起作用。但是如果项目根目录中有.eslintrc.js 和.prettierrc.js 文件，则以.eslintrc.js 和.prettierrc.js 的配置为标准，执行它们的配置。")]),t._v(" "),e("p",[t._v("prettier 的效果在 eslint 的效果之后，如果配置冲突了，则 prettier 会覆盖 eslint 的配置。")]),t._v(" "),e("p",[t._v("Stylelint 配置样式文件代码质量检查")]),t._v(" "),e("h2",{attrs:{id:"八、配置-husky-和-lint-staged-助力团队编码规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、配置-husky-和-lint-staged-助力团队编码规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 八、配置 Husky 和 Lint-staged 助力团队编码规范")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("husky + lint-staged 的渐进式方案,只检测 git 暂存区中的文件")])]),t._v(" "),e("li",[e("p",[t._v("lint-staged 是一个只检测 git 暂存区的 lint 工具，")])]),t._v(" "),e("li",[e("p",[t._v("husky 是一个用来给我们的项目添加 git hook 的工具，git hook 是进行 git 操作会触发的脚本，")])])]),t._v(" "),e("blockquote",[e("p",[t._v("例如：提交的时候会触发 pre-commit 钩子,输入提交信息会触发 commit-msg 钩子。 用 husky 安装 pre-commit 钩子，就可以在进行 git commit 操作的时候，运行脚本来检测待提交的代码是否规范，便可以只对暂存区的文件进行检查。")])]),t._v(" "),e("h2",{attrs:{id:"九、scss预处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九、scss预处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 九、scss预处理")]),t._v(" "),e("ul",[e("li",[t._v("项目集成 sass")]),t._v(" "),e("li",[t._v("混入@mixin 常用方法封装，类似 js 函数，可以传参；")]),t._v(" "),e("li",[t._v("配合继承@extend、嵌套等减少 css 代码量，避免重复并保持代码干净。")])]),t._v(" "),e("h2",{attrs:{id:"十、工具库封装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十、工具库封装","aria-hidden":"true"}},[t._v("#")]),t._v(" 十、工具库封装")]),t._v(" "),e("h4",{attrs:{id:"常用函数方法封装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用函数方法封装","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用函数方法封装")]),t._v(" "),e("h4",{attrs:{id:"自定义hooks函数封装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义hooks函数封装","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义Hooks函数封装")]),t._v(" "),e("ul",[e("li",[t._v("Vue3 的 Hooks函数 可以帮助我们提高代码的复用性, 让我们能在不同的组件中都利用 Hooks 函数")]),t._v(" "),e("li",[t._v("Hooks 提供了一种更明确的方式来组织代码，使得代码能重用，更重要的是，两个钩子之间可以传值,")]),t._v(" "),e("li",[t._v("相比mixins，Hooks更清楚复用功能代码的来源, 更清晰易懂。")])]),t._v(" "),e("h2",{attrs:{id:"十一、git代码提交规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十一、git代码提交规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 十一、Git代码提交规范")]),t._v(" "),e("blockquote",[e("p",[t._v("多人协作的项目中，在提交代码这个环节，也存在一种情况：不能保证每个人对提交信息的准确描述，因此会出现提交信息紊乱、风格不一致的情况。如果 git commit 的描述信息精准，在后期维护和 Bug 处理时会变得有据可查，项目开发周期内还可以根据规范的提交信息快速生成开发日志，从而方便我们追踪项目和把控进度。")])]),t._v(" "),e("h4",{attrs:{id:"规范-commit-message-的好处"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规范-commit-message-的好处","aria-hidden":"true"}},[t._v("#")]),t._v(" 规范 commit message 的好处:")]),t._v(" "),e("ul",[e("li",[t._v("首行就是简洁实用的关键信息，方便在 git history 中快速浏览。")]),t._v(" "),e("li",[t._v("具有更加详细的 body 和 footer，可以清晰的看出某次提交的目的和影响。")]),t._v(" "),e("li",[t._v("可以通过 type 过滤出想要查找的信息，也可以通过关键字快速查找相关提交。")]),t._v(" "),e("li",[t._v("可以直接从 commit 生成 change log。")])]),t._v(" "),e("h2",{attrs:{id:"十二、vite上集成-module-federation（模块联邦）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十二、vite上集成-module-federation（模块联邦）","aria-hidden":"true"}},[t._v("#")]),t._v(" 十二、Vite上集成 module-federation（模块联邦）")]),t._v(" "),e("blockquote",[e("p",[t._v("通过vite和rollup提供的hock，对构建文件进行干预，从而将所有远程模块的组件，汇总到remoteEntry.js中。本地模块通过remoteEntry.js入口，从而调用加载三方组件以及组件编译后的js、css等文件。")])]),t._v(" "),e("ul",[e("li",[t._v("可以让我们在本地模块使用远程模块的纯js组件，用以抽取一些公共组件、团队开发一些相对独立的功能，完成独立部署并提供给其他本地模块使用。")]),t._v(" "),e("li",[t._v("加载时只加载目标组件及其相关的内容")]),t._v(" "),e("li",[t._v("使用时与本项目组件使用方式一致，因为它就是一个组件，只是远程加载而已")]),t._v(" "),e("li",[t._v("允许一个线上部署的项目在运行时加载其他线上部署项目中的组件。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://wwwpainet.github.io/img/i1.png",alt:""}})])])}),[],!1,null,null,null);s.default=n.exports}}]);