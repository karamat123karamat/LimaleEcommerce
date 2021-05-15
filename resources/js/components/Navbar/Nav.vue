<template>
        <div class="navbar">
            <div class='head__top'>
                <div class=head__left>
                    <!-- <img class="head__left--image" src="https://img.icons8.com/android/24/000000/plus.png"/>
                    <img class="head__left--image" src="https://img.icons8.com/ios-filled/26/000000/marker.png"/> -->
                </div>
                <ul class='head__right'>
                    <li class="link">Aide</li>
                    <li class="link">Inscrivez-vous</li>
                    <li class="link">Se connecter</li>
                </ul>
            </div>
            <div class="head__center">
                <div class="logo__wrapper">
                    <span class='text__logo'>WI</span><span class="text__logo">SHOP</span>
                </div>
                <ul class="head__center--links">
                <li class=link>Nouveautés</li>  
                <li class=link>Homme</li>  
                <li class=link>Femme</li>  
                <li class=link>Enfant</li>  
                <li class=link>Personalisé</li>  
                <li class=link>Vendre</li>  
                </ul>
                <div class="head__center--right">
                    <div class="form__group">
                        <img class="search__icon" src="https://img.icons8.com/ios/26/000000/search--v1.png"/>
                        <input class="search__input" type="text" placeholder="Recherche">
                    </div>
                    <div class='head__center--actions'>
                        <img class="actions__icon" src="https://img.icons8.com/metro/26/000000/like.png"/>
                        <img class="actions__icon--bag" src="/images/bag-cart.png"/>
                    </div>
                </div>
            </div>
            <div class="head__bottom">
                <div class="info">
                    <h1 class='info__title'>Livraison gratuite & Retours gratuits sous 60 jours</h1>
                    <a class='info__link' href="">Inscrivez-vous.</a>
                </div>
            </div>
        </div>
</template>

<script>
export default {

    data(){
        return{

        }
    },

    methods:{
        
    }
}
</script>


<style scoped>
    .container{
        min-height: 100vh;
    }
    .navbar{
        height: 9.6rem;
        width: 100%;
        position: relative !important;
    }

    .head__top{
        height: 3.6rem;
        background-color: #F5F5F5;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4.5rem;
    }

    .head__left{
        height: 100%;
        display: flex;
        align-items: center;
        width: 7.2rem;
        justify-content:space-between
    }

    .head__left .head__left--image{
        height: 2.2rem;
        width:  2.2rem;
    }

    .head__right{
        height: 100%;
        display: flex;
        align-items: center;
        width: 7.2rem;
        justify-content:space-between;
        width: 22.5rem;
    }
    .head__right .link{
        position: relative;
        list-style: none;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .head__right .link::before{
        content: "";
        position: absolute;
        right: -1.2rem;
        top: 0;
        bottom: 0;
        width: .1rem;
        background-color: #000;
    }
    .head__right .link:last-child::before{
        content: none;
    }

    .head__center{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4.5rem;
        height: 6rem ;
    }

    .logo__wrapper .text__logo{
        font-size: 2.3rem;
        font-weight: 700;
        letter-spacing: .1rem;
        height: 100%;
    }
    .logo__wrapper .text__color--green{
        color: green
    }

    .head__center--links{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 53rem;
        height: 100%;
        margin-right: -9rem !important;
    }

    .head__center--links .link{
        font-size: 1.6rem;
        list-style: none;
        font-weight: 700
    }

    .head__center--right{
        width: 28rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%
    }

    .head__center--right .form__group{
        background-color: #F5F5F5;
        width: 18rem;
        height: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        border-radius: 2rem;
    }

    .form__group .search__icon{
        height: 2.1rem;
        width: 2.1rem;
        margin-right: 1.3rem
    }

    .form__group .search__input{
        flex: 1;
        width: 10rem;
        border: none;
        outline: none;
        background-color:#F5F5F5
    }

    .head__center--actions{
        display: flex;
        justify-content:space-between;
        align-items: center;
        width: 7.5rem;
    }

    .actions__icon{
        height: 2.6rem;
        width: 2.6rem
    }
    .actions__icon--bag{
        height: 3.7rem;
        width: 3.8rem
    }

    .head__bottom{
        position: relative !important;
        height: 5.8rem;
        background-color: #F5F5F5;
        display: flex;;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #E5E5E5;
    }


    .head__bottom .info{
        position: relative !important;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        text-align: center;
    }
    .info__title{
        font-size: 1.4rem
    }

    .info__link{
        font-size: 1.2rem;
        color: #000;
    }
</style>