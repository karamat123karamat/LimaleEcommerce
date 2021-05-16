<template>
    <div class="container">
        <div class="left-section">
            <div class="header-wrapper">
                <h1 class="title">Mon panier</h1>
                <h1 class="number-articles">3 articles</h1>

            </div>
            <div class="card-wrapper">
                <div class="header-card-wrapper">
                    <h1 class="text">Vendu et expédié par</h1>
                    <h1 class="whishop-logo">Whishop</h1>
                </div>
                <div class="card-inner">
                    <div class="card">
                        <div class="image-wrapper">
                            <img src="https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_350/img/banquette-convertible-2-places-en-velours-vert-motifs-palmiers-1000-9-28-198263_1.jpg" alt="">
                        </div>

                        <div class="middle-section">
                            <h1 class="brand">Maisons du monde</h1>
                            <h3 class="name">Nio - Banquette convertible 2 places en velours vert motifs palmiers</h3>
                            <div class="references">
                                <span>Réf 456789</span>
                                <span>En stock</span>
                            </div>
                            <div class="delete">
                                <img src="https://img.icons8.com/carbon-copy/100/000000/filled-trash.png"/>
                                <span>Supprimer</span>
                            </div>
                        </div>

                        <div class="card-right-section">
                            <h1 class="price">15000 FCFA</h1>
                            <div class="amount">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="image-wrapper">
                            <img src="https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_350/img/banquette-convertible-2-places-en-velours-vert-motifs-palmiers-1000-9-28-198263_1.jpg" alt="">
                        </div>

                        <div class="middle-section">
                            <h1 class="brand">Maisons du monde</h1>
                            <h3 class="name">Nio - Banquette convertible 2 places en velours vert motifs palmiers</h3>
                            <div class="references">
                                <span>Réf 456789</span>
                                <span>En stock</span>
                            </div>
                            <div class="delete">
                                <img src="https://img.icons8.com/carbon-copy/100/000000/filled-trash.png"/>
                                <span>Supprimer</span>
                            </div>
                        </div>

                        <div class="card-right-section">
                            <h1 class="price">89000 FCFA</h1>
                            <div class="amount">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="right-section">

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
        margin-top: 5.8rem;
        min-height: 100vh;
        padding: 46px 4.5rem;
        display: grid;
        column-gap: 60px;
        grid-template-columns: 1.8fr 1fr;
    }
    
    .container .left-section{
        /* background-color: red */
    }

    .left-section .header-wrapper{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start
    }

    .header-wrapper .title{
        font-size: 1.9rem;
        letter-spacing: 0.08rem;
        margin-right: 7px
    }

    .header-wrapper .number-articles{
        font-size:1.5rem;
        font-weight: 100;
        margin-top: 4px
    }

    .left-section .card-wrapper{
        box-shadow: 0 0  4px  #d8d7d7;
        width: 100%
    }


    .card-wrapper .header-card-wrapper{
        padding: 20px;
        height: 55px;
        border-bottom: .1px solid #d8d7d7;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .card-wrapper .card-inner{
        padding: 30px;
    }

    .card-inner .card{
        height: 199px;
        /* background-color: blue; */
        border-bottom: 1px solid  #d8d7d7;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
    }

    .card .image-wrapper{
        /* background-color: yellow; */
        display: flex;
        justify-content: center;
        align-items: center
    }

    .card .image-wrapper img{
        height: 150px;
        width: 150px;
        object-fit: cover
    }

    .card .middle-section{
        /* background-color: red; */
        display: flex;
        flex-direction: column;
        padding: 0 10px
    }

    .middle-section .brand{
        text-transform: uppercase;
        margin-top: 55px;
    }

    .middle-section .name{
        font-size: 1.3rem;
        font-weight: 100;
        margin-top: 3px;
        max-height: 40px;
        overflow: hidden;
    }

    .middle-section .references{
        margin-top: 6px;
    }

    .references span{
        font-size: 1rem
    }

    .references span:first-child{
        margin-right: 9px
    }

    .references span:last-child{
        color: green
    }

    .middle-section .delete{
        margin-top: 30px;
        display: flex;
        align-items: center;
    }

    .delete img{
        height: 25px;
        width: 25px;
        margin-right: 5px;
    }

    .delete span{
        font-size: 1.1rem;
    }

    .card .card-right-section{
        /* background-color: orange; */
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    }

    .card-right-section .price{
         margin-top: 65px;
         text-align: end;
    }
    
    .card-right-section .amount{
        border: 1px solid #d8d7d7;
        margin-top: 67px;
        height: 35px;
        width: 90px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .amount span{
        font-size: 1.3rem;
        padding: 5px 8px
    }

    .amount span:hover{
        cursor: pointer;
    }

     .header-card-wrapper .text{
         font-weight: 100;
         margin-right: 6px;
     }

    .header-card-wrapper .whishop-logo{
        font-size: 1.5rem
    }

    .container .right-section{
        background-color: blue
    }
</style>