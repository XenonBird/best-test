export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl py-4 mx-auto flex flex-col items-center">
        <p className="text-lg mb-2">Online MCQ Test Website</p>
        <p className="mb-4">© {new Date().getFullYear()} All rights reserved</p>
        <div className="flex space-x-4">
          <a href="/about" className="hover:text-blue-500">
            About Us
          </a>
          <a href="/contact" className="hover:text-blue-500">
            Contact Us
          </a>
          <a href="/privacy" className="hover:text-blue-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
