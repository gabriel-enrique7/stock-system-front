<template>
    <main class="content">

        <div class="container">
            <h1 class="container-title">Login</h1>

            <form>
                <div class="container-form-control">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Digite seu email">
                </div>

                <div class="container-form-control">
                    <label for="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha">
                </div>

                <button class="container-form-button">Entrar</button>
            </form>
            <p class="container-text">Ainda não tem uma conta? <router-link class="container-text-link" to="/register">Registre-se</router-link></p>
        </div>

    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Login'
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
    width: 430px;
    padding: 16px;
    color: white;
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
    width: 25px;
    height: 5px;
    background-color: rgb(73, 73, 214);
    margin: 5px auto;
    position: absolute;
    border-radius: 4px;
    transition: all .5s ease-in-out;
}

.container-title:hover::after {
    width: 75px;
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