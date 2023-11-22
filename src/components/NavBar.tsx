import Image from 'next/image';
import Link from 'next/link';
import Container from './utility/Container';
import NavTextContainer from './NavTextContainer';
import MobileNavbar from './MobileNavbar';

const NavBar = () => (
  <Container customStyles='mx-auto mt-3 max-w-7xl px-2 font-sans sm:px-6 lg:px-8 '>
    <div className='relative flex h-16 items-center justify-between'>
      {/* Laptop Navbar Start Here  */}

      <div className='relative flex w-full items-center justify-center sm:flex-1 sm:items-stretch sm:justify-between'>
        {/* Mobile Navbar Start Here  */}
        <MobileNavbar />
        {/* Logo is here  */}
        <Link href='/' className=' shrink-0 cursor-pointer items-center'>
          <Image
            className=' block h-10 w-auto sm:h-12 '
            src='/asset/logo.png'
            alt='Logo of Aaru'
            width={100}
            height={100}
          />
        </Link>

        {/* Nav link for all  */}
        <NavTextContainer />
      </div>
    </div>
  </Container>
);

export default NavBar;
