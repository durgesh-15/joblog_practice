<template>
<div class="form-bg">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mt-4">
                <div class="form-container">
                    <h3 class="title">Registration</h3>
                    <div class="form-horizontal">
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-user"></i></span>
                            
                            <input type="text" name="name" class="form-control" placeholder="Name" v-model="name" required>
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-user"></i></span>
                            <input type="email" name="email" class="form-control" placeholder="Email" v-model="email" required>
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-user"></i></span>
                            <input type="password" name="password" class="form-control" placeholder="Password" v-model="password" required>
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-lock"></i></span>
                            <input type="password" name="confirmpassword" class="form-control" placeholder="ConfirmPassword" v-model="confirmpassword" required>
                        </div>
                        <div>
                         You have already registered?
                            <router-link to="/login" class="form_link">
                                Login
                            </router-link>
                        </div>
                        <button class="btn bg-primary btn-sm mt-2" @click="register">Submit</button>
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
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
        }
    },
    methods: {
        register: function () {
            axios.post('/api/register',{
                'name': this.name,
                'email': this.email,
                'password': this.password,
                'confirmpassword': this.confirmpassword
            });
            
            // this.$router.push('/register')

            // axios.post('/api/register', this.user)
            //     .then(res => this.user.push(this.user))
            //     .catch(err => console.dir(err.response))
        }
    }
}
</script>
