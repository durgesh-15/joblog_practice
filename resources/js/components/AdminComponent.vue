<template>
    <div class="sidebar">
    <a class="active" href="#home">Home</a>
    <router-link to="add-job-task">Add Job Task</router-link>
    <a href="#contact">Contact</a>
    <a href="#" @click="logout">Logout</a>
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
<style>
body {
  margin: 0;
  font-family: "Lato", sans-serif;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
 
.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}


</style>