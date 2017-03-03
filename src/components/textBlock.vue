<template lang="html">
  <div class="tbFa">
    <div  class="tb" v-for="obj in data">
      <div class="tbpy">{{obj.pinyin}}</div>
      <div class="tbword">{{obj.word}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textBlock',
  props: {
    pinyin: {
      type: Array,
      required: false,
    },
    data: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="scss">
.tb{
  display: inline-block;
  .tbword{
    font-size: 20px;
  }
}
.tbFa{
  display: inline-block;
  margin-right: 20px;
}
</style>
