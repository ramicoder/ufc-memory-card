import {useEffect, useState} from 'react'
import './App.css'
import Header from './components/header.jsx';
import Cards from './components/cards.jsx';




function App() {

    let [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let gif = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=xq" +
                    "B4VhENB4V5LY2po0h18K1KANTvyU5N&s=Islam makhachev double champ");
                let result = await gif.json();
                let islam = result.data.images.original.url;

                gif = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=xq" +
                    "B4VhENB4V5LY2po0h18K1KANTvyU5N&s=conor mcgregor walk");
                result = await gif.json();
                let conor = result.data.images.original.url;

                gif = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=xq" +
                    "B4VhENB4V5LY2po0h18K1KANTvyU5N&s=khabib ufc 229");
                result = await gif.json();
                let khabib = result.data.images.original.url;

                gif = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=xq" +
                    "B4VhENB4V5LY2po0h18K1KANTvyU5N&s=alex pereira look");
                result = await gif.json();
                let alex = result.data.images.original.url;

                gif = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=xq" +
                    "B4VhENB4V5LY2po0h18K1KANTvyU5N&s=joe rogan reaction");
                result = await gif.json();
                let rogan = result.data.images.original.url;

                gif = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=xq" +
                    "B4VhENB4V5LY2po0h18K1KANTvyU5N&s=bruce buffer");
                result = await gif.json();
                let bruce = result.data.images.original.url;

                gif = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=xq" +
                    "B4VhENB4V5LY2po0h18K1KANTvyU5N&s=jon jones crawl");
                result = await gif.json();
                let jones = result.data.images.original.url;

                gif = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=xq" +
                    "B4VhENB4V5LY2po0h18K1KANTvyU5N&s=merab dance");
                result = await gif.json();
                let merab = result.data.images.original.url;

                gif = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=xq" +
                    "B4VhENB4V5LY2po0h18K1KANTvyU5N&s=gsp");
                result = await gif.json();
                let gsp = result.data.images.original.url;

                gif = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=xq" +
                    "B4VhENB4V5LY2po0h18K1KANTvyU5N&s=charles oliveira win");
                result = await gif.json();
                let charles = result.data.images.original.url;

                let fetchedLinks = [islam, conor, khabib, alex, rogan, bruce, jones, merab, gsp, charles];
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
                ]);

            } catch (e) {
                console.log(e.message)
            }
        })()
    }, [])

   let [score, setScore] = useState(0);
   let [bestScore, setBestScore] = useState(0);


  return (
      <>
        <Header score={score} bestScore={bestScore}></Header>
        <div>
          <Cards></Cards>
        </div>
      </>
  )
}

export default App
