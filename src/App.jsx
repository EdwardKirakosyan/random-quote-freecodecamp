import React from "react"

export default function App() {
  const [quotesData, setQuotesData] = React.useState({})

  React.useEffect(() => {
    getQuoteFn()
  }, [])

  const getQuoteFn = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) =>
        setQuotesData({
          text: data.content,
          author: data.author,
        })
      )
  }
  return (
    <div className="main-div">
      <div id="quote-box" className="inner-div">
        <div className="text-div">
          <h2 id="text">{quotesData.text}</h2>
          <p id="author">{quotesData.author}</p>
        </div>
        <div className="buttons-div">
          <a
            href={
              "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              quotesData.text
            }
            target="_blank"
            id="tweet-quote"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.tumblr.com"
            target="_blank"
            className="tumblr-btn"
          >
            <i class="fa-brands fa-tumblr"></i>
          </a>
          <button id="new-quote" className="new-btn" onClick={getQuoteFn}>
            new quote
          </button>
        </div>
      </div>
    </div>
  )
}
