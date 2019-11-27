<template lang="pug">
   .subsubwrappper
      mainApp

</template>


<script>
export default {
   components: {
      mainApp: () => import("./elements/mainapp.vue"),
   }
}
</script>