<template>
  <v-flex shrink>
    <img class='display' src="../assets/13570110.jpg" alt="">
    <p>Hello {{msg}}</p>
    <p>ICT Silpakorn</p>
    <p>Address : 526/15 pahonyothin saimai bangkok 10220</p>
    <p>Tel : 080-992-6072</p>
    <p>Birth Date : 30/03/1996</p>
    <p>Gender : Male</p>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      msg: "I'm Kittapard Puaime (Punch)",
    }
  },
}
</script>

<style scoped>
  .display{
    width: 300px;
  }
</style>
