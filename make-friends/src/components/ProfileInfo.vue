<template>
<div class="wrapper-profile">
  <div class="profile-page">
    <div class="profile-info" v-for="avatar in selected(theAvatars)" :key="avatar.id">
        <h1>{{avatar.name}}</h1>
        <img class="profile-pic" :src="avatar.avatar">
        <div class="details">
            <div>Email: {{avatar.email}}</div>
            <div>Gender: {{avatar.gender}}</div>
            <div>Race: {{avatar.race}}</div>
            <div>Job: {{avatar.job}}</div>
        </div>
        <button class="add-friend" @click="addFriend(avatar)">Add Friend</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProfileInfo',
  props: {
    avatars: Array
  },
  data(){
      return{
          profileId:this.$route.params.id
      }
  },
  computed: {
    theAvatars() {
      return this.$root.$data.avatars;
    },
    personId(){
        return this.$route.$params.id;
    }
  },
  methods: {
      addFriend(avatar){
          let isFriend = false;
          for (let i = 0; i < this.$root.$data.friends.length; ++i){
              if (avatar.id == this.$root.$data.friends[i].id) isFriend = true;
          }
          if (isFriend == false) this.$root.$data.friends.push(avatar);
      },
      selected(avatars) {
        return avatars.filter(avatar => avatar.id == this.$route.params.id)
     }
  },
}
</script>

<style>
.wrapper-profile{
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.profile-page{
    width: 40%;
    border: solid 2px #2F4858;
    border-radius: 30px;
    justify-self: center;
    padding-bottom: 20px;
}

.details{
    display: grid;
    grid-template-rows: 40px 40px 40px 40px;
    margin-top: 20px;
}

.profile-pic{
    border: solid 2px #F6AE2D;
    border-radius: 2px;;
}

</style>