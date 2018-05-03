<template>
  <div>
    <v-text-field @keypress="addTodo"
      name="input-2"
      label="do something"
      v-model="newTodo"
    ></v-text-field>
    <v-layout row>
      <v-flex xs12 sm6 md12>
        <v-list>
          <v-list-tile v-for="(item, i) in todos" :key="i" @click="i">
            <v-list-tile-content>
              <v-list-tile-title v-html="item"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon class='bin' @click="deleteTodo(i)">remove_circle</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    newTodo: '',
    todos: ['Apple','Orange'],
  }),
  methods: {
    addTodo: function(e){
      if(e.keyCode == 13){
        this.todos.push(this.newTodo)
        this.newTodo = ''
      }
    },
    deleteTodo: function(i){
      this.todos.splice(i, 1)
      
    }
  }
}
</script>

<style scoped>
  .bin:hover{
    color: red;
  }
</style>
