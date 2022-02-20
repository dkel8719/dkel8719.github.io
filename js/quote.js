const quote = document.querySelector(".quote")
const author = document.querySelector(".author")

const quotes = [
  { quote : "When you have a dream, you've got to grab it and never let go.",
    author : "-Carol Burnett-"
  },
  { quote : "The future depends on what we do in the present.",
    author : "-Mohatma Gandhi-"
  },
  { quote : "the best why to predict the future is to invent it.",
    author : "-Alan Kay-"
  },
  { quote : "I can't go back to yesterday, because I was a different person then .",
    author : "-Lewus carroll-"
  },
  { quote : "Although the world is full of suffering, it is full also of the overcoming of it.",
    author : "-Helen Keller-"
  }
]

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;