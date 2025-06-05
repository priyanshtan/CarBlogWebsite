import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import BlogCard from './components/BlogCard';

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <BlogCard/> */}
      <BlogList />
      <Footer />
    </>
  );
}
export default App;