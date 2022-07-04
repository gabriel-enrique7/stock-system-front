<template>
    <main class="content">

        <div class="container">
            <div class="container-image">
                <img src="@/assets/login-image.svg" alt="Imagem Ilustrativa de Login">
            </div>

            <div class="container-form">
                <h1 class="container-form-title">Login</h1>

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
                <p class="container-form-text">Ainda não tem uma conta? <router-link class="container-form-text-link" to="/register">Registre-se</router-link></p>
            </div>
        </div>

    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home'
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80vw;
    padding: 16px;
    color: white;
}

.container-image {
    width: 500px;
}

.container-form {
    width: 450px;
}

.container-form-title {
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin-bottom: 30px;
    cursor: context-menu;
}

.container-form-title::after {
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

.container-form-title:hover::after {
    width: 75px;
}

.container-form-text {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 15px;
    margin-top: 15px;
}

.container-form-text-link {
    text-decoration: none;
    color: rgb(73, 73, 214);
    transition: color .3s ease-in-out;
}

.container-form-text-link:hover {
    color: rgb(100, 100, 230);
}

@media (max-width: 1400px) {
    .container {
        justify-content: space-between;
    }

    .container-image {
        width: 400px;
    }
}

@media (max-width: 1148px) {
    .container {
        flex-direction: column;
        height: 85vh;
    }
}

@media (max-width: 720px) {
    .container-image {
        width: 350px;
    }

    .container-form {
        width: 300px;
    }
}
</style>