import "./styles/App.css"
import React, { useState } from 'react';

export default function About() {
  const initialFormData = {
    age: '',
    activityLevel: 'no_movement',
    height: '',
    weight: '',
  };
  
  const [formData, setFormData] = useState(initialFormData);
  const [showResult, setShowResult] = useState(false);
  const [bmi, setBMI] = useState('');
  const [calorieIntake, setCalorieIntake] = useState('');
  const [Protein, setProtein] = useState('');
  const [Fat, setFat] = useState('');
  const [Carbohydrate, setCarbohydrate] = useState('');
  const [calorieQuote, setCalorieQuote] = useState('');
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Calculate BMI and calorie intake here
    const weight = parseFloat(formData.weight);
    const height = parseFloat(formData.height) / 100;
    const bmiResult = (weight / (height * height)).toFixed(2);
    const activityLevel = formData.activityLevel;
    let calorieIntakeResult = '';
    let calorieQuoteResult = '';
  
    // Calculate calorie intake based on activity level
    if (bmiResult >= 28) {
      if (activityLevel === 'no_movement') {
        calorieIntakeResult = '1500 calories';
        calorieQuoteResult = 'Tip: Just a little bit walk :)';
      } else if (activityLevel === 'light_movement') {
        calorieIntakeResult = '1750 calories';
        calorieQuoteResult = 'Tip: Just a little bit quicker :)';
      } else if (activityLevel === 'normal') {
        calorieIntakeResult = '1800 calories';
        calorieQuoteResult = 'Tip: Just a little bit of exercising :)';
      } else if (activityLevel === 'daily_workout') {
        calorieIntakeResult = '2000 calories';
        calorieQuoteResult = 'Tip: Keep it up and eat healthy :)';
      } else if (activityLevel === 'extreme_workout') {
        calorieIntakeResult = '2200 calories';
        calorieQuoteResult = 'Tip: You are on fire, Just maintain :)';
      }
    } else if (bmiResult >= 24 && bmiResult < 28) {
      if (activityLevel === 'no_movement') {
        calorieIntakeResult = '1600 calories';
        calorieQuoteResult = 'Tip: Just a little bit walk :)';
      } else if (activityLevel === 'light_movement') {
        calorieIntakeResult = '1800 calories';
        calorieQuoteResult = 'Tip: Just a little bit quicker :)';
      } else if (activityLevel === 'normal') {
        calorieIntakeResult = '2000 calories';
        calorieQuoteResult = 'Tip: Just a little bit of exercising :)';
      } else if (activityLevel === 'daily_workout') {
        calorieIntakeResult = '2200 calories';
        calorieQuoteResult = 'Tip: Keep it up and eat healthy :)';
      } else if (activityLevel === 'extreme_workout') {
        calorieIntakeResult = '2500 calories';
        calorieQuoteResult = 'Tip: You are on fire, Just maintain :)';
      }
    } else if (bmiResult >= 19 && bmiResult < 24) {
      if (activityLevel === 'no_movement') {
        calorieIntakeResult = '1800 calories';
        calorieQuoteResult = 'Tip: Eat healthy, Sleep well and Maintain :)';
      } else if (activityLevel === 'light_movement') {
        calorieIntakeResult = '2000 calories';
        calorieQuoteResult = 'Tip: Eat healthy, Sleep well and Maintain :)';
      } else if (activityLevel === 'normal') {
        calorieIntakeResult = '2300 calories';
        calorieQuoteResult = 'Tip: Eat healthy, Sleep well and Maintain :)';
      } else if (activityLevel === 'daily_workout') {
        calorieIntakeResult = '2500 calories';
        calorieQuoteResult = 'Tip: Eat healthy, Sleep well and Maintain :)';
      } else if (activityLevel === 'extreme_workout') {
        calorieIntakeResult = '2700 calories';
        calorieQuoteResult = 'Tip: Eat healthy, Sleep well and Maintain :)';
      }
    } else if (bmiResult < 19) {
      if (activityLevel === 'no_movement') {
        calorieIntakeResult = '2000 calories';
        calorieQuoteResult = 'Tip: Just one more healthy bite :)';
      } else if (activityLevel === 'light_movement') {
        calorieIntakeResult = '2200 calories';
        calorieQuoteResult = 'Tip: Just one more healthy bite :)';
      } else if (activityLevel === 'normal') {
        calorieIntakeResult = '2350 calories';
        calorieQuoteResult = 'Tip: Just one more healthy bite :)';
      } else if (activityLevel === 'daily_workout') {
        calorieIntakeResult = '2500 calories';
        calorieQuoteResult = 'Tip: Just one more healthy bite :)';
      } else if (activityLevel === 'extreme_workout') {
        calorieIntakeResult = '2800 calories';
        calorieQuoteResult = 'Tip: Just one more healthy bite :)';
      }
    }
  
    const calorieIntakeValue = parseFloat(calorieIntakeResult);
    const ProteinResult = (calorieIntakeValue * 0.35 * 0.25).toFixed(0);
    const FatResult = (calorieIntakeValue * 0.034).toFixed(0);
    const CarbohydrateResult = (calorieIntakeValue * 0.35 * 0.25).toFixed(0);
  
    setBMI(bmiResult);
    setCalorieIntake(calorieIntakeResult);
    setProtein(ProteinResult);
    setFat(FatResult);
    setCarbohydrate(CarbohydrateResult);
    setCalorieQuote(calorieQuoteResult);
    setShowResult(true);
  };
  
  const handleReset = () => {
    setShowResult(false);
    setFormData(initialFormData);
  };
    return (
      <div className="report-div">
            <h1 style={{fontFamily: "cursive"}}>Calculate and Chill</h1>
            <p className="hero-text" style={{fontFamily: "monospace", fontSize: "large", fontWeight: "bolder"}}>It Takes Time, Just Trust The Process</p>
            {!showResult ? (
              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <label htmlFor="age" style={{fontFamily: "monospace", fontSize: "16px", fontWeight: "bolder"}}>Age:</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="activityLevel" style={{fontFamily: "monospace", fontSize: "16px", fontWeight: "bolder"}}>Activity Level:</label>
                  <select
                    id="activityLevel"
                    name="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleInputChange}
                    style={{fontFamily: "cursive"}}
                  >
                    <option value="no_movement">No Movement</option>
                    <option value="light_movement">Light Movement</option>
                    <option value="normal">Normal</option>
                    <option value="daily_workout">Daily Workout</option>
                    <option value="extreme_workout">Extreme Workout</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="height" style={{fontFamily: "monospace", fontSize: "16px", fontWeight: "bolder"}}>Height (cm):</label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="weight" style={{fontFamily: "monospace", fontSize: "16px", fontWeight: "bolder"}}>Weight (kg):</label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn-submit" style={{fontFamily: "serif"}}>
                  Submit
                </button>
              </form>
            ) : (
              <div className="result-div">
                <p style={{fontFamily: "cursive"}}>
                  <b>BMI</b>: {bmi}
                </p>

                <div className="result-card">
                  <p>
                    <b>Calorie Needed</b>
                  </p>
                  <p>
                    <b>Protein:</b> {Protein}g
                  </p>
                  <p>
                    <b>Fat:</b> {Fat}g
                  </p>
                  <p>
                    <b>Carbohydrate:</b> {Carbohydrate}g
                  </p>
                  <p>
                    <b>Total:</b> {calorieIntake}
                  </p>
                </div>

                <p>{calorieQuote}</p>
                <button onClick={handleReset} className="btn-close"  style={{fontFamily: "serif"}}>
                  Close
                </button>
                <h2 style={{fontFamily: "cursive"}}>Get Your Personalized Kit Today!</h2>
                <button disabled style={{ cursor: 'not-allowed' }}>
                  Subscribe
                </button>
              </div>
            )}
          </div>
    )
  }