<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass) in itemClasses" :class="itemClass" class="star-item" :key="itemClass.index"></span>
  </div>
</template>

<script type="text/ecmascript-6">
const LENGTH = 5
const CLS_ON = 'on'
const CLS_OFF = 'off'
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType () {
      return 'star-' + this.size
    },
    itemClasses () {
      let result = []
      let score = this.score
      for (let i = 0; i < score; i++) {
        result.push(CLS_ON)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat: no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          background-image url("../../src/assets/images/star/on.svg")
        &.off
          background-image url("../../src/assets/images/star/off.svg")
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 6px
        background-size: 15px 15px
        &:last-child
          margin-right: 0
        &.on
          background-image url("../../src/assets/images/star/on.svg")
        &.off
          background-image url("../../src/assets/images/star/off.svg")
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &:last-child
          margin-right: 0
        &.on
          background-image url("../../src/assets/images/star/on.svg")
        &.off
          background-image url("../../src/assets/images/star/off.svg")
</style>
