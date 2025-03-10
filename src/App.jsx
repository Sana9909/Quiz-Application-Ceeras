// IntegratedApp.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig"; // Ensure correct import path
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import LoadingPage from "./LandingPage2/LoadingPage"; 
import LoginContainer from "./LoginPage/LoginContainer"; // Login Page
import Container from "./SigninPage/Container"; // Sign-in Page
import AdminDashboard from "./Dashboard/AdminDashboard";
import InputDesign from "./CreateQuiz/InputDesign";
import Dashboard from "./ManageQuiz/Dashboard";
import UserManagementDashboard from "./ManageUser/UserManagementDashboard";



const Layout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {/* {user && <Header />}  */}
      <Routes>
        <Route path="/" element={<><Header /><HeroSection /><FeaturesSection /></>} />
        <Route path="/about" element={<LoadingPage />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/signin" element={<Container />} />
        <Route path="/profile" element={<AdminDashboard />} />
        <Route path="/createquiz" element={<InputDesign />} />
        <Route path="/managequiz" element={<Dashboard />} />
        <Route path="/manageuser" element={<UserManagementDashboard />} />
        
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
