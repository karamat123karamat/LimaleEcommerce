<template>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo-wrapper">
                <h1 class="logo">Wishop</h1>
            </div>

            <ul class="center">
                <li>
                    <img src="https://img.icons8.com/android/48/000000/checkmark.png"/>
                    <span>Panier</span>
                </li>
                <li>
                    livraison
                </li>
                <li>
                    Paiement
                </li>
            </ul>
        </div>

        <!-- Form wrapper -->
        <div class="form-wrapper">
            <div class="form-top">
                <h1>Informations personnelles</h1>
                <p>Saisissez votre adress pour accéder à tous les services de livraison disponibles.</p>
                <div class="sex">
                    <div>
                       <label for="" class="custom-radio-btn">
                           <input type="radio" name="sex">
                           <span class="checkmark"></span>
                       </label>
                        <span>Mme</span>
                    </div>
                    <div>
                        <label for="" class="custom-radio-btn">
                            <input type="radio" name="sex" checked>
                            <span class="checkmark"></span>
                        </label>
                        <span>M.</span>
                    </div>
                </div>
            </div>

            <div class="form-bottom">
                <div>
                    <label class="label" for="">Prénom</label>
                    <input type="text">
                </div>
                <div>
                    <label class="label" for="">Nom</label>
                    <input type="text">
                </div>
                <div>
                    <label class="label" for="">Ville</label>
                    <input type="text">
                </div>
                <div>
                    <label class="label" for="">Adresse (numéro et nom de la rue)</label>
                    <input type="text">
                </div>
                <div>
                    <label class="label" for="">Etage, appartement...</label>
                    <input type="text">
                </div>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    
}
</script>

<style scoped>
    .container{
        background-color: #F8F8F8;
        min-height: 120vh;
    }

    .header{
        position: relative;
        height: 73px;
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center
    }


    .header .logo-wrapper{
        /* background-color: red; */
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .logo-wrapper h1{
        font-size: 3rem;
        color:#3C3C3B
    }

    .header .center{
        padding: 0 40px;
        position: relative;
        /* background-color: yellow; */
        margin-right: auto;
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }


    .center li{
        position: relative;
        height: 30px;
        width: 117px;
        border-radius: 99999px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem
    }

    .center li:first-child{
        position: relative;
        border: 1px solid #3C3C3B;
    }

    .center li:first-child::before{
        content: "";
        position: absolute;
        left: 100%;
        width: 100px;
        height: 1px;
        background-color: #3C3C3B
    }

    .center li:nth-child(2)::before{
        content: "";
        position: absolute;
        left: 100%;
        width: 100px;
        height: 1px;
        background-color: #E8E8E8
    }

    .center li:first-child img{
        height: 9px;
        width: 9px;
        margin-right: 5px;
        object-fit: cover;
    }

    .center li:nth-child(2){
        background-color: #3C3C3B;
        color: white
    }

    .center li:last-child{
        background-color: #E8E8E8;
        color: #9C9C9C
    }


    /* For Wrapper */
    .container .form-wrapper{
        padding: 60px 100px;
        margin: 17px auto;
        height: 800px;
        background-color: white;
        box-shadow: 0 0  2px  #d8d7d7;
        width: 714px;
    }

    .form-wrapper .form-top{
        height: 115px;
        /* background-color: red; */
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        align-items: center;
    }
    .form-top h1{
        font-size: 2.4rem
    }

    .form-top p{
        font-size: 1.3rem;
        font-weight: 100
    }

    .form-top .sex{
        display: flex;
        align-items: center
    }

    .sex div{
        display: flex;
        align-items: center;
        margin-right: 8px;
    }

    .sex div span{
        margin-left: 3px;
        font-size: 1.3rem;
        font-weight: 100
    }

    .form-top .sex div .custom-radio-btn{
        position: relative;
        height: 17px;
        width: 17px;
        border: 1px solid #444;
        border-radius: 50%;
        transition: .3s
    }

    .custom-radio-btn .checkmark{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        width: calc(100% - 7px);
        height: calc(100% - 7px);
        background-color: #222;
        display: none;
        border-radius: 50%;
    }

    .custom-radio-btn input{
        position: relative;
        height: 100%;
        width: 100%;
        outline: none;
        opacity:0
    } 

    .custom-radio-btn input:checked + .checkmark{
        display: inline-block;
    }

    /* Form bottom */
    .form-bottom{
        margin-top: 20px;
        /* background-color: red; */
        display: grid;
        grid-auto-columns: 1fr;
        grid-template-rows: repeat(5, 48px);
        row-gap: 17px;
    }

    .form-bottom div{
        position: relative;
        width: 389px;
        border: .5px solid #E8E8E8;
        border-radius: 2px;
        display: flex;
        flex-direction: column;
        padding: 0 15px 5px 15px;
        justify-content: flex-end;
    }

    .form-bottom div label{
        position: absolute;
        left: 15px;
        top:15px;
        z-index: 100;
        font-size: 1.4rem;
        color: #868E96
    }

    .form-bottom div input{
        position: relative;
        outline: none;
        border: none;
        font-size: 1.5rem;
        color: #3C3C3B
    }   
</style>