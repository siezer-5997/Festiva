import React, { useState } from 'react';
// import '../styles/predictionForm.css';

const PredictionForm = () => {
  const [feature1, setFeature1] = useState('');
  const [feature2, setFeature2] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ features: [feature1, feature2] }),
    });
    const data = await response.json();
    setPrediction(data.demand_prediction);
  };

  return (
    <div className="prediction-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Feature 1"
          value={feature1}
          onChange={(e) => setFeature1(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Feature 2"
          value={feature2}
          onChange={(e) => setFeature2(e.target.value)}
          required
        />
        <button type="submit">Predict</button>
      </form>
      {prediction !== null && <p>Predicted Demand: {prediction}</p>}
    </div>
  );
};

export default PredictionForm;
