(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),o=c(6),l=c(4),r=c(5),a=c(8),i=c(7),d=c(1),u=c.n(d),b=(c(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),j=c(0),h=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam",selectedGoods:["Jam"]},e.setGoodSelected=function(t){return e.setState({selectedGood:t})},e.resetGoodSelection=function(){return e.setState({selectedGood:""})},e.addGoodsSelected=function(t){return e.setState((function(e){return{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}}))},e.removeGoodsSelection=function(t){var c=e.state.selectedGoods.filter((function(e){return e!==t}));e.setState({selectedGoods:c})},e.resetGoodsSelection=function(){return e.setState({selectedGoods:[]})},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.selectedGood,n=t.selectedGoods,s=function(e){if(1===e.length)return"".concat(e[0]," is selected");if(2===e.length)return"".concat(e[0]," and ").concat(e[1]," are selected");if(e.length>2){for(var t="",c=e.length-1,n=0;n<c;n+=1)t+=n!==c-1?"".concat(e[n],", "):e[n];return"".concat(t," and ").concat(e[c]," are selected")}return"No goods selected"}(n);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("section",{className:"header",children:[Object(j.jsx)("h2",{children:c.length?"".concat(c," is selected"):"No goods selected"}),c&&Object(j.jsx)("button",{className:"button button--close",type:"button",onClick:this.resetGoodSelection,children:"X"})]}),Object(j.jsx)("ul",{className:"list",children:b.map((function(t){return Object(j.jsxs)("li",{className:"list__item",children:[Object(j.jsx)("div",{className:c===t?"list__item_active":"",children:t}),c!==t&&Object(j.jsx)("button",{className:"button",type:"button",onClick:function(){return e.setGoodSelected(t)},children:"Select"})]},t)}))})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("section",{className:"header",children:[Object(j.jsx)("h2",{className:"header__title",children:s}),0!==n.length&&Object(j.jsx)("button",{className:"button button--close",type:"button",onClick:this.resetGoodsSelection,children:"X"})]}),Object(j.jsx)("ul",{className:"list",children:b.map((function(t){var c=n.find((function(e){return e===t}));return Object(j.jsxs)("li",{className:"list__item",children:[Object(j.jsx)("div",{className:c?"list__item_active":"",children:t}),c?Object(j.jsx)("button",{className:"button",type:"button",onClick:function(){return e.removeGoodsSelection(t)},children:"Remove"}):Object(j.jsx)("button",{className:"button",type:"button",onClick:function(){return e.addGoodsSelected(t)},children:"Add"})]},t)}))})]})]})}}]),c}(u.a.Component),m=h;s.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3861ec85.chunk.js.map