<template>
    <div class="container">

        <!-- Head -->
        <div class="head">
            <div class="wrapper-logo">
                <h1>WISHOP</h1>
            </div>
            <ul class="right-side">
                <li>Êtes-vous nouveau?</li>
                <li>
                    <button>Page d'accueil</button>
                </li>
            </ul>
        </div>

        <!-- Body -->
        <div class="body">
            <div class="center">
                <h1 class="title">Mot de passe oublié?</h1>
                <div class="inner-content">
                    <div class="or">
                        <span>Entrez votre e-mail ci-dessous pour recevoir vos instructions de réinitialisation de mot de passe.</span>
                    </div>

                    <div class="form">
                        <div class="form-group">
                            <label for="">Adresse email</label>
                            <input type="text">
                        </div>
                        <div class="form-group">
                            <button>Se connecter</button>
                        </div>
                        <div class="form-group">
                            <p>Vous vous souvenez-vous de votre mot de passe? <a href="">Essayer de vous connectez.</a></p>
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
        color:#3C3C3B
    }

    .head .right-side{
        height: 100%;
        width: 266px;
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
        width: 140px;
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
        margin-top: 40px;
        padding: 0 90px;
        width: 500px
    }

    .connect-with-socialnetwork{
        display: flex;
        height: 45px;
        justify-content: space-evenly;
        gap: 10px;
    }

    .connect-with-socialnetwork div{
        border: 1px solid rgb(226, 220, 220);
        border-radius: 5px;
        flex: 1;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        align-items: center;
    }

    .connect-with-socialnetwork div img{
        height: 28px;
        width: 28px;
    }

    .connect-with-socialnetwork div span{
        font-size: 1.7rem;
        font-weight: 900;
        letter-spacing: .05rem
    }

    .inner-content .or{
        background-color: red;
        position: relative;
        margin-top: 35px;
        height: 40px;
        display: flex;
        width: 100%
    }

    .or span{
        background-color: #F8F8F8;
        font-size: 1.4rem;
        font-weight: 100
    }

    /* Form */
    .inner-content .form{
        margin-top: 25px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 70px);
        row-gap: 15px;
    }

    .form .form-group{
        display: flex;
        flex-direction: column;
    }

    .form-group label{
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 8px
    }

    .form-group input{
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

    .form-group:last-child{
        /* background-color: red; */
        display: flex;
        align-items: flex-start;
        color: #3C3C3B
    }

    .form-group:last-child p{
        font-size: 1.4rem;
        text-align: center
    }

    .form-group:last-child p a{
        color: #3C3C3B
    }


     /* Footer */
    .container .footer{
        border-top: 1px solid #e6e5e5;
        /* background-color: red; */
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
        /* background-color: red; */
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