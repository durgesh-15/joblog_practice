<template>
<div class="form-bg">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mt-4">
                <div class="form-container">
                    <h3 class="title">Login Form</h3>
                    <div class="form-horizontal">
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-user"></i></span>
                            <input type="email" name="email" class="form-control" placeholder="Email" v-model="email" required>
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-lock"></i></span>
                            <input type="password" name="password" class="form-control" placeholder="Password" v-model="password" required>
                        </div>
                        <div>
                            Don’t have an account?
                            <router-link to="/register" class="form_link">
                                Register
                            </router-link>
                        </div>
                        <button class="btn bg-primary mt-2 btn-sm text-light" @click="login">Login</button>
                    </div>
                </div>
            </div>
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
        login: function () {
            axios.post('/api/login', {
                    'email': this.email,
                    'password': this.password
                })
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                    // localStorage.setItem('loggedIn', true)
                    this.$router.push('/admin')
                        .then(res => console.log('login Suuccessfully'))
                        .catch(err => console.log(err))
                })
                .catch(err => {
                    this.text = err.response.data.status
                })
        }
    }
}
</script>

