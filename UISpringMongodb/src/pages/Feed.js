import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material"; //Material-UI components for UI design
import axios from "axios";  // Library for making API calls to backend
import React, { useEffect, useState } from "react"; // React hooks imports
import SearchIcon from "@mui/icons-material/Search"; //Search icon component
import { Link } from "react-router-dom";  //Routing for navigation between pages
import { styled } from "@mui/material/styles";  //For custom styled components

// Styled components with modern design with hover effect
const GradientCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '20px',
  padding: '24px',
  boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  color: 'white',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)',
  },
}));

const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    backdropFilter: 'blur(10px)',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#9c27b0',
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInputAdornment-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '50px',
  border: 0,
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
  '& a': {
    color: 'white',
    textDecoration: 'none',
  },
}));

const SkillPill = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  borderRadius: '16px',
  padding: '4px 12px',
  margin: '4px',
  fontSize: '0.8rem',
  backdropFilter: 'blur(5px)',
}));

const Feed = () => {
  const [query, setQuery] = useState(""); // usestate hook to manage search query state
  const [post, setPost] = useState();     // usestate hook to post data from the backend

  useEffect(() => {    // useeffect hook to Run when query changes or component loads
    const fetchPosts = async () => { // Async/ await  Handling API calls to searching posts with specific query
      const response = await axios.get(`http://localhost:8080/posts/${query}`); //AXIOS -API calling to backend
      setPost(response.data); // Update state with search results
    };
    const fetchInitialPosts = async () => { // Async/ await handling API calls for fetching all initial posts
        const response = await axios.get(`http://localhost:8080/allPosts`); //  AXIOS GET call to Spring Boot get-all endpoint
        console.log(response);
        setPost(response.data); //Update state with all posts
    }
    //  Conditional API calls based on search query length
    if (query.length === 0) fetchInitialPosts(); // show all when no search
    if (query.length > 2) fetchPosts(); // search only after 3+ characters
  }, [query]); //  Dependency array - effect runs when query changes
  
  console.log(post); // Debugging log to check posts data
  
  return (
    <Box sx={{ 
      padding: '2%', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0c0c1d 0%, #1a1a3a 100%)',
      color: 'white'
    }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
          {/* Page header with title and navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ 
              fontWeight: '700',
              background: 'linear-gradient(45deg, #9c27b0 30%, #673ab7 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Fault Search
            </Typography>
            {/*  Navigation button back to home page */}
            <StyledButton variant="contained">
              <Link to="/">Home</Link>  {/*  React Router Link for navigation */}
            </StyledButton>
          </Box>
          {/* Search input section */}
          <Box sx={{ mb: 5 }}>
            <SearchField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search..."
              fullWidth
              onChange={(e) => setQuery(e.target.value)} // onchange event handler for search input change and update search query
            />
          </Box>
        </Grid>
        
        {post && post.map((p) => { // mapping through post array (mapping) -Check if posts exist, then map through array
          return (
            <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
              <GradientCard>
                {/*  Display problem title from backend data */}
                <Typography
                  variant="h5"
                  sx={{ 
                    fontSize: "1.5rem", 
                    fontWeight: "700",
                    mb: 2
                  }}
                > 
                  {p.profile} 
                </Typography> 
                
                <Typography 
                  sx={{ 
                    color: "rgba(255, 255, 255, 0.8)", 
                    mb: 3,
                    fontSize: '0.9rem',
                    lineHeight: 1.6
                  }} 
                  variant="body2" 
                > 
                  {p.desc}
                </Typography> 
                
                <Box sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '12px',
                  mb: 3
                }}>
                  <Typography variant="body2" sx={{ fontWeight: '600' }}>
                    Years in Field Service: {p.exp} years
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ fontWeight: '600', mb: 1 }}>
                  Issue type:
                </Typography>
                {/*  Mapping through technologies array */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  {p.techs.map((s, i) => { // EVALUATION: Map through technologies array
                    return (
                      <SkillPill key={i}> {/*  Unique key for each list item */}
                        {s}  {/* Renders each technology from Post model */}
                      </SkillPill>
                    );
                  })}
                </Box>
              </GradientCard>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Feed; // export components to use in other files