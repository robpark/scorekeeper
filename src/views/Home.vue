<template>
  <v-container>
    <v-row no-gutters justify="center">
      <v-col cols="12" sm="6">
        <v-card class="pa-2" tile>
          <v-img alt="Scorekeeper" src="../assets/tennis-ball.png" />
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
