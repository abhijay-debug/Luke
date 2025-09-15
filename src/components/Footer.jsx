import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-2">Luke AI</h4>
          <p>Holistic, AI-powered lifestyle guidance on WhatsApp—rooted in Luke Coutinho’s philosophy.</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Explore</h4>
          <a href="#features">Features</a><br />
          <a href="#why-now">Why Luke</a><br />
          <a href="#why">Trust</a><br />
          <a href="#works">How It Works</a>
        </div>
        <div>
          <h4 className="font-bold mb-2">Legal</h4>
          <a href="#">Privacy Policy</a><br />
          <a href="#">Terms of Service</a>
        </div>
        <div>
          <h4 className="font-bold mb-2">Connect</h4>
          <a href="https://wa.me/">WhatsApp</a><br />
          <a href="mailto:hello@lukeai.com">Instagram</a> <br />
          <a href="mailto:hello@lukeai.com">Email</a>
        </div>
      </div>
      <p className="text-center mt-8 text-sm">© 2025 Luke AI. All rights reserved.</p>
    </footer>
  );
}

