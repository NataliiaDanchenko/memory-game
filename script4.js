let objectCards = [
    {img: "./img/auto.jpg"},
    {img: "./img/desert.jpeg"},
    {img: "./img/castle.jpg"},
    {img: "./img/horse.jpg"},
    {img: "./img/landscape.jpg"},
    {img: "./img/mountains.jpg"},
    {img: "./img/night.jpg"},
    {img: "./img/sea.jpg"},
    {img: "./img/ship.jpg"},
    {img: "./img/tree.jpeg"}
];

objectCards = [...objectCards, ...objectCards];

let container = document.querySelector('.container_card');

let hasFlipped = false; // изначальное положение карты

let blockCard = false; // для блокировки переворачивания отыгравших карт
    
let firstCard, secondCard;

objectCards.sort(() => Math.random() - 0.5);

objectCards
	.forEach(c => {
		let card = document.createElement('div');
		card.classList.add('card_closed');
		container.append(card);

		card.addEventListener('click', flipCard);

        function flipCard () {
            if (blockCard) return; // не совсем поняла как это работает
            card.style.backgroundImage = `url(${c.img})`;
            if(!hasFlipped) { 
                hasFlipped = true;
                firstCard = card;
                return;
            }
            secondCard = card;
            hasFlipped = false;
            checkCards();  
         }

         function checkCards () {
            if (firstCard.style.backgroundImage === secondCard.style.backgroundImage && firstCard != secondCard) {
                cardRemoveEventListener();
                return;
                }
                unFlipCard();
            }

         function cardRemoveEventListener () {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);

            resetCards();
        }; 

        function resetCards () {
            [hasFlipped, blockCard] = [false, false]; // отыгравшие карты перевернуты и заблокированы
            [firstCard, secondCard] = [null, null]; // отыгравшие карты выведены из игры
            console.log(firstCard, secondCard)
        }

        function unFlipCard () {
            blockCard = true;
            setTimeout(() => {
                firstCard.style.backgroundImage = 'url(./img/background.jpg'; // работает без закрывающей скобки. Буду знать
                secondCard.style.backgroundImage = 'url(./img/background.jpg';
              
                resetCards();

            }, 1000);
        }
})

 