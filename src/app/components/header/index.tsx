import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-darkblue text-offwhite">
      <div className="flex items-center">
        <Image
          src="/favicon.svg"
          alt="Logo"
          width={70}
          height={70}
          priority
        />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-lightblue">Home</Link></li>
          <li><Link href="/pages/about"  className="hover:text-lightblue">Sobre</Link></li>
          <li><Link href="/pages/contact" className="hover:text-lightblue">Contato</Link></li>
          <li><Link href="/pages/blog" className="hover:text-lightblue">Blog</Link></li>
          <li><Link href="/pages/portfolio"  className="hover:text-lightblue">Portfólio</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
