"use strict";(self.webpackChunkadofai_gg_guide=self.webpackChunkadofai_gg_guide||[]).push([[986],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,v=m["".concat(i,".").concat(d)]||m[d]||c[d]||p;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<p;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),l=["components"],o={},i="Props",s={unversionedId:"svelte/basic/props",id:"svelte/basic/props",title:"Props",description:"\ucef4\ud3ec\ub10c\ud2b8 \uc124\uba85\uc744 \uc77d\uc5b4\ubcf4\uc168\ub2e4\uba74 Item \ucef4\ud3ec\ub10c\ud2b8\uac00 number \uc774\ub77c\ub294 \uac12\uc744 \ubc1b\ub294 \uac83\uc744 \ubcf4\uc168\uc744 \uac81\ub2c8\ub2e4.",source:"@site/docs/svelte/basic/props.md",sourceDirName:"svelte/basic",slug:"/svelte/basic/props",permalink:"/adofai-gg-guide/docs/svelte/basic/props",draft:!1,editUrl:"https://github.com/adofai-gg/adofai-gg-guide/tree/master/docs/svelte/basic/props.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ub370\uc774\ud130 \ubc14\uc778\ub529",permalink:"/adofai-gg-guide/docs/svelte/basic/data-binding"}},u={},c=[{value:"Prop \uc120\uc5b8\ud558\uae30",id:"prop-\uc120\uc5b8\ud558\uae30",level:2},{value:"Prop \uc0ac\uc6a9\ud558\uae30",id:"prop-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Prop\uc5d0 \uae30\ubcf8\uac12 \uc124\uc815\ud558\uae30",id:"prop\uc5d0-\uae30\ubcf8\uac12-\uc124\uc815\ud558\uae30",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"props"},"Props"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"components"},"\ucef4\ud3ec\ub10c\ud2b8")," \uc124\uba85\uc744 \uc77d\uc5b4\ubcf4\uc168\ub2e4\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"Item")," \ucef4\ud3ec\ub10c\ud2b8\uac00 ",(0,p.kt)("inlineCode",{parentName:"p"},"number")," \uc774\ub77c\ub294 \uac12\uc744 \ubc1b\ub294 \uac83\uc744 \ubcf4\uc168\uc744 \uac81\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\uc774 \uae00\uc5d0\uc11c\ub294 \uc774\ub7f0 \ub370\uc774\ud130\ub97c \ubc1b\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"prop-\uc120\uc5b8\ud558\uae30"},"Prop \uc120\uc5b8\ud558\uae30"),(0,p.kt)("p",null,"\uc77c\ub2e8 \ub370\uc774\ud130\ub97c \ubc1b\ub294 \ubc29\ubc95\uc740 \uac04\ub2e8\ud569\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("a",{parentName:"p",href:"data-binding"},"\ub370\uc774\ud130 \ubc14\uc778\ub529")," \uc5d0\uc11c \ud588\ub358 \uac83\ucc98\ub7fc \ubcc0\uc218\ub97c \uc120\uc5b8\ud558\uace0 \uadf8 \ubcc0\uc218\ub97c export \ud574\uc8fc\uc138\uc694.",(0,p.kt)("br",{parentName:"p"}),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"Item")," \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc608\ub97c \ub4e4\uc5b4 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-svelte",metastring:'title="Item.svelte"',title:'"Item.svelte"'},'<script lang="ts">\nexport let number: number\n<\/script>\n<div>Item #{number}</div>\n')),(0,p.kt)("p",null,"\uc774 \ucf54\ub4dc\uc5d0\uc11c\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"number")," \uc774\ub77c\ub294 \uc774\ub984\uc758 prop\uc744 \ubc1b\uac8c \ub429\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\ud558\uc9c0\ub9cc \ub9cc\uc57d \ubc1b\uc544\uc57c\ud558\ub294 \ubcc0\uc218\uc758 \uc774\ub984\uc774 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uae30\ubcf8 \ubcc0\uc218 \ub4f1\uc758 \uc774\ub984\uacfc \uacb9\uce5c\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud560\uae4c\uc694?",(0,p.kt)("br",{parentName:"p"}),"\n","Svelte\uc5d0\uc11c\ub294 \ubcc0\uc218\uc758 \uc774\ub984\uacfc prop\uc758 \uc774\ub984\uc744 \ub2e4\ub974\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uba3c\uc800 \ubcc0\uc218\ub97c \uc120\uc5b8\ud55c \ud6c4 \ub098\uc911\uc5d0 export \ud574\uc8fc\ub294\uac70\uc8e0."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-svelte",metastring:'title="Item.svelte"',title:'"Item.svelte"'},'<script lang="ts">\nlet value: number\n\nexport { value as number }\n<\/script>\n<div>Item #{value}</div>\n')),(0,p.kt)("p",null,"\uc774 \ucf54\ub4dc\uc5d0\uc11c \ubcc0\uc218\uc758 \uc774\ub984\uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"value"),"\ub85c \uc124\uc815\ub418\uc5c8\uc9c0\ub9cc, \ubc1b\ub294 prop\uc758 \uc774\ub984\uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"number"),"\uc785\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"prop-\uc0ac\uc6a9\ud558\uae30"},"Prop \uc0ac\uc6a9\ud558\uae30"),(0,p.kt)("p",null,"\ub370\uc774\ud130\ub97c \ubc1b\uac8c \uc124\uc815\ud574\uc92c\uc73c\uba74 \uc774\uc81c \uc0ac\uc6a9\ud574 \ubd10\uc57c\uaca0\uc8e0? \uc774\ubc88\uc5d0\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 prop\uc744 \ub118\uae30\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c, svelte\uc5d0\uc11c\ub294 html \ud0dc\uadf8\uc758 attribute\ucc98\ub7fc \ub370\uc774\ud130\ub97c \ub118\uaca8\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-svelte"},'<Hello name="World" />\n')),(0,p.kt)("p",null,"\ud558\uc9c0\ub9cc \ubc1b\uc744 \ub370\uc774\ud130\uc758 \ud0c0\uc785\uc774 \ubb38\uc790\uc5f4\uc774 \uc544\ub2c8\ub77c\uba74 \uc774 \ubc29\ubc95\uc744 \uc4f8 \uc218 \uc5c6\uaca0\uc8e0.",(0,p.kt)("br",{parentName:"p"}),"\n","\uc774\ub7f4 \ub54c\ub294 \uc911\uad04\ud638(",(0,p.kt)("inlineCode",{parentName:"p"},"{}"),")\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-svelte"},"<Item number={100} />\n")),(0,p.kt)("p",null,"\uc911\uad04\ud638\uc5d0\ub294 prop\uc744 \ub118\uae30\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc120\uc5b8\ub41c \ubcc0\uc218\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-svelte"},'<script lang="ts">\nlet index = 100\n<\/script>\n\n<Item number={index} />\n')),(0,p.kt)("p",null,"\uc774\ub54c, prop\uc758 \uc774\ub984\uacfc \ubcc0\uc218\uc758 \uc774\ub984\uc774 \uac19\ub2e4\uba74 \uc774\ub7f0 \ud615\uc2dd\uc774 \ub429\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-svelte"},'<script lang="ts">\nlet number = 100\n<\/script>\n\n<Item number={number} />\n')),(0,p.kt)("p",null,"\ud558\uc9c0\ub9cc svelte\uc5d0\ub294 \uc774\uac83\uc744 \uc9e7\uac8c \uc904\uc77c \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-svelte"},'<script lang="ts">\nlet number = 100\n<\/script>\n\n<Item {number} />\n')),(0,p.kt)("p",null,"\uc774 \ucf54\ub4dc\uc5d0\uc11c\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"Item")," \ucef4\ud3ec\ub10c\ud2b8\uc758 ",(0,p.kt)("inlineCode",{parentName:"p"},"number")," prop\uc73c\ub85c ",(0,p.kt)("inlineCode",{parentName:"p"},"number")," \ubcc0\uc218\uc758 \uac12\uc744 \ub118\uaca8\uc90d\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"prop\uc5d0-\uae30\ubcf8\uac12-\uc124\uc815\ud558\uae30"},"Prop\uc5d0 \uae30\ubcf8\uac12 \uc124\uc815\ud558\uae30"),(0,p.kt)("p",null,"\uc55e\uc5d0\uc11c \uc124\uba85\ud55c \ubc29\ubc95\ub4e4\uc740 \ubaa8\ub450 \ud574\ub2f9 prop\uc774 ",(0,p.kt)("strong",{parentName:"p"},"\ud544\uc218"),"\uc77c \ub54c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\ub9cc\uc57d \uadf8 \ucef4\ud3ec\ub10c\ud2b8\uc758 prop\uc774 \ud544\uc218\uac00 \uc544\ub2c8\ub77c\uba74 \uae30\ubcf8\uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,p.kt)("br",{parentName:"p"}),"\n","\ubc29\ubc95\uc740 \ub9e4\uc6b0 \uac04\ub2e8\ud569\ub2c8\ub2e4. \ubcc0\uc218\uc5d0 \uac12\uc744 \ud560\ub2f9\ud574\uc8fc\uba74 \ub418\uac70\ub4e0\uc694."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-svelte",metastring:'title="Hello.svelte"',title:'"Hello.svelte"'},"<script lang=\"ts\">\nexport let name: string = 'Svelte'\n<\/script>\n\n<div>Hello, {value}!</div>\n")))}d.isMDXComponent=!0}}]);