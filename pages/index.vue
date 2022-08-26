<template>
  <div id="game">

  </div>
</template>

<script>
import { loadLevel } from '../game'
export default {
  name: 'IndexPage',
  mounted() {
    loadLevel()
  },
}
</script>
