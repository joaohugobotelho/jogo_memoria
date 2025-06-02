document.addEventListener('DOMContentLoaded', () => {

    // carregamento dos cards
    const cardArray = [
        {
            name: 'ganhou',
            img: 'images/ganhou.png'
        },

         {
            name: 'ganhou',
            img: 'images/ganhou.png'
        },
        {
            name: 'direita',
            img: 'images/direita.png'
        },
        {
            name: 'direita',
            img: 'images/direita.png'
        },
        {
            name: 'esqueda',
            img: 'images/esquerda.png'
        },
        {
            name: 'esqueda',
            img: 'images/esquerda.png'
        },
        {
            name: 'tras',
            img: 'images/tras.png'
        },
        {
            name: 'tras',
            img: 'images/tras.png'
        },
        {
            name: 'pulo',
            img: 'images/pulo.png'
        },
        {
            name:'pulo',
            img: 'images/pulo.png'
        },
        {
            name:'correndo',
            img:'images/correndo.png'
        },
        {
            name:'correndo',
            img:'images/correndo.png'
        }

    ]

    cardArray.sort(() => 0.5 - Math.random())

    
    const grid = document.querySelector('.grid')

    const rwsultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var pares = []

    // criando a tela

    function createBoard() {
        for(let i=0; i < cardArray.length;i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/card.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    } 


    // conferindo pares

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        // clicar duas vezes no mesmo card
        if(optionOneId == optionTwoId){
             
        }
    }


    // virando cards

   function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length == 2) {
        setTimeout(checkForMatch, 500)
    }
   }

    createBoard();
})