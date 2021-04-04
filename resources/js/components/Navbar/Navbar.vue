<template>
    <div class="container">
        <div class="navbar">
            <div class='head__top'>
                <div class=head__left>
                    <img class="head__left--image" src="https://img.icons8.com/ios/50/000000/air-jordan.png"/>
                    <img class="head__left--image" src="https://img.icons8.com/ios/40/000000/categorize.png"/>
                </div>
                <ul class='head__right'>
                    <li class="link">Aide</li>
                    <li class="link">Rejoignez-nous</li>
                    <li class="link">Se connecter</li>
                </ul>
            </div>
            <div class="head__center">
                <div class="logo__wrapper">
                    <span class='text__logo'>WI</span><span class="text__logo text__color--green">SHOP</span>
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
                        <img class="actions__icon" src="https://img.icons8.com/ios/50/000000/shopping-bag--v1.png"/>
                    </div>
                </div>
            </div>
            <div class="head__bottom">
                <div class="info">
                    <h1 class='info__title'>Livraison gratuite & Retours gratuits sous 60 jours</h1>
                    <a class='info__link' href="">S'inscrire</a>
                </div>
            </div>
        </div>
        <main class="main">
            <div class="image__wrapper">
                <img class="banner__image" src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_1168,c_limit/ac552d7e-97d0-4477-9552-ebba57afb8df/nike-just-do-it.jpg" alt=""/>
            </div>
            <div class="fig-caption">
                <div class="fig__caption--text">
                    <h1 class='fig__passion--text__title'>Bring The Future TO <br/>light</h1>
                    <p class='fig__passion--text__subtitle'>Air mAx is proud to empower the next generation of creators.</p>
                </div>
            </div>
            <div class="buttons__wrapper">
                <button class="button">Acheter</button>
                <button class="button">Explorer</button>
            </div>
        </main>
    </div>
    
</template>

<script>
export default {
    
}
</script>


<style scoped>
    .navbar{
        position: relative;
        height: 9.6rem;
        width: 100%;
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
        width: 7rem;
    }

    .actions__icon{
        height: 2.4rem;
        width: 2.4rem
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

    /* main */
    .main{
        /* background-color: blue; */
        height: 110.2rem;
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0 4.5rem;
    }
    .main .image__wrapper{
        /* background-color:red; */
        height: 80rem;
        width: 100%;
    }

    .main .image__wrapper .banner__image{
        height: 100%;
        width: 100%;
    }

    .fig-caption{
        /* background-color: yellow; */
        flex: 1;
        width: 80%;
        padding: 2rem 0;
        display: flex;
        flex-direction:column;
        align-items: center;
    }

    .fig-caption .fig__passion--text__title{
        font-size: 6rem;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: -.2rem;
    }

    .fig__passion--text__subtitle{
        text-align: center;
        font-size: 1.5rem;
    }

    .buttons__wrapper{
        margin-top: -6rem;
        /* background-color: red; */
        height: 6rem;
        width:22rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start
    }
    button{
        outline: none;
        border: none;
        padding:1rem 2.5rem;
        background-color: #000;
        color: #fff;
        border-radius: 99999px;
        font-size: 1.5rem;
    }
</style>