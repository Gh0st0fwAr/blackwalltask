<template lang="pug">
   .gamebox__cell(@click="someEvent")
      .cell__number {{cell}}
</template>

<script>
export default {
   props: {
      cell: Number,
   },
   methods: {
      someEvent() {
         this.$emit('some-event', this.cell);
      }
   },
}
</script>