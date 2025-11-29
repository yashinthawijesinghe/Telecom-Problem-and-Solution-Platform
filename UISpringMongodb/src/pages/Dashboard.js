import * as React from 'react'; // Dashboard.js is the FULL PAGE that CONTAINS the form
import {
  Box,
  Tab,
  Typography,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';
import Create from './Create';
import { styled } from '@mui/material/styles';

// Styled components for consistent theme
const GradientBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0c0c1d 0%, #1a1a3a 100%)',
  minHeight: '100vh',
  padding: '2%',
  color: '#fff',
}));

const GlassPaper = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  color: '#fff',
  borderRadius: '20px',
  padding: '24px',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.2)',
    transform: 'translateY(-2px)',
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1rem',
  transition: 'color 0.3s ease',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&:hover': {
    color: '#fff',
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '50px',
  color: 'white',
  padding: '10px 24px',
  fontWeight: 'bold',
  boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(45deg, #764ba2 0%, #667eea 100%)',
    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.6)',
    transform: 'translateY(-2px)',
  },
}));

export default function Home() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <GradientBox>
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
          gap: 2,
        }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #9c27b0 30%, #673ab7 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.5px',
          }}
          align="center"
        >
          TROUBLESHOOTING DASHBOARD
        </Typography>

        <GradientButton component={Link} to="/"> 
          Home
        </GradientButton>
      </Box>

      {/* Bento Grid Container */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: 3,
          mb: 4,
        }}
      >
        {/* Main Content Card (Tab Container) */}
        <GlassPaper
          elevation={0}
          sx={{
            gridColumn: isMobile ? '1' : 'span 2',
          }}
        >
          <TabContext value={value}>
            <Box sx={{ 
              borderBottom: '1px solid rgba(255,255,255,0.3)', 
              mb: 3 
            }}>
              <TabList
                onChange={handleChange}
                aria-label="dashboard tabs"
                TabIndicatorProps={{
                  style: {
                    background: 'linear-gradient(45deg, #9c27b0 30%, #673ab7 90%)',
                    height: 3,
                    borderRadius: '3px',
                  },
                }}
              >
                <StyledTab label="Create Post" value="1" />
                {/* Add more tabs here for bento grid expansion */}
                {/* <StyledTab label="Analytics" value="2" />
                <StyledTab label="Candidates" value="3" /> */}
              </TabList>
            </Box>

            <TabPanel
              value="1"
              sx={{
                p: 0,
                color: '#fff',
              }}
            >
              <Box
                sx={{
                  p: 3,
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Create />
              </Box>
            </TabPanel>
          </TabContext>
        </GlassPaper>

        {/* Placeholder Bento Cards (for visual balance / future use) */}
        {!isMobile && (
          <>
            <GlassPaper
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                Performance Metrics
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Track ticket resolution rates and field technician efficiency.
              </Typography>
              <Box sx={{ mt: 2, width: '100%', height: '100px', 
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Typography variant="h4" sx={{ 
                  background: 'linear-gradient(45deg, #9c27b0 30%, #673ab7 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }}>
                  87%
                </Typography>
              </Box>
            </GlassPaper>

            <GlassPaper
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                Active Issues
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Manage and dispatch all active network issues from a single dashboard.
              </Typography>
              <Box sx={{ mt: 2, width: '100%', height: '100px', 
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Typography variant="h4" sx={{ 
                  background: 'linear-gradient(45deg, #9c27b0 30%, #673ab7 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }}>
                  24
                </Typography>
              </Box>
            </GlassPaper>
          </>
        )}
      </Box>
    </GradientBox>
  );
} // <GradientButton component={Link} to="/">Home</GradientButton> to page navigation and routing