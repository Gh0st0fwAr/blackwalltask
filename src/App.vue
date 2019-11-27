<template lang="pug">
   .subsubwrappper
      mainApp

</template>


<script>
export default {
   components: {
      mainApp: () => import("./scripts/mainapp.vue"),
   }
}
</script>