<template>
  <div class="navigasi">
    <div class="rumah">
      <img style="margin-right: 1vh; width: 30%;" src="./assets/pause.png">
      <router-link to="">E2AK</router-link>
    </div>

    <div class="link">
      | <router-link to="/dashboard" class="rute">Home</router-link>  |
        <router-link to="/mtt" class="rute">Team</router-link>| 
      <router-link to="/about" class="rute">Karya</router-link>
    </div>
  </div>

  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigasi {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Mengatur jarak antara rumah dan link */
  background-color: rgba(25, 20, 20, 1);
  width: 95%;
  height: 7vh;
  margin: auto;
  border-radius: 5vh 5vh 5vh 5vh; /* Properti border-radius untuk mengatur sudut */
}

.link {
  margin-right:2%;
}

.rumah {
  display: flex;
  align-items: center;
  margin-left: 2%;
}

a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-size: 3vh;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
