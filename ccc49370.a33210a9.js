(window.webpackJsonp=window.webpackJsonp||[]).push([[740,119,129],{1004:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1020),i=a(1105),c=a(1023);var s=function(e){var t=e.nextItem,a=e.prevItem;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},a&&l.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),l.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(1069),o=a(1075);t.default=function(e){var t=e.content,a=e.sidebar,n=t.frontMatter,c=t.metadata,d=c.title,u=c.description,v=c.nextItem,E=c.prevItem,g=c.editUrl,f=n.hide_table_of_contents;return l.a.createElement(r.a,{title:d,description:u},t&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(m.a,{sidebar:a})),l.a.createElement("div",{className:"col col--8"},l.a.createElement(i.a,{frontMatter:n,metadata:c,isBlogPostPage:!0},l.a.createElement(t,null)),l.a.createElement("div",null,g&&l.a.createElement("a",{href:g,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(v||E)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(s,{nextItem:v,prevItem:E}))),!f&&t.rightToc&&l.a.createElement("div",{className:"col col--2"},l.a.createElement(o.a,{headings:t.rightToc})))))}},1020:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1046),i=a(1032),c=function(){var e=Object(i.useLocation)().pathname;return e.endsWith("/")?l.a.createElement(i.Redirect,{to:e.slice(0,-1)}):e.endsWith(".html")?l.a.createElement(i.Redirect,{to:e.slice(0,-5)}):null};t.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c,null),l.a.createElement(r.a,e))}},1069:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),l=a.n(n),r=a(1023),i=a(56),c=a.n(i);function s(e){var t=e.sidebar;if(0===t.items.length)return null;var a=null;return l.a.createElement("div",{className:c.a.sidebar},l.a.createElement("h3",{className:c.a.sidebarItemTitle},t.title),l.a.createElement("ul",{className:c.a.sidebarItemList},t.items.map((function(e){var t=e.permalink.split("/")[2],n=a!==t?l.a.createElement("h4",{className:c.a.sidebarItemTitle},t):null;return a=t,l.a.createElement(l.a.Fragment,null,n,l.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},l.a.createElement(r.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title)))}))))}},1075:function(e,t,a){"use strict";var n=a(0),l=a.n(n);var r=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,c=!1,s=document.getElementsByClassName(e);l<s.length&&!c;){var m=s[l],o=m.href,d=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),m.classList.add(t),i(m),c=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=a(67),c=a.n(i),s="table-of-contents__link";function m(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(m,{isChild:!0,headings:e.children}))}))):null}t.a=function(e){var t=e.headings;return r(s,"table-of-contents__link--active",100),l.a.createElement("div",{className:c.a.tableOfContents},l.a.createElement(m,{headings:t}))}}}]);