// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font flex-shrink-0 bg-darkblue shadow-inner">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Allan Pablo Consultoria —
          <a href="https://twitter.com/allanpablo" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@allanpablo</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
