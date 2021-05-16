<template>
    <div class="container">
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

        <div class="form-wrapper">

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
        margin: 17px auto;
        height: 1100px;
        background-color: white;
        box-shadow: 0 0  2px  #d8d7d7;
        width: 714px;
    }
</style>