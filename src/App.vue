<template>
  <the-header></the-header>

  <div class="container">
    <router-view/>
  </div>
  <the-footer></the-footer>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  components:{
    TheHeader,
    TheFooter
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss">

@import "@/assets/css/app.scss";

@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');


#app {
  font-family: 'Alata', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  width: 100%;
  margin: auto;
  padding-top: 90px;
  overflow: hidden;
  
}
body{
  overflow-x: hidden;
  background-color: #F5FCFF;
}
@media (max-width:768px) { 
  .container{
  padding-top: 60px;
  
}
  }

</style>
