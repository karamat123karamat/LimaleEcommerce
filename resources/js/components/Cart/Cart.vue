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
            <div class="header-wrapper">
                <h1 class="title">Récapitulatif</h1>
            </div>
            
            <div class="summary">
                <div>
                    <span>Nombre d'article</span>
                    <span>3 articles</span>
                </div>
                <div>
                    <span>Total des articles</span>
                    <span>34567 FCFA</span>
                </div>
                <div>
                    <span>TOTAL<span>(TVA incluse)</span></span>
                    <span>34566 FCFA</span>
                </div>
                <div>
                    <button>Valider mon panier</button>
                </div>
            </div>

            <div class="payment-methods">
                <div class="top">
                    <img src="https://img.icons8.com/ios/16/000000/lock-2.png"/> <span>Paiement 100% sécurisé</span>
                </div>
                <div class="bottom">
                    <div class="box">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.lafricamobile.com%2Fwp-content%2Fuploads%2F2016%2F05%2FOMoney.png&f=1&nofb=1" alt="">
                    </div>
                    <div class="box">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjournalnt.com%2Fwp-content%2Fuploads%2F2020%2F01%2Ffree-money-678x381.jpg&f=1&nofb=1" alt="">
                    </div>
                    <div class="box">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsenegalndiaye.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fwave.jpg&f=1&nofb=1" alt="">
                    </div>
                    <div class="box">
                        <img src="https://img.icons8.com/ios/80/000000/receive-cash.png"/>
                    </div>
                </div>
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
        margin-top: 5.8rem;
        min-height: 120vh;
        padding: 46px 4.5rem;
        display: grid;
        column-gap: 60px;
        grid-template-columns: 1.8fr 1fr;
    }
    
    .container .left-section{
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
        border-bottom: 1px solid  #d8d7d7;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
    }

    .card .image-wrapper{
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


    /* Right Section */
    .container .right-section{
    }


    .right-section .header-wrapper{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: flex-start
    }

    /* Summary */
    .right-section .summary{
        padding: 20px;
        height: 274px;
        box-shadow: 0 0  4px  #d8d7d7;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1.5fr;
        align-items: center;
    }

    .summary div{
        border-bottom: 1px solid #d8d7d7;
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .summary div span{
        font-size: 1.4rem
    }

    .summary div:nth-child(3),
    .summary div:last-child{
        border: none
    }

    .summary div:nth-child(3) span{
        font-weight: 900;
        font-size: 1.6rem
    }

    .summary div:nth-child(3) span span{
        margin-left: 10px;
        font-weight: 100;
        font-size: 1.2rem
    }

    .summary button{
        outline: none;
        border: none;
        width: 100%;
        height: 52px;
        background-color: black;
        color: white;
        font-size: 1.6rem;
        transition: background-color .2s
    }

    .summary button:hover{
        background-color: white;
        cursor: pointer;
        border: 1px solid black;
        color: black
    }

    .right-section .payment-methods{
        padding: 15px 20px;
        margin-top: 23px;
        height: 120px;
        box-shadow: 0 0  4px  #d8d7d7;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .payment-methods .top{
        display: flex;
        justify-content: center;
        align-items: center
    }

    .payment-methods .top img{
        margin-right: 5px;
    }
    .payment-methods .top span{
        font-size: 1.3rem;
        font-weight: 100;
    }
    .payment-methods .bottom{
        display: flex;
        justify-content: flex-start;
    }

    .bottom div{
        height: 39px;
        width:  57px;
        overflow: hidden;
        border: 1px solid #d8d7d7;
        margin-right: 8px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .bottom div img{
        height: 40px;
        width: 40px;
        object-fit: contain
    }
    .bottom div:nth-child(2) img{
        height: 50px;
        width: 50px;
    }

</style>