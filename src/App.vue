<template>
<div id="app">
  <mu-appbar title="creadr">
    <mu-icon-button icon='menu' slot="left" />
    <mu-icon-button icon='expand_more' slot="right" />
  </mu-appbar>
  <mu-text-field class="my-text-field" hintText="输入字符" fullWidth multiLine :rows="6" v-model="msg" icon="comment" />
  <br/>
  <mu-raised-button label="creadr" v-on:click="creadr" fullWidth/>
  <mu-sub-header>翻译后</mu-sub-header>
  <mu-content-block>
    <span v-for="(article,index) in articleArr"   v-bind:style="{ color: article.color}">
      {{article.word}} {{article.pinyin}}
    </span>
  </mu-content-block>
</div>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  data: function() {
    let msg = '';
    let articleArr = [];
    // let activeColor = "red";
    let touch = true,
        show = false,
        verticalPosition = "top",
        horizontalPosition = "center";
    let trigger = null;

    return {
      msg,
      articleArr,
      touch,
      show,
      verticalPosition,
      horizontalPosition,
      trigger
    };
  },

  methods: {
    creadr: function() {
      {
        // GET /someUrl
        this.$http.get('/api/article').then(response => {

          // get body data
          // console.log(response.body);
          this.articleArr = response.body.data;
          // console.log(this.articleArr);

        }, response => {
          // error callback
          console.log(response);
        });
      }

    }
  },
  // computed: {
  //   creadrMsg: function() {
  //     var msg = this.msg
  //     console.log(msg);
  //     this.$http.post('/api/getResult', msg).then(
  //       response => {
  //         // success callback
  //         console.log(response);
  //         return response;
  //       },
  //       response => {
  //         // error callback
  //         console.log(response);
  //     });
  //   }
  // }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .my-text-field {
        margin-top: 20px;
    }

}
</style>
