<template>
    <div class="container">
        <!-- <Nav/> -->
        <router-view></router-view>
        <!-- <Footer/> -->
    </div>
</template>

<script>

import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer'
export default {
    components:{
        Nav,
        Footer
    }, 

    mounted() {
        console.log('Component mounted.')
    }
}
</script>
