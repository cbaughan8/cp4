<template>
  <div class="friends">
    <h1>All of your friends</h1>
      <div>
        <FriendList :friends="friends.friends" />
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import FriendList from '../components/FriendList.vue';

export default {
  name: 'Friends',
  data() {
     return{
       friends: {},
     }
  },
  components: {
    FriendList
  },
  created() {
    this.getFriends();
  },
  methods: {
    async getFriends() {
      try {
        console.log("in getfriends");
        let response = await axios.get("/api/friends");
        this.friends = response.data;
	console.log(this.friends);
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
  },
}
</script>
