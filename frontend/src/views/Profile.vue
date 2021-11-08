<template>
    <div class="card">
        <div class="row">
            <h1 class="card__title">Votre profil</h1>
        <p class="card__subtitle">{{ user.nom }} {{ user.prénom }}</p>
        <p> Votre email enregistré : {{ user.email }}</p>
        <img :src="user.photo">
        <div class="form-row">
            <button @click="logout()" class="button">Déconnexion</button>
        </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    name: 'Profile',
    mounted: function() {
        console.log(this.$store.state.user);
        if (this.$store.state.userId == -1) {
        this.$router.push('/login');
        return;
        }
        this.$store.dispatch('getUserInfos');
    },
    computed: {
        ...mapState({
            user: 'userInfos',
        })
    }, 
    methods: {
        logout: function() {
            this.$store.commit('loggout');
            this.$$router.push('/');
        }
    }
}
</script>

<style scoped>

</style>
