<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="light-green">
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 text-right light-green">
        4 Legs Software &copy;{{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  data: () => ({
    icons: ['mdi-twitter', 'mdi-linkedin']
  })
};
</script>

<style scoped></style>
