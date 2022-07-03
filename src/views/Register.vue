<template>
    <main class="content">

        <div class="container">
            <h1 class="container-title">Registre-se</h1>

            <form>
                <div class="container-form-control">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu email">
                </div>

                <div class="container-form-control">
                    <label for="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha">
                </div>

                <div class="container-form-control">
                    <label for="confirm-password">Confirme sua senha</label>
                    <input type="password" id="confirm-password" placeholder="Confirme sua senha">
                </div>

                <button class="container-form-button">Enviar</button>
            </form>
            <p class="container-text">Já tem uma conta? <router-link class="container-text-link" to="/login">Faça o login</router-link></p>
        </div>

    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Register'
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

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

.container-form-control {
    margin: 15px 0;
}

.container-form-control label {
    display: block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 15px;
    text-align: left;
    margin-bottom: 6px;
}

.container-form-control input {
    width: 100%;
    padding: 12px 10px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    outline: none;
}

.container-form-button {
    width: 100%;
    padding: 12px 10px;
    background-color: rgb(73, 73, 214);
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    transition: background .5s ease-in-out;
}

.container-form-button:hover {
    cursor: pointer;
    background-color: rgb(39, 39, 216);
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