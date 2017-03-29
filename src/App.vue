<template>
<div id="app">
  <mu-appbar>
    <mu-icon-button icon='menu' slot="left" />
    <mu-flat-button slot="left" label="creadr" />
    <mu-flat-button slot="left" label="注音" @click="creadr" />
    <mu-flat-button slot="left" label="分词" />
    <mu-flat-button slot="left" label="翻译" />
    <mu-flat-button slot="left" label="解释" />
    <mu-icon-button icon='account_box' slot="right" />
  </mu-appbar>
  <div class="paper">
    <mu-text-field class="my-text-field" hintText="输入字符" fullWidth multiLine :rows="6" v-model="msg" icon="comment" />
    <br/>
    <div class="results">
      <tb v-for="(article,index) in articleArr" v-bind:style="{ color: article.color}" :data="article.word_obj">
      </tb>
    </div>

  </div>
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
        this.$http.post('/getResult', JSON.stringify(content)).then(response => {

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
        height: 160px;
        overflow-y: auto;
    }

    .paper {
        width: 80%;
        margin: 0 auto;
        box-shadow: 0 0 10px rgba(158, 158, 158, .5);
        margin-bottom: 20px;
        margin-top: 40px;
        min-height: 200px;

        .results{
          padding-left: 56px;
        }
    }

}
</style>
