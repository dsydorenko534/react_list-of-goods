(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,c=s(4),r=s.n(c),o=s(3),a=s(5),i=s(6),l=s(9),u=s(7),h=s(8),b=s(1),d=s.n(b),j=(s(14),s(15),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function y(t,e){var s=e.sortType,c=e.isReversed,r=Object(h.a)(t);switch(s){case n.ALPABET:r=r.sort((function(t,e){return t.localeCompare(e)}));break;case n.LENGTH:r=r.sort((function(t,e){return t.length-e.length}))}return c?r.reverse():(console.log(s,c),r)}!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var O=function(t){Object(l.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(a.a)(this,s);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortType:n.NONE},t.sortByAlphabet=function(){t.setState({sortType:n.ALPABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.handleReverse=function(){t.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{isReversed:!t.isReversed})}))},t.handleReset=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:"button is-info ".concat(e!==n.ALPABET&&"is-light"),onClick:this.sortByAlphabet,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:"button is-success ".concat(e!==n.LENGTH&&"is-light"),onClick:this.sortByLength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:"button is-warning ".concat(!s&&"is-light"),onClick:this.handleReverse,children:"Reverse"}),(s||e!==n.NONE)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:y(p,this.state).map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(d.a.Component);r.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f461dcf2.chunk.js.map