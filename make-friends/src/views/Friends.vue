<template>
  <div class="friends">
    <h1>All of your friends</h1>
      <div>
        <FriendList :friends="friends" />
    </div>
  </div>
</template>


<script>
import FriendList from '../components/FriendList.vue'

export default {
  name: 'Friends',
  components: {
    FriendList
  },
  computed: {
    friends() {
      return this.$root.$data.friends;
    }
  },
}
</script>