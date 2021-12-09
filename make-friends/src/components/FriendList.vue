<template>
<div class="wrapper">
  <div class="avatars friends">
    <div class="avatar friend" v-for="friend in friends" :key="friend.id">
      <div class="info">
        <div class="avatar-name">{{friend.name}}</div>
        <router-link :to="{name: 'Profile', params: {id: friend.id}}">
                <img class="profile-pic" :src="friend.avatar">
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'FriendList',
  props: {
    friends: Array
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
}

</style>