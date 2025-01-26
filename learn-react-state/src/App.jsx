import { useState } from 'react'

const App = () => {

  const [robuxperclick, setRobuxperclick] = useState(1)

  const [upgradeCost, setUpgradeCost] = useState(5)

  const [count, setCount] = useState(0)

  const [count2, setCount2] = useState(0)




  const handleClick = () => {
    setCount(count + robuxperclick)
  }

  const handleClick2 = () => {
    if (count >= 100) {
      setCount(count - 100)
      setCount2(count2 + 1)
    }
  }

  const handleUpgrade1 = () => {
    if (count2 >= upgradeCost) {
      setCount2(count2 - upgradeCost)
      setRobuxperclick(robuxperclick * 2)
      setUpgradeCost(upgradeCost * 2)
    }
  }



  return (
    <div className='container'>
      <h1> Alpha Clicker </h1>

      <h2> Robux count: {count}</h2>

      <h2> Sigma count: {count2}</h2>

      <img src='https://th.bing.com/th/id/R.b80339ddf867ccfe6ab23a2c263d8000?rik=DnS0qZebQ5DP3A&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2froblox%2fimages%2f0%2f06%2fROBUX.png%2frevision%2flatest%3fcb%3d20160613050926&ehk=cGPVNopGsX2hSczi3AsdDFve8C1lr1WSa4lgnpsWWdk%3d&risl=&pid=ImgRaw&r=0'
        alt='robux' width={"200px"} onClick={handleClick}/>

      <img src='https://wallpaperaccess.com/full/6999296.jpg'
        alt='sigma' width={"170px"} onClick={handleClick2}/>

      <button onClick={handleUpgrade1}> Upgrade Cost: {upgradeCost} sigma</button>

    </div>
  )
}

export default App