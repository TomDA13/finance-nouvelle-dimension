
import React from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Logo />
        <div className="hidden md:flex items-center space-x-8">
          <a href="#fonctionnalites" className="text-gray-700 hover:text-primary transition">
            Fonctionnalités
          </a>
          <a href="#pourquoi" className="text-gray-700 hover:text-primary transition">
            Pourquoi Nous
          </a>
          <a href="#temoignages" className="text-gray-700 hover:text-primary transition">
            Témoignages
          </a>
          <a href="#tarifs" className="text-gray-700 hover:text-primary transition">
            Tarifs
          </a>
          <Button variant="outline" asChild>
            <a href="#contact">Contactez-nous</a>
          </Button>
          <Button asChild>
            <a href="#demo">Essai Gratuit</a>
          </Button>
        </div>
        <div className="md:hidden">
          <button className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
