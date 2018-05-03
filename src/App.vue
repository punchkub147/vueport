<template>
  <v-app>
    <Nav/>
    <Header/>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>

          <router-view/>

        </v-layout>
      </v-container>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'

import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {Nav, Header, Footer},
  data: () => ({
    app: 'PORTFOLIO',
    
  })
}
</script>

<style>
body{
  margin: 0;
}
a{
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
