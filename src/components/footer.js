import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white px-4 py-8 flex justify-between items-center">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-base hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/create" className="text-base hover:underline">Create</Link>
          </li>
          <li>
            <Link to="/notes" className="text-base hover:underline">Notes</Link>
          </li>
        </ul>
      </nav>
      <span className="text-sm">© 2024 Ghost</span>
    </footer>
  );
};

export default Footer;
