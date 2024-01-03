<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      
    </div>
    <base-modal/>
  </header>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
name: "App",
component:{
  BaseModal: Modal,

},
data() {
  return {
    
  }
},
methods:{

}
}
</script>
 
<style scoped></style>
