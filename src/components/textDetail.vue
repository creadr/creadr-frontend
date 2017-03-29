<template lang="html">
  <div>
  <div class="tbpy" v-show="showPinyin">{{pinyin}}</div>
  <div class="tbword" @click="togglePinyin">{{word}}</div>
  </div>
</template>

<script>
export default {
  name: "textDetail",
  data (){
    return {
      showPinyin: true,
    }
  },
  methods: {
    togglePinyin(){
      this.showPinyin = !this.showPinyin;
    },
  },
  props: {
    pinyin: {
      type: String,
    },
    word: {
      type: String,
    }
  }
}
</script>

<style lang="css">
</style>
