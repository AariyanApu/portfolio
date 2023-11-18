import { AiFillEye } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitterSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { IoIosMail, IoIosPhonePortrait } from 'react-icons/io';
import { FaBeer } from 'react-icons/fa';

import { BiChevronRight } from 'react-icons/bi';
export const EyeIcon = () => <AiFillEye size={30} />;
export const GithubIconRounded = () => <FiGithub size={26} />;
export const RightIcon = () => <BiChevronRight size={16} color='#64ffda' />;
export const GithubIcon = () => <FaGithubSquare size={35} />;
export const FacebookIcon = () => <FaFacebookSquare size={35} />;
export const TwitterIcon = () => <FaTwitterSquare size={35} />;
export const InstagramIcon = () => <FaInstagramSquare size={35} />;
export const LinkedinIcon = () => <FaLinkedin size={35} />;
export const WhatsappIcon = () => <FaWhatsappSquare size={35} />;
export const TelegramIcon = () => <FaTelegramPlane size={32} />;
export const MailIcon = () => <IoIosMail size={35} />;
export const PhoneIcon = () => <IoIosPhonePortrait size={35} />;
