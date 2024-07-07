import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./Components/Title/Title";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Insights from "./Components/Insights/Insights";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";
import TermsService from "./Pages/TermsService/TermsService";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import AdminDash from "./Pages/AdminDash/AdminDash";
import Layout from "./Components/Layout";
import featureFlags from "./featureFlags"; // Import featureFlags


const App = () => {
  const [playState, setPlayState] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };
 
  return (
    <BrowserRouter>
      <Navbar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <div className="">
        <Routes>
          <Route path="/" element={<Layout setPlayState={setPlayState} />}>
            <Route index element={<Hero setPlayState={setPlayState} />} />
            <Route
              path="services"
              element={
                <>
                  <Title
                    subTitle="Our Services"
                    title="What We Offer"
                    backgroundColor="#f5f5f5"
                  />
                  <Services />
                </>
              }
            />
            <Route
              path="about"
              element={
                <>
                  <About />
                </>
              }
            />
            <Route
              path="insights"
              element={
                <>
                  <Title
                    subTitle="Insights & Analysis"
                    title="Stay informed and Ahead"
                  />
                  <Insights />
                </>
              }
            />
            {featureFlags.showTestimonials && (
              <Route
                path="testimonials"
                element={
                  <>
                    <Title
                      subTitle="Testimonials"
                      title="What Our Clients Say"
                    />
                    <Testimonials />
                  </>
                }
              />
            )}
            {featureFlags.enableRegister && (
              <Route
                path="register"
                element={
                  <>
                    <Title subTitle="Register" title="Join the Community" />
                    <Register />
                  </>
                }
              />
            )}
            <Route
              path="contact"
              element={
                <>
                  <Title subTitle="Contact Us" title="" />
                  <Contact />
                </>
              }
            />
          </Route>
          <Route path="/admin/*" element={<AdminDash />} />
          <Route path="/termsService" element={<TermsService />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
