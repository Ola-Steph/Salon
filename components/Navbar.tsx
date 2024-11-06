// Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 text-white z-20">
      <ul className="flex flex-row space-x-6 ml-4">
        <li>
          <Link href="/" legacyBehavior>
            <a className="hover:text-gray-300">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a className="hover:text-gray-300">About</a>
          </Link>
        </li>
        <li>
          <Link href="/hair" legacyBehavior>
            <a className="hover:text-gray-300">Hair</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery" legacyBehavior>
            <a className="hover:text-gray-300">Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/service-areas" legacyBehavior>
            <a className="hover:text-gray-300">Service Areas</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
