import '../styles/cards.css'
import Card from "./card.jsx";

function shuffleArray(array) {
    let cardList = [...array];
    //got this online
    cardList.sort(() => 0.5 - Math.random());
    return cardList;
}

export default function Cards ({ cards, score, setScore, clicked, setClicked, bestScore, setBestScore }) {

    let cardList = shuffleArray(cards);
    const cardComponents = cardList.map(card => (
        <Card link={card.url} key={card.id} id={card.id}
           score={score} setScore={setScore} bestScore={bestScore}
            setBestScore={setBestScore} clicked={clicked} setClicked={setClicked} />
    ));
    return (
        <div className='cards'>
            {cardComponents}
        </div>
    )
}