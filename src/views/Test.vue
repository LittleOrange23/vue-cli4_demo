<!--  -->
<template>
  <div>
    <h2 @click="toHome">点击进入Home</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {
    toHome () {
      this.$router.push({
        path: '/about',
        query: {
          name: 'zhangsan '
        }
      }
      )
    }
  }
}

</script>
<style lang='less' scoped>
</style>
