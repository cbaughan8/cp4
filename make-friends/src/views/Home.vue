<template>
  <div class="home">
    
        <Avatars :avatars="avatars" />
    
  </div>
</template>


<script>
import Avatars from '../components/Avatars.vue'

export default {
  name: 'Home',
  components: {
    Avatars
  },
  computed: {
    avatars() {
      return this.$root.$data.avatars;
    }
  },
}
</script>
