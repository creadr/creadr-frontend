<template lang="html">
  <div class="tb">
    <div class="tbpy">{{pinyin}}</div>
    <div class="tbword">{{word}}</div>
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
    word: {
      type: String,
      required: true,
    }
  },
  filters: {
    stw (ar) {

    }
  }

}
</script>

<style lang="scss">
.tb{

  display: inline-block;
  margin-right: 10px;
}
</style>
