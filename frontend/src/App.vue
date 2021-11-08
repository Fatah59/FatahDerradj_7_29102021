<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" >
            <img
              id="logo"
              src="./assets/icon-left-font-monochrome-black.png"
              alt="Logo groupomania"
              class="d-inline-block align-text-top"
          />
        </router-link>
        <div class="d-flex">
          <button @click="showLogin()" class="btn btn-outline-sucess">
            Se connecter
          </button>
          <button @click="showSignUp()" class="btn btn-outline-sucess">
            S'inscrire
          </button>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showLogin: function () {
      this.$router.push({ name: 'login' });
    },
  showSignUp: function () {
    this.$router.push({ name: 'signup' });
  }}
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  width: 50px;
  transform: scale(4);
  margin-left: 80px;
}

.btn-outline-sucess {
  border: solid 1px #FD3207;
  margin: 5px;
}

.btn-outline-sucess:hover {
  background: #FD3207;
  color: #fff;
}

</style>
