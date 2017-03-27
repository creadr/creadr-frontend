<template>
<div id="app">
  <mu-appbar title="creadr">
    <mu-icon-button icon='menu' slot="left" />
    <mu-flat-button slot="left" label="注音"/>
    <mu-flat-button slot="left" label="分词"/>
    <mu-flat-button slot="left" label="翻译"/>
    <mu-flat-button slot="left" label="解释"/>
    <mu-icon-button icon='account_box' slot="right" />
  </mu-appbar>
  <mu-text-field class="my-text-field" hintText="输入字符" fullWidth multiLine :rows="6" v-model="msg" icon="comment" />
  <br/>
  <mu-raised-button label="creadr" v-on:click="creadr" fullWidth/>
  <mu-sub-header>翻译后</mu-sub-header>
  <mu-content-block>
    <tb v-for="(article,index) in articleArr"   v-bind:style="{ color: article.color}" :data="article.word_obj">
    </tb>
  </mu-content-block>
</div>
</template>
<script>
import tb from './components/textBlock.vue'

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

  components: {
    tb,
  },

  methods: {
    creadr: function() {
      {
        let content = {};
        content['text'] = this.msg;
        // GET /someUrl
        this.$http.post('/api/getResult', JSON.stringify(content)).then(response => {

          // console.log(body);
          this.articleArr = response.body;
          // console.log(this.articleArr);

        }, response => {
          // error callback
          console.error(response);
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
