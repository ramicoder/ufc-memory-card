
export default function Header( {score, bestScore} ) {


    return (

        <header className="header">
            <p>
                Click each card once to keep scoring!
            </p>
            <div className="scores">
                <p>Score: {score}</p>
                <p>Best score: {bestScore}</p>
            </div>
        </header>
    )
}