(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d716d70"],{"3de1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-notification",{attrs:{type:"is-success","aria-close-label":"Close notification"}},[a("b-icon",{attrs:{icon:"medal"}}),e._v(" "+e._s(e.winnersMessage())+" ")],1),a("b-table",{attrs:{data:e.players,"default-sort":"score","default-sort-direction":"desc",striped:!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{label:"Rank",width:"40",numeric:""}},[e._v(" "+e._s(e.getPlayerRank(t.row))+" ")]),a("b-table-column",{attrs:{field:"name",label:"Name"}},[e._v(" "+e._s(t.row.name)+" ")]),a("b-table-column",{attrs:{label:"Score",centered:"",field:"score",sortable:""}},[a("span",{staticClass:"tag is-primary"},[e._v(" "+e._s(t.row.score)+" ")])])]}}])}),a("section",{staticClass:"buttons is-centered basic-margin"},e._l(e.gameButtons,(function(t){return a("b-button",{attrs:{"icon-left":t.icon},on:{click:t.callback}},[e._v(" "+e._s(t.label)+" ")])})),1)],1)},o=[],r=(a("99af"),a("4de4"),a("a15b"),a("2ef0")),s=a("ae85"),c=s["a"].extend({name:"Result",methods:{winners:function(){var e=Object(r["max"])(Object(r["map"])(this.players,"score"));return this.players.filter((function(t){return t.score===e}))},winnersMessage:function(){var e=Object(r["map"])(this.winners(),"name");if(1===e.length)return"".concat(Object(r["first"])(e)," has won!");var t=e.pop();return"".concat(e.join(", ")," and ").concat(t," have won!")},newGame:function(){localStorage.removeItem("players"),this.removeLogs(),this.goToGame()},replay:function(){this.removeLogs(),this.goToGame()},goToGame:function(){this.$router.push({name:"Game"})},removeLogs:function(){localStorage.removeItem("events")}},computed:{gameButtons:function(){return[{label:"New Game",callback:this.newGame,disabled:function(){return!1},icon:"redo"},{label:"Replay with the same players",callback:this.replay,disabled:function(){return!1},icon:"redo"}]}}}),i=c,l=(a("7f0a"),a("2877")),u=Object(l["a"])(i,n,o,!1,null,"10c4671e",null);t["default"]=u.exports},"78f7":function(e,t,a){},"7f0a":function(e,t,a){"use strict";var n=a("78f7"),o=a.n(n);o.a},a15b:function(e,t,a){"use strict";var n=a("23e7"),o=a("44ad"),r=a("fc6a"),s=a("a640"),c=[].join,i=o!=Object,l=s("join",",");n({target:"Array",proto:!0,forced:i||!l},{join:function(e){return c.call(r(this),void 0===e?",":e)}})}}]);
//# sourceMappingURL=chunk-3d716d70.cbd33b8f.js.map