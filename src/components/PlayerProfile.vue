<template>
  <div>
    <h2>Player Profile</h2>
    <slot name="player"></slot>
    <h3>Ranking: {{ ranking }}</h3>
    <slot name="home"></slot>
  </div>
</template>

<script>
export default {
  name: 'PlayerProfile',
  props: ['ranking']
}
</script>

<style scoped />
