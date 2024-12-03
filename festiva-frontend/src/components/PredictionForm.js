import React, { useState } from 'react';
import { getPrediction } from '../utils/api';

const PredictionForm = () => {
  const [feature1, setFeature1] = useState('');
  const [feature2, setFeature2] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const features = [parseFloat(feature1), parseFloat(feature2)];
    try {
        const result = await getPrediction(features);
        if (result && 'demand_prediction' in result) {
            setPrediction(result.demand_prediction);
        } else {
            console.error('Invalid response:', result);
            setPrediction(null); // Clear prediction if response is invalid
        }
    } catch (error) {
        console.error('Error fetching prediction:', error);
        setPrediction(null); // Clear prediction on error
    }
};


  return (
    <div>
      <h2>Predict Product Demand</h2>
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
      {prediction !== null && (
        <div>
          <h3>Prediction Result:</h3>
          <p>{prediction === 1 ? 'High Demand' : 'Low Demand'}</p>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
