<template>
  <div class="home">
    <img
      alt="Scorekeeper"
      src="../assets/tennis-ball.png"
      height="100"
      width="100"
    />
    <h1>Scorekeeper</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  created() {
    console.log(this.$store);
  }
};
</script>
