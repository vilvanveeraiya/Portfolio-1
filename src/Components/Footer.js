import React from 'react';
import { CgInstagram } from 'react-icons/cg';
import { CiInstagram } from 'react-icons/ci';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Vilvan</h4>
      <h4>Copyright &copy; 2026 Vilvan</h4>
      <div className='footerLinks'>
        <a href="https://github.com/vilvanveeraiya" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/vilvan-veeraiya/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:vilvanveeraiya628@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://www.instagram.com/_vilvan._/?__pwa=1" target="_blank"><FaInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer