import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quoteData, setQuoteData] = useState({
    quoteText: '',
    author: '',
  });

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuoteData({
          quoteText: data.content,
          author: data.author,
        });
        console.log(data);
      });
  };

  const getColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='App'>
      <h1>Random Quote Machine</h1>
      <div className='container' style={{ backgroundColor: getColor() }}>
        <div id='quote-box'>
          <p id='text'>
            <i className='fa fa-quote-left'></i> {quoteData.quoteText}{' '}
            <i className='fa fa-quote-right'></i>
          </p>
          <p id='author'>{quoteData.author}</p>
          <div className='actions'>
            <button id='new-quote' onClick={getQuote}>
              New Quote
            </button>
            <button
              id='tweet'
              onClick={() =>
                openInNewTab(
                  'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                    quoteData.quoteText +
                    ' - ' +
                    quoteData.author
                )
              }
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
