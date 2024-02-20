import { useEffect, useState } from "react";
import Quotes from "./components/Quotes";
import axios from "axios";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const getRandomQuote = async () => {
      const response = await axios.get("https://api.quotable.io/quotes/random");
      console.log(response.data);
      setQuotes(response.data);
    };
    getRandomQuote();
  }, []);
  return (
    <div
      className="App
      r "
    >
      <div className="min-h-screen flex items-center justify-center">
        {quotes &&
          quotes.map((quote) => <Quotes key={quote._id} quote={quote} />)}
      </div>
    </div>
  );
}

export default App;
