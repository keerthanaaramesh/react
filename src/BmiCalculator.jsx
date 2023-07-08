import React, {useState} from 'react'

function App() {
 
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
 
  let calcBmi = (event) => {
    event.preventDefault()
 
    if (weight === "" || height === "") {
      alert('Please enter a valid weight and height')
    } else {
      const heightInMeters = height / 100;
     const bmi = weight / (heightInMeters * heightInMeters);
      
      setBmi(bmi.toFixed(1))
 
    
    
      if (bmi < 18.5) {
        setMessage('You are underweight')
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage('You are normal')
      } else {
        setMessage('You are overweight')
      }
      
    }
  }
 
 
  let reload = () => {
    window.location.reload()
  }
 
  return (
    <div className="app">
      
    <div className='container'>
      <h2 className='center'>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
 
        <div>
          <label>Weight</label>
          <input className="weight"value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
 
        <div>
          <label>Height</label>
          <input className="height"value={height} onChange={(event) => setHeight(event.target.value)} />
        </div>
 
        <div>
          <button className='btn-1' type='submit'>Submit</button>
          <button className='btn-2' onClick={reload} type='submit'>Reset</button>
        </div>
      </form>
 
      <div className='center'>
        <h3>Your BMI is:{bmi}</h3>
        
      </div>
      <div className='message'>
      <p>{message}</p>
      </div>
    </div>
  </div>
  );
}
 
export default App;