// App.jsx

import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Container,
  CssBaseline,
  Paper,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  createTheme,
  ThemeProvider,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5722", // Deep Orange
    },
    secondary: {
      main: "#4caf50", // Green
    },
    error: {
      main: "#f44336", // Red
    },
    warning: {
      main: "#ffeb3b", // Yellow
    },
    info: {
      main: "#2196f3", // Blue
    },
    success: {
      main: "#8bc34a", // Light Green
    },
  },
});

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [selectedDate, handleDateChange] = useState(null);
  const [notification, setNotification] = useState("email");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "age") {
      setAge(value);
    } else if (name === "country") {
      setCountry(value);
    } else if (name === "bio") {
      setBio(value);
    }
  };

  const handleDropdownChange = (e) => {
    setGender(e.target.value);
  };

  const handleNotificationChange = (e) => {
    setNotification(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSnackbarOpen(true);
    }, 2000);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Paper elevation={3} style={{ padding: "40px", marginTop: "40px" }}>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Registration Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  value={firstName}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  value={lastName}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    value={gender}
                    onChange={handleDropdownChange}
                    required
                  >
                    <MenuItem value="">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Age"
                  variant="outlined"
                  type="number"
                  name="age"
                  value={age}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Country"
                  variant="outlined"
                  name="country"
                  value={country}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Notification Preference
                  </FormLabel>
                  <RadioGroup
                    row
                    name="notification"
                    value={notification}
                    onChange={handleNotificationChange}
                  >
                    <FormControlLabel
                      value="email"
                      control={<Radio color="primary" />}
                      label="Email"
                    />
                    <FormControlLabel
                      value="sms"
                      control={<Radio color="primary" />}
                      label="SMS"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Date of Birth</InputLabel>
                  <TextField
                    type="date"
                    variant="outlined"
                    fullWidth
                    value={selectedDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Bio"
                  variant="outlined"
                  multiline
                  rows={4}
                  name="bio"
                  value={bio}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px" }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
          <Snackbar
            open={isSnackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          >
            <Alert onClose={handleSnackbarClose} severity="success">
              Form submitted successfully!
            </Alert>
          </Snackbar>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
