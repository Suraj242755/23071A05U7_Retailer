import React from 'react';
import { Container, Paper, Typography, Box, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Sample invoice data (replace with actual data from backend)
const sampleInvoice = {
  invoiceNumber: 'INV-2024-001',
  date: new Date().toLocaleDateString(),
  items: [
    {
      id: 1,
      name: 'Product 1',
      quantity: 2,
      price: 99.99,
      total: 199.98
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 1,
      price: 149.99,
      total: 149.99
    }
  ],
  subtotal: 349.97,
  tax: 34.99,
  total: 384.96
};

const Invoice = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // TODO: Implement PDF generation and download
    alert('Invoice download functionality will be implemented here');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Invoice
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">Invoice Number: {sampleInvoice.invoiceNumber}</Typography>
              <Typography>Date: {sampleInvoice.date}</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Order Details
          </Typography>
          {sampleInvoice.items.map((item) => (
            <Box key={item.id} sx={{ mb: 2 }}>
              <Grid container justifyContent="space-between">
                <Grid item xs={6}>
                  <Typography>{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {item.quantity}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography>${item.price.toFixed(2)} each</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total: ${item.total.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>

        <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 2 }}>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item xs={4}>
              <Typography>Subtotal: ${sampleInvoice.subtotal.toFixed(2)}</Typography>
              <Typography>Tax: ${sampleInvoice.tax.toFixed(2)}</Typography>
              <Typography variant="h6">Total: ${sampleInvoice.total.toFixed(2)}</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownload}
          >
            Download Invoice
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleBackToHome}
          >
            Back to Home
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Invoice; 