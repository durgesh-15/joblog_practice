<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import SidebarComponent from '../components/SidebarComponent.vue';
export default {
  components: { SidebarComponent, HeaderComponent },  
}
</script>
<template>
    <div class="d-flex" id="wrapper">
      <!-- Sidebar-->
      <sidebar-component></sidebar-component>
      <!--Header -->
      <div id="page-content-wrapper">
        <header-component></header-component>
      <div>
        <!--Page Content-->
        <slot />
      </div>
      </div>
    </div>
</template>