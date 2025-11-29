import React, { useState } from "react"; // imports react and usestate hook
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Chip,
  FormControlLabel,
  Checkbox,
} from "@mui/material"; // material ui componenets to styling
import { useNavigate } from "react-router-dom"; // hook for programmatic navigation
import { styled } from "@mui/material/styles"; // for custom styled components

// Styled components for consistent theme Styled components for modern UI design with gradient effects
const GradientPaper = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '20px',
  padding: '24px',
  color: 'white',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
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
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '50px',
  color: 'white',
  padding: '12px 24px',
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

const SkillChip = styled(Chip)(({ theme, selected }) => ({
  background: selected 
    ? 'linear-gradient(45deg, #9c27b0 30%, #673ab7 90%)' 
    : 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  borderRadius: '16px',
  margin: '4px',
  transition: 'all 0.2s ease',
  '&:hover': {
    background: selected 
      ? 'linear-gradient(45deg, #673ab7 30%, #9c27b0 90%)' 
      : 'rgba(255, 255, 255, 0.2)',
  },
}));
// Initial form state that matches backend Post model structure
const initial = { profile: "", exp: 0, techs: [], desc:"" };

const Create = () => {
  const skillSet = [
    { name: "Routing issues" },
    { name: "Networking issues" },
    { name: "Power issues" },
    { name: "Connection issues" },
    { name: "IP issues" },
    { name: "Switching issues" },
    { name: "Router Configuration" },
{ name: "Wi-Fi Network Management" },
{ name: "LTE Signal Diagnosis" },
{ name: "APN Setup" },
{ name: "IP & Admin Access" },
{ name: "Power Fault Detection" },
{ name: "Router Reset & Firmware Update" },
{ name: "Network Band Selection" },
{ name: "Wi-Fi Coverage Optimization" },
{ name: "DNS & IP Troubleshooting" },
{ name: "Device Connection Management" },
{ name: "SIM Card Handling" },
{ name: "Speed Test Analysis" },
{ name: "LED Indicator Interpretation" },
{ name: "Hardware Inspection" },
{ name: "Complaint Logging" },
{ name: "Customer Guidance" },
{ name: "Technical Communication" },
{ name: "Empathy & Patience" },
{ name: "Remote Assistance" },
{ name: "Active Listening" },
{ name: "Follow-up Handling" },
{ name: "Data Privacy Awareness" },
{ name: "Time Management" },
{ name: "Escalation Handling" },
{ name: "CRM Operation" },
{ name: "Network Monitoring" },
{ name: "Knowledge Base Maintenance" },
{ name: "Fault Reporting" },
{ name: "Team Coordination" }


  ];
  //useNavigate Hook for programmatic page navigation
  const navigate = useNavigate();
  const [form, setForm] = useState(initial); //  usestate hook to Form data state
 //  Form submission handler - sends data to backend API
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    fetch("http://localhost:8080/post", { // Promises handling API calling FETCH- API calls to backend
      method: "POST", // http post mrthod of creating data
      headers: {
        "Content-Type": "application/json", // specifies json data format
      },
      body: JSON.stringify(form),   // converts form state to json string
    })
      .then((response) => console.log(response)) //  Promise handling - success response
      .then((data) => {
        console.log("Success:", data); // Logs successful submission
      })
      .catch((error) => {
        console.error("Error:", error); // Promise handling - error case
      });
    navigate('/employee/feed'); // routing and page navigation Redirect after form submission, uses navigate hook
  };
 //Destructuring form state for easier access
  const { profile, exp, desc } = form;
//  Event handler for skill/technology selection
  const handleSkillToggle = (skillName) => {
    if (form.techs.includes(skillName)) {
      setForm({    //If skill already selected, remove it from array
        ...form,   //Spread operator to maintain existing state
        techs: form.techs.filter(skill => skill !== skillName)  //Array filter method
      });
    } else {    //If skill not selected, add it to array
      setForm({
        ...form,
        techs: [...form.techs, skillName] //  Spread operator to add new item to array
      });
    }
  };

  return (
    <GradientPaper elevation={3}>
      <Typography 
        sx={{ 
          margin: "3% auto",
          background: 'linear-gradient(45deg, #9c27b0 30%, #673ab7 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
          fontSize: '2rem'
        }} 
        align="center" 
        variant="h5"
      >
        Create New Troubleshooting Method
      </Typography>
      {/*  Form element with onSubmit event handler */}
      <form autoComplete="off" noValidate onSubmit={handleSubmit}> 
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }} // onsubmit eventhandlers for form submission
        >
          <StyledTextField
            type="string"
            sx={{ width: { xs: "90%", md: "60%" }, margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
            label="Type of the trouble"
            variant="outlined"
            value={profile}  
          /> 
           {/*  TextField for problem title - maps to 'exp' in backend */}
          <StyledTextField
            min="0"
            type="number"
            sx={{ width: { xs: "90%", md: "60%" }, margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, exp: e.target.value })} // Eventhandler onchange for form input
            label="Years in Field Service"
            variant="outlined"
            value={exp}    // controled component value from  state
            InputProps={{ inputProps: { min: 0 } }}
          /> 
          
          <StyledTextField
            type="string"
            sx={{ width: { xs: "90%", md: "60%" }, margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            label="Step by step troubleshooting method"
            variant="outlined"
            value={desc}
          />
          
          <Box sx={{ margin: "3% auto", textAlign: "center", width: "100%" }}>
            <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
              CATEGORY OF THE FAULT
            </Typography>
             {/*  Technology selection section */}
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
              {skillSet.map((skill, index) => ( // map through skill array(mapping)
                <SkillChip
                  key={index}  // Unique key for each list item
                  label={skill.name}
                  clickable
                  selected={form.techs.includes(skill.name)}
                  onClick={() => handleSkillToggle(skill.name)}
                  variant={form.techs.includes(skill.name) ? "default" : "outlined"}
                /> // event handler -onclick to  skill selection
              ))} 
            </Box>
            {/* EVALUATION: Conditionally render selected technologies */}
            {form.techs.length > 0 && (
              <Box sx={{ mt: 3 }}>
                <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 1 }}>
                  Selected Category:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                  {/*  Mapping through selected technologies */}
                  {form.techs.map((tech, index) => ( 
                    <SkillChip
                      key={index}
                      label={tech}
                      onDelete={() => handleSkillToggle(tech)}  //  Event handler for delete
                      sx={{ m: 0.5 }}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Box>
          
          <GradientButton
            sx={{ width: { xs: "90%", md: "60%" }, margin: "2% auto" }}
            variant="contained"
            type="submit"
            disabled={!profile || !exp || !desc || form.techs.length === 0}
          >
            Create Post
          </GradientButton>
        </Box>
      </form>
    </GradientPaper>
  );
};

export default Create;