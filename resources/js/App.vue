<template>
    <div class="container">
        <navbar/>
        <router-view></router-view>
    </div>
</template>

<script>

import Navbar from './components/Navbar/Navbar';
export default {
    components:{
        Navbar
    }, 

    mounted() {
        console.log('Component mounted.')
    }
}
</script>
