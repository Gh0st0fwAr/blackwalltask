(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{10:function(s,t,i){"use strict";i.r(t);var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"subwrapper"},[i("div",{staticClass:"counters"},[i("div",{staticClass:"counters__game"},[s._v(s._s(s.cellsNum-1))]),i("div",{staticClass:"counters__box"},[i("div",{staticClass:"counters__title"},[s._v("Ходов")]),i("div",{staticClass:"counters__turns"},[s._v(s._s(s.turns))])]),i("div",{staticClass:"counters__box"},[i("div",{staticClass:"counters__title"},[s._v("Время")]),i("div",{staticClass:"counters__time"},[s._v(s._s(s.minutes)+":"+s._s(s.seconds))])])]),i("div",{staticClass:"gamebox"},[i("transition-group",{staticClass:"gamebox__area",attrs:{name:"flip-cells",mode:"out-in",tag:"ul"}},s._l(s.cells,function(t,e){return i("newCell",{key:t,class:{cellNull:e===s.currentIndex},attrs:{cell:t,tag:"li"},on:{"some-event":s.clickOnCell}})}),1),i("div",{staticClass:"gamebox__message",class:{gameboxMsgActive:s.isWin}},[i("div",{staticClass:"gamebox__title"},[s._v('Вы выиграли! Нажмите "Перемешать", если хотите начать заново, или "Выход" если вас устраивает результат.')]),i("div",{staticClass:"gamebox__btnbox"},[i("button",{staticClass:"btn btnbox__shuffle shuffle",on:{click:s.shuffle}},[s._v("Перемешать")]),i("button",{staticClass:"btn exit",on:{click:s.exitBtn}},[s._v("Выход")])])])],1),i("button",{staticClass:"btn shuffle",on:{click:s.shuffle}},[s._v("Перемешать")])])};e._withStripped=!0;var n=i(8),l=i.n(n),c={components:{newCell:function(){return i.e(2).then(i.bind(null,11))}},data:function(){return{cells:[],rightArr:[],currentIndex:"",isWin:!1,turns:0,minutes:"00",seconds:String,isTime:!1,checkCells:[],cellsNum:16}},watch:{cells:{immediate:!1,handler:function(s,t){var i=this.cells.indexOf(0);this.currentIndex=i}}},methods:{shuffle:function(){this.cells=l.a.shuffle(this.cells),this.isWin=!1,this.turns=0,this.isTime=!1,this.seconds="00",this.minutes="00",this.activateTimer()},clickOnCell:function(s){var t=this.cells.indexOf(s),i=this.cells,e=this.currentIndex,n=i[t],l=0;if(9===this.cellsNum?l=3:16===this.cellsNum?l=4:25===this.cellsNum&&(l=5),console.log(l),0===i[t-l]||0===i[t+l]||0===i[t+1]||0===i[t-1]){!1===this.isTime&&(this.isTime=!0,this.activateTimer()),this.turns++,this.$set(i,e,n),this.$set(i,t,0);var c=this.rightArr;this.cells.toString()===c.toString()&&(this.isWin=!0)}console.log(this.currentIndex)},exitBtn:function(){this.isWin=!1,this.turns=0,this.seconds="00",this.minutes="00",this.isTime=!1},activateTimer:function(){var s=this,t=0,i=0,e=setInterval(function(){if(!0!==s.isWin&&!1!==s.isTime){s.seconds,s.minutes;if(++t<10){var n=String("0"+t);s.seconds=n}else if(t<60)s.seconds=String(t);else if(s.seconds=String("00"),t=0,++i<10){var l=String("0"+i);s.minutes=l}else i<60?s.minutes=i:i=0}else clearInterval(e)},1e3)}},created:function(){var s=this.cells.indexOf(0);this.currentIndex=s,this.seconds="00";for(var t=this.cellsNum,i=[],e=1;e<t;e++)i.push(e);i.push(0),this.rightArr=i;var n=[];for(e=1;e<t;e++)n.push(e);n.push(0),this.cells=n}},a=i(1),r=Object(a.a)(c,e,[],!1,null,null,null);r.options.__file="src/scripts/mainapp.vue";t.default=r.exports}}]);