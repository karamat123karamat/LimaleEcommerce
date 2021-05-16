<template>
        <footer class="footer">
            <div class="footer__top">
                <div class="left">
                    <div class="link__wrapper">
                        <li>Gift Cards</li>
                        <li>Promotions</li>
                        <li>Find a Store</li>
                        <li>Sign up for email</li>
                        <li>Become</li>
                        <li>Send Us Feedback</li>
                    </div>
                    <div class="link__wrapper">
                        <h1>Get Help</h1>
                        <h1>Order Status</h1>
                        <h1>Shipping and Delivery</h1>
                        <h1>Returns</h1>
                        <h1>Payment options</h1>
                        <h1>Gift Card Balance</h1>
                        <h1>Contact Us</h1>
                    </div>
                    <div class="link__wrapper">
                        <h1>About Wishop</h1>
                        <h1>News</h1>
                        <h1>Carreers</h1>
                        <h1>Invertors</h1>
                        <h1>Purpose</h1>
                        <h1>Gift Card Balance</h1>
                    </div>
                </div>
                <div class="right">
                    <div>
                        <img src="https://img.icons8.com/android/24/000000/twitter.png"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/fluent-systems-regular/48/000000/instagram-new--v1.png"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/metro/24/000000/youtube.png"/>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/material-outlined/50/000000/instagram-new--v1.png"/>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <ul class="first-section">
                    <li>Guides</li>
                    <li>Condition d'utilisation</li>
                    <li>Condition Générales de vente</li>
                    <li>Mentions Légales</li>
                </ul>
                <div class="last-section">
                    <div class="left">
                        <h1>&copy; 2021 Wishop, Inc, Tous droits réservés</h1>
                    </div>
                    <ul class="right">
                      <li>Politique en matiére de confidentialité et de cookies</li>  
                      <li>Paramétres des cookies</li>  
                    </ul>
                </div>
            </div>
        </footer>
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
.footer{
        height: 39.1rem;
        background-color: #111111;
        padding:4rem 4rem 0 4rem;
        margin-bottom: 25px;
    }

    .footer .footer__top{
        position: relative;
        height: 21.7rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .footer .footer__top::before{
        position: absolute;
        content: "";
        bottom: -3rem;
        width:100%;
        height: .05rem;
        background-color: rgba(128, 128, 128, 0.452)
    }

    .footer__top .left{
        width: 50%;
        display: flex;
        justify-content:space-between;
    }
    .footer .left .link__wrapper{
        height: 100%;
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 8px
    }

    .footer .left .link__wrapper:nth-child(2),
    .footer .left .link__wrapper:nth-child(3){
        height: 80%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .footer .left .link__wrapper li{
        list-style: none;
        font-size: 1.5rem;
        color: white
    }

    .footer .left .link__wrapper h1:first-child{
        color: white
    }

    .footer .left .link__wrapper h1{
        color: #7E7E7E
    }

    .footer__top .right{
        width: 18%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
    }

    .footer__top .right div{
        height: 38px;
        width: 38px;
        background-color: #7E7E7E;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%
    }

    .footer__top .right img{
        height: 20px;
        width: 20px;
    }
    
    .footer .footer__bottom{
        margin-top: 5rem;
        position: relative;
        color: #7E7E7E;
        width: 100%
    }

    .footer__bottom .first-section{
        margin-left: auto;
        width: 40%;
        display: flex;
        justify-content: space-between;
        font-size: 1.2rem
    }

    .footer__bottom .first-section li{
        list-style: none;
    }

    .footer__bottom .last-section{
        margin-top: 25px;
        display: flex;
        justify-content: space-between
    }

    .last-section ul{
        display: flex;
        width: 38%;
        justify-content: space-between
    }

    .last-section ul li{
        list-style: none;
        font-size: 1.2rem
    }
</style>