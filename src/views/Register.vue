<template>
    <main class="content">

        <div class="container">
            <h1 class="container-title">Registre-se</h1>

            <form @submit.prevent="signUp" novalidate>
                <div class="container-form-control">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu email" v-model="newUser.email">
                </div>

                <div class="container-form-control">
                    <label for="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha" v-model="newUser.password">
                </div>

                <div class="container-form-control">
                    <label for="confirm-password">Confirme sua senha</label>
                    <input type="password" id="confirm-password" placeholder="Confirme sua senha" v-model="newUser.confirmPassword">
                </div>

                <button class="container-form-button">Enviar</button>
            </form>
            <p class="container-text">Já tem uma conta? <router-link class="container-text-link" to="/">Faça o login</router-link></p>
        </div>

    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IRegister from '@/interfaces/IRegister';

export default defineComponent({
    name: 'Register',
    data() {
        return {
            newUser: {
                email: '',
                password: '',
                confirmPassword: ''
            },
        };
    },

    methods: {
        signUp() {
            console.log(this.newUser as IRegister);
        }
    }
});
</script>

<style scoped>
.content {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 400px;
    color: white;
    border: 2px solid rgb(73, 73, 214);
    border-radius: 8px;
    padding: 2rem;
}

.container-title {
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin-bottom: 30px;
    cursor: context-menu;
}

.container-title::after {
    content: '';
    display: block;
    width: 50px;
    height: 5px;
    background-color: rgb(73, 73, 214);
    margin: 5px auto;
    position: absolute;
    border-radius: 4px;
    transition: all .5s ease-in-out;
}

.container-title:hover::after {
    width: 150px;
}

.container-text {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 15px;
    margin-top: 15px;
}

.container-text-link {
    text-decoration: none;
    color: rgb(73, 73, 214);
    transition: color .3s ease-in-out;
}

.container-text-link:hover {
    color: rgb(100, 100, 231);
}
</style>