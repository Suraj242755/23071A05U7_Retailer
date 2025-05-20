import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, Paper } from '@mui/material';
import { toast } from 'react-toastify';

// Sample product data with images
const sampleProducts = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.'
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60',
    description: 'Advanced smartwatch with health monitoring and fitness tracking features.'
  },
  {
    id: 3,
    name: 'Professional DSLR Camera',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60',
    description: 'Professional-grade DSLR camera with 4K video recording capabilities.'
  },
  {
    id: 4,
    name: 'Ultra HD Smart TV 55"',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60',
    description: '55-inch 4K Ultra HD Smart TV with HDR and built-in streaming apps.'
  }
];

const Catalogue = () => {
  const [products] = useState(sampleProducts);

  const handleAddToCart = (product) => {
    // TODO: Implement add to cart functionality
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={0} sx={{ p: 3, mb: 4, backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center', color: '#1976d2' }}>
          Product Catalogue
        </Typography>
        <Grid 
          container 
          spacing={2} 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
            gap: 2
          }}
        >
          {products.map((product) => (
            <Grid item key={product.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <Box sx={{ position: 'relative', paddingTop: '75%' }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
                  <Typography gutterBottom variant="h6" component="div" sx={{ 
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    lineHeight: 1.2,
                    mb: 1
                  }}>
                    {product.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 2,
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      fontSize: '0.875rem'
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mt: 'auto',
                    pt: 2,
                    borderTop: '1px solid #eee'
                  }}>
                    <Typography variant="h6" color="primary" sx={{ 
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}>
                      ${product.price}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddToCart(product)}
                      sx={{
                        borderRadius: '20px',
                        textTransform: 'none',
                        px: 2,
                        py: 0.5,
                        fontSize: '0.875rem',
                        '&:hover': {
                          backgroundColor: '#1565c0'
                        }
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Catalogue; 