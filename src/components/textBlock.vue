<template lang="html">
  <div class="tbFa">
    <div  class="tb" v-for="obj in data">
      <textDetail :pinyin="obj.pinyin" :word="obj.word"></textDetail>
    </div>
  </div>
</template>

<script>
import textDetail from './textDetail.vue'
export default {
  name: 'textBlock',
  props: {
    data: {
      type: Array,
      required: true,
    }
  },
  components: {
    textDetail,
  }
}
</script>

<style lang="scss">
.tb{
  display: inline-block;
  .tbword{
    font-size: 25px;
    text-align: center;
  }
  .tbpy{
    font-size: 14px;
  }
}
.tbFa{
  display: inline-block;
  text-align: center;
}
</style>
