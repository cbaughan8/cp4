<template>
<div class="wrapper">
  <div class="avatars friends">
    <div class="avatar friend" v-for="friend in friends" :key="friend.id">
      <div class="info">
        <div class="avatar-name">{{friend.name}}</div>
        <router-link :to="{name: 'Profile', params: {id: friend.id}}">
                <img class="profile-pic" :src="friend.avatar">
        </router-link>
        <button class="add-friend" @click="deleteFriend(friend)">Delete</button>
	<form>
           <button class="add-friend" type="Submit" @click="editName(friend)">Edit</button>
           <input class="name-change" placeholder="Edit Name" v-model="newName">
        </form>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'FriendList',
  data() {
    return {
      newName: "",
    }
  },
  props: {
    friends: Object
  },
  methods: {
    async deleteFriend(friend) {
      try {
        await axios.delete("/api/friends/" + friend._id);
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
    async editName(friend) {
      try {
        await axios.put("/api/friends/" + friend._id, {
          name: this.newName,
        });
	console.log("in editName");
        console.log(this.newName);
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
  },
}
</script>

<style>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.friends{
    display: grid;
    grid-template-columns: 25%, 25%, 25%, 25%;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    
}

.avatar{
    width: 25%;
    margin-top: 20px;
    justify-self: center;

}

.info{
    display: grid;
    grid-template-rows: 40px, 100px, 20px;
    justify-content: center;
    
}
.profile-pic{
    border: solid 2px #F6AE2D;
    border-radius: 2px;;
}

.add-friend{
    width: 100px;
    justify-self: center;
    margin-bottom: 5px;
}

.change-name{
    width: 100px;
    justify-self: center;
}

</style>
