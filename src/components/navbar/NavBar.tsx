import Image from "next/image";
import Link from "next/link";

import Container from "@/utils/Container";
import MobileNavbar from "./MobileNavbar";
import NavTextContainer from "./NavTextContainer";

const NavBar = () => (
  <Container customStyles="mx-auto mt-3 max-w-7xl px-2  sm:px-6 lg:px-8 ">
    <div className="relative flex_between h-16">
      <div className="relative flex_center w-full  sm:flex-1 sm:items-stretch sm:justify-between">
        {/* Mobile Navbar Start Here  */}
        <MobileNavbar />
        {/* Logo is here  */}
        <Link href="/" className=" shrink-0 cursor-pointer items-center">
          <Image
            className=" block h-10 w-auto sm:h-12 "
            src="/asset/logo.png"
            alt="Logo of Aaru"
            width={100}
            height={100}
          />
        </Link>

        {/* Nav link for Desktop */}
        <NavTextContainer />
      </div>
    </div>
  </Container>
);

export default NavBar;
