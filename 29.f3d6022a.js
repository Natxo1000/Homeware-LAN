(window.webpackJsonp=window.webpackJsonp||[]).push([[29,30],{123:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let o=!1;l.rangeCount>0&&(o=l.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch(s){}return a.remove(),o&&(l.removeAllRanges(),l.addRange(o)),n&&n.focus(),r};e.exports=n,e.exports.default=n},124:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,l,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},134:function(e,t,a){"use strict";var n=a(3),l=a(0),o=a.n(l),r=a(100),s=a(98),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:c};function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},h=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},b=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=p({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=p({},a,{backgroundColor:null}),l};function y(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var g=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?b(e.theme,e.language):void 0;return t.themeDict=a})),u(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,o=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(o.style=r.plain),void 0!==l&&(o.style=void 0!==o.style?p({},o.style,l):l),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),u(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return o[a[0]];var r=n?{display:"inline-block"}:{},s=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[r].concat(s))}})),u(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,o=e.token,r=p({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==l&&(r.style=void 0!==r.style?p({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,o=this.getThemeDict(this.props),r=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],o=0,r=0,s=[],c=[s];r>-1;){for(;(o=n[r]++)<l[r];){var i=void 0,u=t[r],p=a[r][o];if("string"==typeof p?(u=r>0?u:["plain"],i=p):(u=h(u,p.type),p.alias&&(u=h(u,p.alias)),i=p.content),"string"==typeof i){var b=i.split(m),y=b.length;s.push({types:u,content:b[0]});for(var g=1;g<y;g++)d(s),c.push(s=[]),s.push({types:u,content:b[g]})}else r++,t.push(u),a.push(i),n.push(0),l.push(i.length)}r--,t.pop(),a.pop(),n.pop(),l.pop()}return d(s),c}(void 0!==r?t.tokenize(n,r,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),f=a(123),v=a.n(f),k=a(124),j=a.n(k),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=a(135),N=a(99);var C=()=>{const{prism:e}=Object(N.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),a=e.theme||E,n=e.darkTheme||a;return t?n:a},x=a(54),S=a.n(x);const _=/{([\d,-]+)}/,w=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},T=/(?:title=")(.*)(?:")/;var P=({children:e,className:t,metastring:a})=>{const{prism:r}=Object(N.useThemeConfig)(),[c,u]=Object(l.useState)(!1),[p,m]=Object(l.useState)(!1);Object(l.useEffect)((()=>{m(!0)}),[]);const d=Object(l.useRef)(null);let h=[],b="";const y=C();if(Array.isArray(e)&&(e=e.join("")),a&&_.test(a)){const e=a.match(_)[1];h=j()(e).filter((e=>e>0))}a&&T.test(a)&&(b=a.match(T)[1]);let f=t&&t.replace(/language-/,"");!f&&r.defaultLanguage&&(f=r.defaultLanguage);let k=e.replace(/\n$/,"");if(0===h.length&&void 0!==f){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(f),n=e.replace(/\n$/,"").split("\n");let l;for(let e=0;e<n.length;){const o=e+1,r=n[e].match(a);if(null!==r){switch(r.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=`${o},`;break;case"highlight-start":l=o;break;case"highlight-end":t+=`${l}-${o-1},`}n.splice(e,1)}else e+=1}h=j()(t),k=n.join("\n")}const E=()=>{v()(k),u(!0),setTimeout((()=>u(!1)),2e3)};return o.a.createElement(g,Object(n.a)({},i,{key:String(p),theme:y,code:k,language:f}),(({className:e,style:t,tokens:a,getLineProps:l,getTokenProps:r})=>o.a.createElement(o.a.Fragment,null,b&&o.a.createElement("div",{style:t,className:S.a.codeBlockTitle},b),o.a.createElement("div",{className:S.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,S.a.codeBlock,"thin-scrollbar",{[S.a.codeBlockWithTitle]:b})},o.a.createElement("div",{className:S.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=l({line:e,key:t});return h.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(n.a)({key:t},a),e.map(((e,t)=>o.a.createElement("span",Object(n.a)({key:t},r({token:e,key:t}))))))})))),o.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(S.a.copyButton),onClick:E},c?"Copied":"Copy")))))},I=(a(55),a(56)),L=a.n(I);var B=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(N.useThemeConfig)();return t?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[L.a.enhancedAnchor]:!n}),id:t}),a.children,o.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):o.a.createElement(e,a)},D=a(57),M=a.n(D);const $={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?o.a.createElement(P,e):o.a.createElement("code",e):t},a:e=>o.a.createElement(r.a,e),pre:e=>o.a.createElement("div",Object(n.a)({className:M.a.mdxCodeBlock},e)),h1:B("h1"),h2:B("h2"),h3:B("h3"),h4:B("h4"),h5:B("h5"),h6:B("h6")};t.a=$},202:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(115);t.default=function(){return l.a.createElement(o.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},95:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(104),r=a(24),s=a(27),c=a(115),i=a(3),u=a(98),p=a(99),m=a(206),d=a(211),h=a(212),b=a(210),y=a(100),g=a(154),f=a(295),v=a(73),k=a.n(v);const j=(e,t)=>"link"===e.type?Object(p.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>j(e,t)));function E({item:e,onItemClick:t,collapsible:a,activePath:o,...r}){const{items:s,label:c}=e,p=j(e,o),m=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(p),[d,h]=Object(n.useState)((()=>!!a&&(!p&&e.collapsed))),b=Object(n.useRef)(null),[y,g]=Object(n.useState)(void 0),f=(e=!0)=>{var t;g(e?`${null===(t=b.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{p&&!m&&d&&h(!1)}),[p,m,d]);const v=Object(n.useCallback)((e=>{e.preventDefault(),y||f(),setTimeout((()=>h((e=>!e))),100)}),[y]);return 0===s.length?null:l.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:c},l.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&p,[k.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},r),c),l.a.createElement("ul",{className:"menu__list",ref:b,style:{height:y},onTransitionEnd:()=>{d||f(!1)}},s.map((e=>l.a.createElement(N,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:o})))))}function O({item:e,onItemClick:t,activePath:a,collapsible:n,...o}){const{href:r,label:s}=e,c=j(e,a);return l.a.createElement("li",{className:"menu__list-item",key:s},l.a.createElement(y.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":c}),to:r},Object(g.a)(r)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},o),s))}function N(e){switch(e.item.type){case"category":return l.a.createElement(E,e);case"link":default:return l.a.createElement(O,e)}}var C=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:o,isHidden:r}){const[s,c]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:y}=Object(p.useThemeConfig)(),{isAnnouncementBarClosed:g}=Object(m.a)(),{scrollY:v}=Object(b.a)();Object(d.a)(s);const j=Object(h.a)();return Object(n.useEffect)((()=>{j===h.b.desktop&&c(!1)}),[j]),l.a.createElement("div",{className:Object(u.a)(k.a.sidebar,{[k.a.sidebarWithHideableNavbar]:i,[k.a.sidebarHidden]:r})},i&&l.a.createElement(f.a,{tabIndex:-1,className:k.a.sidebarLogo}),l.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",k.a.menu,{"menu--show":s,[k.a.menuWithAnnouncementBar]:!g&&0===v})},l.a.createElement("button",{"aria-label":s?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{c(!s)}},s?l.a.createElement("span",{className:Object(u.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},t.map((t=>l.a.createElement(N,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),c(!1)},collapsible:a,activePath:e}))))),y&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",k.a.collapseSidebarButton),onClick:o}))},x=a(134),S=a(202),_=a(142),w=a(74),T=a.n(w);function P({currentDocRoute:e,versionMetadata:t,children:a}){var s,i;const{siteConfig:m,isClient:d}=Object(r.default)(),{pluginId:h,permalinkToSidebar:b,docsSidebars:y,version:g}=t,f=b[e.path],v=y[f],[k,j]=Object(n.useState)(!1),[E,O]=Object(n.useState)(!1),N=Object(n.useCallback)((()=>{E&&O(!1),j(!k)}),[E]);return l.a.createElement(c.a,{key:d,searchMetadatas:{version:g,tag:Object(p.docVersionSearchTag)(h,g)}},l.a.createElement("div",{className:T.a.docPage},v&&l.a.createElement("div",{className:Object(u.a)(T.a.docSidebarContainer,{[T.a.docSidebarContainerHidden]:k}),onTransitionEnd:e=>{e.currentTarget.classList.contains(T.a.docSidebarContainer)&&k&&O(!0)},role:"complementary"},l.a.createElement(C,{key:f,sidebar:v,path:e.path,sidebarCollapsible:null===(s=null===(i=m.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===s||s,onCollapse:N,isHidden:E}),E&&l.a.createElement("div",{className:T.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:N,onClick:N})),l.a.createElement("main",{className:T.a.docMainContainer},l.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",T.a.docItemWrapper,{[T.a.docItemWrapperEnhanced]:k})},l.a.createElement(o.a,{components:x.a},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,o=t.find((e=>Object(_.matchPath)(n.pathname,e)));return o?l.a.createElement(P,{currentDocRoute:o,versionMetadata:a},Object(s.a)(t)):l.a.createElement(S.default,e)}}}]);