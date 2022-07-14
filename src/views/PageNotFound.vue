<template>
    <div class="content">

        <img src="@/assets/not-found-image.svg" alt="Imagem ilustrativa de página não encontrada">

        <div class="content-text">
            <h2>Página não encontrada</h2>
            <p>Que tal voltar para a <router-link class="content-text-link" to="/">Home</router-link>?</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageNotFound'
});
</script>

<style scoped>
.content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content img {
    width: 500px;
}

.content-text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: white;
    text-align: center;
}

.content-text h2 {
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
}

.content-text p {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

.content-text .content-text-link {
    text-decoration: none;
    color: rgb(73, 73, 214);
    transition: color .3s ease-in-out;
}

.content-text .content-text-link:hover {
    color: rgb(100, 100, 230);
}
</style>