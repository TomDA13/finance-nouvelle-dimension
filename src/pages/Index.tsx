import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const overlay = document.querySelector('.page-gradient-overlay');
      if (overlay) {
        const scrollPercentage = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        overlay.style.backgroundPosition = `0 ${scrollPercentage}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="page-gradient-overlay" />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
          <p className="text-xl text-gray-600">Start building your amazing project here!</p>
        </div>
      </div>
    </>
  );
};

export default Index;
