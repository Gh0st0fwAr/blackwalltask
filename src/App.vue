<template lang="pug">
   .subwrapper
      .counters
         .counters__game 15
         .counters__box
            .counters__title Ходов
            .counters__turns {{turns}}
         .counters__box
            .counters__title Время
            .counters__time {{minutes}}:{{seconds}}
      .gamebox
         transition-group(name="flip-cells" mode="out-in" tag="ul").gamebox__area
            newCell(
               v-for="(cell, index) in cells" :cell="cell"
               :key="cell"
               @some-event="clickOnCell"
               v-bind:class="{cellNull: index===currentIndex}"
               tag="li"
            )
            //- li.gamebox__cell(
            //-    v-for="cell in cells" :cell="cell"
            //-    :key="cell"
            //-    @click="clickEvent"
            //-    ref="cellId"
            //- ) {{cell}}
         .gamebox__message(v-bind:class="{gameboxMsgActive: isWin}")
            .gamebox__title Вы выиграли! Нажмите "Перемешать", если хотите начать заново, или "Выход" если вас устраивает результат.
            .gamebox__btnbox
               button.btn.btnbox__shuffle.shuffle(@click="shuffle") Перемешать
               button.btn.exit(@click="exitBtn") Выход
      button.btn.shuffle(@click="shuffle") Перемешать
</template>

<script>
import _ from 'lodash';
export default {
   components: {
      newCell: () => import("./elements/cell.vue"),
   },
   data() {
      return {
         cells: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
         currentIndex: "",
         isWin: false,
         turns: 0,
         minutes: "00",
         seconds: String,
         isTime: false,
      }
   },
   watch: {
      cells: function(val) {
         const nullVal = this.cells.indexOf(0);
         this.currentIndex = nullVal;
         const rightArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
         if (this.cells.toString() === rightArr.toString()) {
               this.isWin = true;
         } 
      },
      
   },
   methods: {
      shuffle: function () {
      this.cells = _.shuffle(this.cells);
      this.isWin = false;
      this.turns = 0;
      this.isTime = false;
      this.seconds = "00";
      this.minutes = "00";
      this.activateTimer();
      
      },
      clickOnCell: function(someCell) {
         const clickedVal = this.cells.indexOf(someCell);
         const tc = this.cells;
         const ci = this.currentIndex;
         var clickedValCalc = tc[clickedVal];
         if (tc[clickedVal-4] === 0 || tc[clickedVal+4] === 0 || tc[clickedVal+1] === 0 || tc[clickedVal-1] ===0) {
            if (this.isTime === false) {
            this.isTime = true;
            this.activateTimer();
            };
            this.turns++;
            this.$set(tc, ci, clickedValCalc);
            this.$set(tc, clickedVal, 0);
         }; 
         
      },
      exitBtn: function() {
         this.isWin = false;
         this.turns = 0;
         this.seconds = "00";
         this.minutes = "00";
         this.isTime = false;
      },
      activateTimer() {
         var countSeconds = 0;
         var countMinutes = 0;
         let timer = setInterval(() => {
            if (this.isWin === true || this.isTime === false){
               clearInterval(timer);
               return;
            }
            var seconds = this.seconds;
            var minutes = this.minutes;
            countSeconds++;
            if (countSeconds < 10) {
               var secondsString = String("0" + countSeconds);               
               this.seconds = secondsString;               
            } else if(countSeconds<60) {
               this.seconds = String(countSeconds);
            } else {
               this.seconds = String("00");
               countMinutes++;
               countSeconds = 0;
               if(countMinutes<10) {
               var minutesString = String("0" + countMinutes);
               this.minutes = minutesString;
               } else if (countMinutes<60) {
                  this.minutes = countMinutes;
               } else {
                  countMinutes = 0;
               }
            }
            
         }, 1)
         
      }
   },
   created() {
      const nullVal = this.cells.indexOf(0);
      this.currentIndex = nullVal;
      this.seconds = "00";
      var arr = [];
      // Ввести размер массива. (!)Пятнашки рассчитаны на поле с равным количеством строк и столбоцов(!)
      for (var i=0; i<16; i++){
         arr.push(i);
      }
      console.log(arr);
   },
   
}
</script>