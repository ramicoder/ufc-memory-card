import {useEffect, useState} from 'react'
import Header from './components/header.jsx';
import Cards from './components/cards.jsx';
import "./styles/footer.css";



function App() {

    let [clicked, setClicked] = useState([]);

    let [cards, setCards] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        //This is for the cleanup function, to be able to cancel the api equests if the component unmounts before they finish

        (async () => {
            try {


                const queries = [
                    "Islam makhachev double champ",
                    "conor mcgregor walk",
                    "khabib ufc 229",
                    "joe rogan reaction",
                    "bruce buffer",
                    "jon jones crawl",
                    "merab dance",
                    "gsp",
                    "charles oliveira win",
                    "demetrious johnson win",
                    "daniel cormier",
                    "adesanya"
                ];
                const responses = await Promise.all(
                    queries.map(query =>
                        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=xqB4VhENB4V5LY2po0h18K1KANTvyU5N&s=${query}`, {
                            signal: controller.signal
                        })
                    )
                );

                const results = await Promise.all(
                    responses.map(response => response.json())
                );

                const fetchedLinks = results.map(result => result.data.images.original.url);

                setCards([
                    {
                        id: 0,
                        url: fetchedLinks[0]
                    },
                    {
                        id: 1,
                        url: fetchedLinks[1]
                    },
                    {
                        id: 2,
                        url: fetchedLinks[2]
                    },
                    {
                        id: 3,
                        url: fetchedLinks[3]
                    },
                    {
                        id: 4,
                        url: fetchedLinks[4]
                    },
                    {
                        id: 5,
                        url: fetchedLinks[5]
                    },
                    {
                        id: 6,
                        url: fetchedLinks[6]
                    },
                    {
                        id: 7,
                        url: fetchedLinks[7]
                    },
                    {
                        id: 8,
                        url: fetchedLinks[8]
                    },
                    {
                        id: 9,
                        url: fetchedLinks[9]
                    },
                    {
                        id: 10,
                        url: fetchedLinks[10]

                    },
                    {
                        id: 11,
                        url: fetchedLinks[11]
                    }
                ]);
            } catch (e) {
                //to handle any case where an error from the abort controller gets caught
                if (e.name !== "AbortError") {
                console.log(e.message)
                }
            }
        })()

        return () => controller.abort();
        //this is the cleanup :)
    }, [])



   let [score, setScore] = useState(0);
   let [bestScore, setBestScore] = useState(0);


  return (
      <div className="App">
          <header>
            <Header score={score} bestScore={bestScore}></Header>
          </header>
          <main>
            <Cards cards={cards} setCards={setCards} score={score} setScore={setScore} clicked={clicked}
            setClicked={setClicked} bestScore={bestScore} setBestScore={setBestScore}></Cards>
          </main>
          <footer>2026 Rami Daood &copy; All Rights Reserved</footer>
      </div>
  )
}

export default App
