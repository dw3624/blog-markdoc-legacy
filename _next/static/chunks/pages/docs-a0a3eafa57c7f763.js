(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3172],{7887:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return z},default:function(){return Z}});var r=t(7294),i=t(1664),o=t.n(i),a=t(2355),c=t(9521),s={colors:{primary:"#F2F2F2",secondary:"#514F51",main:"#FFFFFF",accent:"#F45151"},fontSize:{title:36,h1:24,h2:20,body:16,sub:13}},d=t(5893),l=function(n){var e=n.id,t=n.date,r=n.title,i=n.desc,c=n.tags;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(u,{children:[(0,d.jsx)(o(),{href:"/docs/".concat(e),children:(0,d.jsx)("a",{style:{textDecoration:"none"},children:(0,d.jsx)(f,{children:r})})}),i?(0,d.jsx)(p,{children:i}):null,c?(0,d.jsx)(a.Z,{tags:c}):null,t?(0,d.jsx)(m,{children:t}):null]})})},u=c.ZP.div.withConfig({displayName:"article__Row",componentId:"sc-1r0mtix-0"})(["display:flex;flex-direction:column;gap:1.5rem;"]),f=c.ZP.span.withConfig({displayName:"article__Title",componentId:"sc-1r0mtix-1"})(["color:black;font-size:var(--font-size-5);font-weight:600;cursor:pointer;&:hover{text-decoration:underline;}"]),p=c.ZP.div.withConfig({displayName:"article__Desc",componentId:"sc-1r0mtix-2"})([""]);c.ZP.a.withConfig({displayName:"article__ReadMore",componentId:"sc-1r0mtix-3"})(["text-decoration:none;color:",";font-size:","px;font-weight:800;cursor:pointer;&:hover{text-decoration:underline;}"],s.colors.accent,s.fontSize.sub);var m=c.ZP.div.withConfig({displayName:"article__Date",componentId:"sc-1r0mtix-4"})(["padding-left:0.2rem;color:gray;font-size:var(--font-size-2);font-weight:600;"]),g=function(n){var e=n.sortedItems;return(0,d.jsx)(h,{children:e.map(function(n,e){var t=n.id,r=n.date,i=n.title,o=n.desc,a=n.tags;return(0,d.jsxs)("div",{children:[(0,d.jsx)(x,{children:(0,d.jsx)(l,{id:t,date:r,title:i,desc:o,tags:a})}),(0,d.jsx)(y,{})]},t)})})},h=c.ZP.ul.withConfig({displayName:"article__StyledUl",componentId:"sc-127f43b-0"})(["padding-left:0;"]),x=c.ZP.li.withConfig({displayName:"article__StyledLi",componentId:"sc-127f43b-1"})(["list-style-type:none;margin:1.5rem 0 1.5rem;"]),y=c.ZP.div.withConfig({displayName:"article__Separator",componentId:"sc-127f43b-2"})(["border-bottom:1px solid var(--gray-medium);line-height:0.1em;"]);function b(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}function _(n){return function(n){if(Array.isArray(n))return b(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(n){if("string"==typeof n)return b(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if("Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(n,e)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(n,e){return Array.from({length:e-n+1},function(e,t){return t+n})},P=function(n){var e=n.total,t=n.pageSize,i=n.siblingCount,o=void 0===i?1:i,a=n.currentPage;return(0,r.useMemo)(function(){var n=Math.ceil(e/t);if(o+5>=n)return v(1,n);var r=Math.max(a-o,1),i=Math.min(a+o,n),c=r>2,s=i<n-2;if(!c&&s){var d=v(1,3+2*o);return[].concat(_(d),["...",n])}if(c&&!s){var l=v(n-(3+2*o)+1,n);return[1,"..."].concat(_(l))}if(c&&s){var u=v(r,i);return[1,"..."].concat(_(u),["...",n])}},[e,t,o,a])},j=function(n){var e=n.setPage,t=n.total,r=n.siblingCount,i=n.currentPage,o=P({currentPage:i,total:t,siblingCount:void 0===r?1:r,pageSize:n.pageSize});if(0===i||o.length<2)return null;var a=o[o.length-1];return(0,d.jsxs)(w,{children:[(0,d.jsxs)(C,{children:[(0,d.jsx)(I,{onClick:function(){return e(i-1)},disabled:1===i,children:"\xab"}),o.map(function(n){return"..."===n?(0,d.jsx)(S,{children:"…"}):(0,d.jsx)(I,{id:n===i?"active":null,onClick:function(){return e(n)},children:n})}),(0,d.jsx)(I,{onClick:function(){return e(i+1)},disabled:i===a,children:"\xbb"})]}),(0,d.jsxs)(N,{children:[(0,d.jsx)(I,{onClick:function(){return e(i-1)},disabled:1===i,children:"\xab Prev"}),(0,d.jsx)(I,{id:"active",children:i}),(0,d.jsx)(I,{onClick:function(){return e(i+1)},disabled:i===a,children:"Next \xbb"})]})]})},w=c.ZP.div.withConfig({displayName:"Pagenation__Wrap",componentId:"sc-1tz1q4p-0"})(["margin:1.5rem 0;display:flex;justify-content:center;"]),C=c.ZP.div.withConfig({displayName:"Pagenation__PageWrap",componentId:"sc-1tz1q4p-1"})(["display:flex;gap:0.5rem;@media screen and (max-width:500px){display:none;}"]),N=c.ZP.div.withConfig({displayName:"Pagenation__PageWrapSmall",componentId:"sc-1tz1q4p-2"})(["display:flex;gap:2rem;@media screen and (min-width:500px){display:none;}"]),I=c.ZP.button.withConfig({displayName:"Pagenation__PageBtn",componentId:"sc-1tz1q4p-3"})(["cursor:pointer;background-color:transparent;border-radius:6px;border:1px solid transparent;padding:8px 16px;text-decoration:none;transition:0.3s;&:hover{border:1px solid var(--gray-medium);border-radius:6px;}&#active{background-color:",";color:#ffffff;}"],s.colors.accent),S=c.ZP.button.withConfig({displayName:"Pagenation__PageBtnDot",componentId:"sc-1tz1q4p-4"})(["cursor:default;background-color:transparent;border-radius:6px;border:1px solid transparent;padding:8px 16px;text-decoration:none;"]),z=!0,Z=function(n){var e=n.sortedItems,t=(0,r.useState)(1),i=t[0],o=t[1],a=(i-1)*10;return(0,r.useEffect)(function(){window.scrollTo({top:0})},[i]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{sortedItems:e.slice(a,a+10)}),(0,d.jsx)(j,{total:e.length,pageSize:10,currentPage:i,setPage:o})]})}},1969:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return t(7887)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=1969)}),_N_E=n.O()}]);