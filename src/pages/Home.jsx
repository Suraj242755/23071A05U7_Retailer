import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Our Retail Store
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Discover amazing products at great prices
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/catalogue')}
          sx={{ mt: 2 }}
        >
          Shop Now
        </Button>
      </Box>
    </Container>
  );
};

export default Home; 