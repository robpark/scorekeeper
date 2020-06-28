<template>
  <v-container>
    <v-row no-gutters justify="center">
      <v-col cols="6" sm="3" align="center">
        <v-card class="pa-2" tile>
          <v-img alt="Scorekeeper" src="../assets/tennis-ball.png" width="270" height="270" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  created() {
    console.log(this.$store);
  }
};
</script>
