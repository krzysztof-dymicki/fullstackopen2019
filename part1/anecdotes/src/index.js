import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const handleClick = () => {
      setSelected(Math.floor(Math.random()*anecdotes.length))
  }
  const voteClick = () => {
  let copy = [...points]
  copy[selected] ++
  setPoints(copy)
  }

  const theBestAnegdote = () => {
     return anecdotes[points.indexOf(Math.max(...points))]
  }


  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h2>{anecdotes[selected]}</h2>
      <p>This anecdote has {points[selected]} votes</p>
      <button style = {{display: "block"}} onClick={()=> handleClick()}>Next anecdote</button>
      <button onClick = {() => voteClick()}>Vote</button>
      <h1>Anecdote with most votes</h1>
      <h2>{theBestAnegdote()}</h2>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
