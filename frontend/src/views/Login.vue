<template>

<section class="gradient-form">
  <div class="container py-5 h-100">
    <div class="row d-flex h-100">
      <div class="col-xl-6">
        <div class="card rounded-3">
          <div class="row g-0">
            <div class="col-lg-12">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img class="logo" src="../assets/icon-above-font.png" alt="logo-groupomania">
                  <h4 class="mt-1 mb-5 pb-1">Bienvenue !</h4>
                </div>

                <form>
                  <p>Veuillez vous connectez à votre compte</p>

                  <div class="form-outline mb-4">
                    <input v-model="email" type="email" id="formEmail" class="form-control" placeholder="Votre adresse email" />
                    <label class="form-label" for="formEmail"></label>
                  </div>

                  <div class="form-outline mb-4">
                    <input v-model="password" type="password" id="formPassword" class="form-control" placeholder="Votre mot de passe" />
                    <label class="form-label" for="formPassword"></label>
                  </div>

                  <div class="form-row" v-if="status == 'error_login'">
                    Adresse email et/ou mot de passe invalide
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button @click="login()" class="btn btn-primary btn-block gradient-custom-2 mb-3 col-12" type="button">
                      <span v-if="status == 'loading'">Connexion en cours...</span>
                      <span v-else>Connexion</span>
                      </button>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Vous n'avez pas de compte ?</p>
                    <button type="button" class="btn btn-outline-danger" @click="showSignUp">Créer un compte</button>
                  </div>
                  <a class="text-back-home" href="/">Revenir à l'accueil</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



</template>

<script>
export default {
  name: 'login',
  methods: {
      showSignUp: function () {
    this.$router.push({ name: 'signup' });
  },
  login: function() {
    const self = this;
    this.$store.dispatch('login', {
      email: this.email,
      password: this.password,
    }).then(function() {
      self.$router.push('/profile');
    }, function(error) {
      console.log(error);
    })
  }}
  }

</script>

<style scoped>

.gradient-form{
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4));
  height: 100vh;
}

.row {
  justify-content: center;
  align-items: center;
}


.logo {
  width: 185px;
}

.gradient-custom-2 {
  background: #FD3207;
  border: #FD3207;
}

.gradient-custom-2:hover {
  background: #fff;
  border: solid 1px #FD3207;
  color: #FD3207;
}

.btn-outline-danger {
  border: solid 1px #FD3207;
}

.btn-outline-danger:hover {
  background: #FD3207;
  color: #fff;
}

.text-back-home {
  color: #FD3207;
}

</style>
