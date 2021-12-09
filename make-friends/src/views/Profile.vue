<template>
    <div class="profile">
        <ProfileInfo avatars:="avatars" />
    </div>
</template>

<script>
import ProfileInfo from "../components/ProfileInfo.vue"
export default {
    name: 'Home',
    components: {
    ProfileInfo
  },
    props: ["id"],
    computed: {
        avatars() {
            return this.$root.$data.avatars;
        }
    },
  
};
</script>