import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getPrediction } from '../utils/api';
import { TextField, Button, Box, Typography } from '@mui/material';

const PredictionForm = () => {
  const [feature1, setFeature1] = useState('');
  const [feature2, setFeature2] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feature1 || !feature2) {
      alert('Please enter valid values for both features.');
      return;
    }

    const features = [parseFloat(feature1), parseFloat(feature2)];
    const result = await getPrediction(features);
    setPrediction(result?.demand_prediction);
  };

  return (
    <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Predict Product Demand
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <Box sx={{ marginBottom: '1rem' }}>
          <TextField
            label="Feature 1"
            type="number"
            value={feature1}
            onChange={(e) => setFeature1(e.target.value)}
            required
            sx={{ marginRight: '10px' }}
          />
          <TextField
            label="Feature 2"
            type="number"
            value={feature2}
            onChange={(e) => setFeature2(e.target.value)}
            required
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Predict
        </Button>
      </form>

      {prediction !== null && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '20px' }}
        >
          <Typography variant="h5" gutterBottom>
            Prediction Result:
          </Typography>
          <Typography variant="h6">
            {prediction === 1 ? 'High Demand' : 'Low Demand'}
          </Typography>
        </motion.div>
      )}
    </Box>
  );
};

export default PredictionForm;
