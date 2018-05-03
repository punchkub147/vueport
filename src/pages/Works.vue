<template>
  <div class="works">
    
    <v-container grid-list-md text-xs-center v-if="$route.path == '/works'">
      <h3>Github Repo</h3>
      <v-layout row wrap>
        <v-flex xs4 v-for="(d, index) in data" :key="index">
          <v-card ripple dark color="secondary">
            <a :href="d.html_url" target="_blank">
              <v-card-text class="px-0">
                <v-card-text>{{d.name}} [{{d.language}}]</v-card-text>
              </v-card-text>
            </a>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <TodoList v-if="$route.path == '/works/todolist'"/>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'

import TodoList from '../components/TodoList'
export default {
  components: {TodoList},
  data () {
    return {
      data: []
    }
  },
  created: function(){
    this.getData()
    console.log('PATH', this.$route.path)
  },
  methods:{
    getData: function(){
      axios.get('https://api.github.com/users/punchkub147/repos')
      .then((res) => {
        let data = res.data
        data = _.orderBy(data, 'updated_at', 'desc')
        data = _.map(data, d => {
          return {
            ...d,
            updated_at: moment(d.updated_at).fromNow()
          }
        })
        this.data = data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
