<template>
  <div id="app">
    <div id="nav">
      <i class="fas fa-handshake"></i> |
      <router-link to="/">Home</router-link> |
      <router-link to="/friends">Friends</router-link> |
      <i class="fas fa-handshake"></i>
    </div>
    <router-view/>
    <div class="footer">
      <a href="https://github.com/cbaughan8/creative-project-3" class="footer-text">Github</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Outfit, sans-serif !important;
  text-align: center;
  color: #2F4858;
  background-color: #F0F6FA;
  padding-bottom: 100px;
  min-height: 750px;
}

#nav {
  padding: 30px;
  font-size: 2em;
}

#nav a {
  font-weight: bold;
  color: #2F4858;
}

#nav a.router-link-exact-active {
  color: #F6AE2D;
}

.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  background: #FBDA9D;
  

  
}
</style>
