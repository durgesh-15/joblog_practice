<template>
 <div class="border-end bg-white" id="sidebar-wrapper">
    <div class="sidebar-heading border-bottom bg-light">Vuex Dashboard</div>
    <div class="list-group list-group-flush">
    <router-link to="/dashboard-home"><a class="list-group-item list-group-item-action list-group-item-light p-3" href="#">Dashboard</a></router-link>
    <router-link to="/test"><a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Test</a></router-link>    
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Home</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">User</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" @click="logout">Logout</a>
    </div>
</div>
</template>
<script>
export default {
    methods: {
        logout: function () {
            localStorage.removeItem('token');
            this.$router.push('/login')
                .then(res => {
                    this.text = "Logout Successfully";
                    this.snackbar = true;
                })
                .catch(err => console.log(err))
        }
    }
}
</script>