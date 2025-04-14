import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes and Route
import FileUploader from "./components/FileUploader"; // Import your FileUploader component
import Hero from "./components/Hero"; // Import your Hero component
import Header from "./components/Header";
import Features from "./components/Features";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Mock from "./components/Mock";



function App() {
  return (
    <>
      <Header />
      <main>
        <Routes> 
          <Route path="/" element={<Hero />} />
          <Route path="/FileUploader" element={<FileUploader />} />
          <Route path="/Profile" element={<Profile />} /> 
          <Route path="/Mock" element={<Mock />} /> 
        </Routes>
        <Features />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
