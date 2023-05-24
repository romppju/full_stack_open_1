import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  
  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks.concat(1))  
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat(0))  
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allClicks.concat(-1)) 
  }
  
  
  return (
    <div>
      <Header text="give feedback" />
      <div>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>   
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

const Statistics = ({good, neutral, bad, allClicks}) => {
  if (allClicks.length === 0) {
    return <div>No feedback given</div>
  }
  
  return (
    <table>
      <tbody>
        <Statisticline text="good" value={good} />
        <Statisticline text="neutral" value={neutral} />
        <Statisticline text="bad" value={bad} />
        <Statisticline text="all" value={allClicks.length} />
        <Statisticline text="average"
          value={allClicks.reduce((a, b) => a + b, 0)/allClicks.length} />
        <Statisticline text="positive"
          value={good/(allClicks.length)*100 + " %"} />
      </tbody> 
    </table>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}


const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}


const Statisticline = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App