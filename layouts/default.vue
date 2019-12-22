<template>
  <div id="__default">
    <div id="particles-js" />
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js',
          type: 'text/javascript'
        },
        {
          src: 'https://suvajit-me.firebaseapp.com/effects.js',
          body: true,
          type: 'text/javascript'
        }
      ]
    }
  }
}
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
