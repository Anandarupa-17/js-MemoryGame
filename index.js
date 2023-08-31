const cards = document.querySelectorAll(".card");
var clickCount = 0;
var firstCard = "";
var secondCard = "";
let match=0;
clicking(0);
function clicking(clickCount){
    $(".card").click(function(){
        clickCount++;
        if(clickCount < 3){
            if(clickCount == 1){
                firstCard = this;
                $(this).addClass("flip");
            }
            else{
                secondCard = this;
                $(this).addClass("flip");
                cardMatch(firstCard, secondCard);
                
            }
            
        }
    });
}
function cardMatch(card1, card2){
    let cardOneImg = card1.querySelector(".back-view img").src;
    let cardTwoImg = card2.querySelector(".back-view img").src;
    if(cardOneImg !== cardTwoImg){
        
        setTimeout(function(){
            $("#"+card1.id).addClass("shake");
            $("#"+card2.id).addClass("shake");
            clicking(0);
        }, 400);
        setTimeout(function(){
            $("#"+card1.id).removeClass('flip shake');
            $("#"+card2.id).removeClass('flip shake');
            
        }, 700);
    }
    else{
        match++;
        if(match == 8)
        {
            setTimeout(function(){
                shuffleCards();
            }, 400);
        }
        clicking(0);
    }
    
}
function shuffleCards() {
    match=0;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let datas= card.querySelector("data-crystal");
        datas = arr[i];
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `./dog${arr[i]}.png`;
        card.addEventListener("click", clicking);
    });
}

shuffleCards();

