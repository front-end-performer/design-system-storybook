import React from "react";

interface DemoPageProps {
  title?: string;
  welcomeMessage?: string;
}

const DemoPage: React.FC<DemoPageProps> = ({
  title = "Welcome to My Website",
  welcomeMessage = "This is a simple Next.js page with a header, footer, and content area.",
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <a href="/">
              <span>{title}</span>
            </a>
          </h1>
          <nav className="space-x-4">
            <a href="/">
              <span className="hover:text-gray-200">Home</span>
            </a>
            <a href="/about">
              <span className="hover:text-gray-200">About</span>
            </a>
            <a href="/contact">
              <span className="hover:text-gray-200">Contact</span>
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-grow p-4">
        <div>
          <h2>{title}</h2>
          <p>{welcomeMessage}</p>
        </div>
      </main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default DemoPage;
