import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

// Styled components for consistent theme
const GradientContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0c0c1d 0%, #1a1a3a 100%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  color: 'white',
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '50px',
  color: 'white',
  padding: '16px 40px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  boxShadow: '0 5px 20px rgba(102, 126, 234, 0.4)',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(45deg, #764ba2 0%, #667eea 100%)',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.6)',
    transform: 'translateY(-3px)',
  },
  '& a': {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    width: '100%',
    height: '100%',
  },
}));

const ButtonList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '2rem',
  marginTop: '3rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1.5rem',
  },
}));

const Home = () => {
  return (
    <GradientContainer>
      <Typography 
        variant="h2" 
        align="center" 
        sx={{ 
          fontWeight: '700',
          background: 'linear-gradient(45deg, #9c27b0 30%, #673ab7 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 1,
          fontSize: { xs: '2.5rem', md: '3.5rem' }
        }}
      >
        Find Network Solutions
      </Typography>
      
      <Typography 
        variant="h5" 
        align="center" 
        sx={{ 
          color: 'rgba(255, 255, 255, 0.8)',
          mb: 4,
          fontSize: { xs: '1.2rem', md: '1.5rem' }
        }}
      >
        Get solutions for your network related problems
      </Typography>
      
      <ButtonList>
        <GradientButton variant="contained">
          <Link to="/employer/dashboard">
            Report Solutions ›
          </Link>
        </GradientButton>
        
        <GradientButton variant="contained">
          <Link to="/employee/feed">
            Search for Problems ›
          </Link>
        </GradientButton>
      </ButtonList>
      
      {/* Decorative elements */}
      <Box sx={{ 
        position: 'absolute', 
        bottom: '5%', 
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>
        No fees. No commissions. Just opportunities.
      </Box>
    </GradientContainer>
  );
};

export default Home;