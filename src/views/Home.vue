<template>
  <div class="home">
    <img alt="Scorekeeper" src="../assets/tennis-ball.png" height="100" width="100" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    console.log(this.$store);
  }
};
</script>
