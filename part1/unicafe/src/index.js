import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = ({handleClick, text}) => {
    return <button onClick={handleClick}>{text}</button>
}

const Rate = ({handleGood, handleNeutral, handleBad, good, bad, neutral}) => {
    return (<>
    <Button text = "Good" handleClick={handleGood(good + 1)}/>
    <Button text = "Neutral" handleClick={handleNeutral(neutral + 1)}/>
    <Button text = "Bad" handleClick={handleBad(bad + 1)}/>
    </>)
}

const Stats = ({good,neutral,bad}) => {
    if(good === 0 && neutral === 0 && bad === 0) {
        return <p>No feedback given</p>
    } else {
    const average = () =>{ 
     return (good*1 + neutral*0 +bad*-1)/(good+neutral+bad)
    }

    const positivePercentage = () => {
     return (`${good/(good+neutral+bad)*100} %`)
    }
    
    return (<table><tbody>
    <tr><td>Good</td><td>{good}</td></tr>
    <tr><td>Neutral</td><td>{neutral}</td></tr>
    <tr><td>Bad</td><td>{bad}</td></tr>
    <tr><td>All</td><td>{good+neutral+bad}</td></tr>
    <tr><td>Average</td><td>{average()}</td></tr>
    <tr><td>Positive</td><td>{positivePercentage()}</td></tr>
    </tbody>
    </table>)
    }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = (value) => () => setGood(value)
  const handleNeutral = (value) => () => setNeutral(value)
  const handleBad = (value) => () => setBad(value)

  return (
    <>
      <h1>Give feedback</h1>
      <Rate handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad} good={good} neutral={neutral} bad={bad}/>
      <h2>Statistics</h2>
      <Stats good={good} neutral={neutral} bad={bad} />
    </>
  )
}


ReactDOM.render(<App/>, 
  document.getElementById('root')
)

