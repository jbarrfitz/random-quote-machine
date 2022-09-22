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

  return (
    <div className='App'>
      <div id='quote-box'>
        <p id='text'>
          <i className='fa fa-quote-left'></i> {quoteData.quoteText}{' '}
          <i className='fa fa-quote-right'></i>
        </p>
        <p id='author'>{quoteData.author}</p>
        <button id='new-quote' onClick={getQuote}>
          New Quote
        </button>
        <a
          href={
            'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
            quoteData.quoteText +
            ' - ' +
            quoteData.author
          }
          target='_blank'
          rel='noreferrer'
          id='tweet-quote'
        >
          Tweet
        </a>
      </div>
    </div>
  );
}

export default App;
