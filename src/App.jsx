import { useState, useEffect } from 'react'
import './App.css'
import { fetchImages } from './api'
import Board from './components/Board'

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const images = await fetchImages();
      setCards(images);
    }
    getCards();
  }, []);

  return (
    <div className="App p-3">
      <Board cards={cards} setCards={setCards} />
    </div>
  )
}

export default App
