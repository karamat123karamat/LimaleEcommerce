<template>
    <div class="container">

        <!-- Head -->
        <div class="head"> 
            <div class="wrapper-logo">
                <h1>WISHOP</h1>
            </div>
            <ul class="right-side">
                <li>Vous avez déja un compte?</li>
                <li>
                    <button>Se connecter</button>
                </li>
            </ul>
        </div>

        <!-- Body -->
        <div class="body">
            <div class="center">
                <h1 class="title">S'inscrire</h1>
                <div class="inner-content">
                    <div class="form">
                        <div class="form-group">
                            <label for="">Prénom</label>
                            <input type="text" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label for="">Nom</label>
                            <input type="text" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label for="">Adresse email</label>
                            <input type="text" autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label for="">Mot de passe</label>
                            <div>
                                <input :type="show_password ? 'text' : 'password' " autocomplete="off" >
                                <img v-show="show_password" @click="showPassword" src="https://img.icons8.com/fluent-systems-regular/48/000000/visible.png"/>
                                <img v-show="!show_password" @click="showPassword"  src="https://img.icons8.com/material-outlined/24/000000/closed-eye.png"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <button>S'inscrire</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <span>&#169; 2021 Wishop, Inc. Tous droits réservés</span>
            <ul>
                <li>Conditions d'utilisation</li>
                <li>Condition générale de vente</li>
                <li>Guides</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show_password: false
        }
    },

    methods:{
        showPassword(){
            this.show_password = !this.show_password
        }
    }
}
</script>
<style scoped>
    .container{
        position: relative;
        padding: 0 80px;
        background-color: #F8F8F8;
        min-height: 100vh;
    }
    
    .container .head{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .head .wrapper-logo{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .wrapper-logo h1{
        font-size: 2.5rem;
        color:#3C3C3B;
    }

    .head .right-side{
        height: 100%;
        width: 290px;
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .right-side li{
        list-style: none;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .right-side li:first-child{
        font-size: 1.3rem;
        color: #3C3C3B
    }

    .right-side li:last-child button{
        outline: none;
        height: 34px;
        width: 120px;
        border: 1px solid #e3e3e4;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 0 2px #dbdbdb;
        color: #3C3C3B
    }

    /* Body */
    .container .body{
        widows: 100%;
        display: flex;
        padding-top: 50px;
        justify-content: center;
        height: calc(80vh);
    }

    .body .title{
        font-size: 2.3rem;
        color: #3C3C3B;
        letter-spacing: .10rem;
        text-align: center
    }

    .body .inner-content{
        margin-top: 20px;
        padding: 0 90px;
        width: 500px
    }

  
    /* Form */
    .inner-content .form{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 70px);
        row-gap: 15px;
    }

    .form .form-group{
        display: flex;
        position: relative;
        flex-direction: column;
    }

    .form .form-group:nth-child(4){
        /* background-color: red */
    }

    .form .form-group:nth-child(4) div{
        padding: 0 10px;
        border: 1px solid #cdcecf86;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white
    }


    .form .form-group:nth-child(4) input{
        background-color: white;
        height: 45px;
        border: none;
        outline: none;
        font-size: 1.7rem;
        color: #3C3C3B;
        width: 90%
    }

    .form .form-group:nth-child(4) img{
        height: 14px;
        width: 14px;
        right: 10px;
    }

    .form .form-group:nth-child(4) img:hover{
        cursor: pointer
    }

    .form-group label{
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 8px
    }

    .form-group input{
        background-color: white;
        height: 45px;
        border: none;
        border: 1px solid #cdcecf86;
        border-radius: 5px;
        outline: none;
        padding: 0 10px;
        font-size: 1.7rem;
        color: #3C3C3B
    }

    .form-group input:-webkit-autofill{
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }

    .form-group:last-child{
        display: flex;
        flex-direction: row;
        align-items: center
    }
    
    .form-group button{
        width: 100%;
        height: 45px;
        background-color: #3C3C3B;
        border: none;
        color: white;
        font-size: 1.5rem;
        border-radius: 5px;
        transition: background-color .2s
    }

    .form-group button:hover{
        cursor: pointer;
        border: 1px solid #3C3C3B;
        background-color: white;
        color: #3C3C3B
    }

    /* Footer */
    .container .footer{
        border-top: 1px solid #e6e5e5;
        height: 80px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        font-weight: 100;
        padding: 0 80px;
        display: flex;
        justify-content: space-between;
        align-items: center
 }

    .footer span{
        font-size: 1.2rem;
    }

    .footer ul{
        width: 360px;
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    .footer ul li{
        font-size: 1.2rem;
        list-style: none;
    }
</style>