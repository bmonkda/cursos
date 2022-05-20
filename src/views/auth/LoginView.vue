<template>

    <div class="container">
        <h1>Login</h1>
        <div class="card mx-auto">
            <div class="card-body">
                <form v-on:submit.prevent="login">
                    <div class="mb-3">
                        <label for="email" class="mb-1">Email</label>
                        <input type="email" v-model="email" class="form-control" placeholder="Ingrese su email">
                    </div>

                    <div class="mb-3">
                        <label for="password" class="mb-1">Password</label>
                        <input type="password" v-model="password" class="form-control" placeholder="Ingrese su password">
                    </div>

                    <button class="btn btn-primary">Iniciar sesión</button>

                </form>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },

        methods: {
            login() {
                console.log('iniciando sesión');
            }
        },
        
    }
</script>

<style scoped>
    .card{
        max-width: 32rem;
    }
</style>