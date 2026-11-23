import '../styles/card.css'

export default function Card ( { id, link, score, setScore, clicked, setClicked, bestScore, setBestScore } ) {

function handleClick(e) {
    e.preventDefault();
    if (clicked.find(key => key === e.target.id)) {
        setScore(0);
        setClicked([]);
    } else {
        setClicked((clicked) => [...clicked, e.target.id]);
        setScore(score + 1);
        if (score + 1 > bestScore) setBestScore(score + 1);
    }
}
    return <div className='card' id={id}
                onClick={handleClick}
                style={{ backgroundImage: `url(${link})`,
                    backgroundSize: 'cover', backgroundPosition: 'center'}}
    >

    </div>
}