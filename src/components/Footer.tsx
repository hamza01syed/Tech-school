import Link from "next/link";


const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: 123-456-7890</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-2">
              <li><Link href="/facebook" className="hover:text-white">Facebook</Link></li>
              <li><Link href="/twitter" className="hover:text-white">Twitter</Link></li>
              <li><Link href="/instagram" className="hover:text-white">Instagram</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact"className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs pt-8">2024 Tech School.All rights reserved</p>
      </footer>
    );
  };

export default Footer