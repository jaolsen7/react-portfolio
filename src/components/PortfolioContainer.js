import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This function is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      default:
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  const styles = {
    h1: {
      fontSize: "50px",
      fontWeight: "bold",
      fontFamily: "cursive"
    }
  }
  return (
    <div>
      <div className="text-center mt-3">
        <h1 style={styles.h1}>Jason Olsen's Coding Porfolio</h1>
      </div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage function which will return a component  */}
      {renderPage()}
      <footer className="text-center p-3">
        ♦ <a href="json.olsen@gmail.com">json.olsen@gmail.com </a>
        ♦ <a href="tel:805-748-4171">(805)748-4171 </a>
        ♦ <a href="https://github.com/jaolsen7">GitHub </a>
        ♦ <a href="https://www.linkedin.com/in/jaolsen7/">LinkedIn </a> ♦
      </footer>
    </div>
  );
}
