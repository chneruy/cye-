import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import PersonalInfo from '../components/PersonalInfo';
import Projects from '../components/Projects';
import ActivityShare from '../components/ActivityShare';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PersonalInfo />
      <Projects />
      <ActivityShare />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;
