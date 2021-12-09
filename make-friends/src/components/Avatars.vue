<template>
<div class="wrapper">
  <div class="avatars">
    <div class="avatar" v-for="avatar in avatars" :key="avatar.id">
      <div class="info">
        <div class="avatar-name">{{avatar.name}}</div>
        <router-link :to="{name: 'Profile', params: {id: avatar.id}}">
                <img class="profile-pic" :src="avatar.avatar">
        </router-link>
        <button class="add-friend" @click="addFriend(avatar)">Add Friend</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'Avatars',
  props: {
    avatars: Array
  },
  methods: {
      addFriend(avatar){
          let isFriend = false;
          for (let i = 0; i < this.$root.$data.friends.length; ++i){
              if (avatar.id == this.$root.$data.friends[i].id) isFriend = true;
          }
          if (isFriend == false) this.$root.$data.friends.push(avatar);
      }
  },
  
}
</script>

<style>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatars{
    display: flex;
    flex-wrap: wrap;
    padding-left: 5px;
    padding-right: 5px;
}

.avatar{
    width: 25%;
    margin-top: 20px;
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
}

</style>