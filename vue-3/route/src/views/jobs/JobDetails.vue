<template>
  <div>
        <h1>Job Details Component</h1>
        <h3>Job id: {{id}}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id
    }
    
  }
}
</script>

<style>

</style>