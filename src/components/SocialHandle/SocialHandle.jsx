import './SocialHandle.scss';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { SiCodeforces } from 'react-icons/si';
import { SiGeeksforgeeks } from 'react-icons/si';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialHandle = () => {
  return (
    <div className="socialhandle">
      <a href="https://github.com/rajutkarsh07" target="_blank">
        <FaGithub className="icon" />
      </a>
      <a href="https://leetcode.com/utkarsh_raj_13/" target="_blank">
        <SiLeetcode className="icon" />
      </a>
      <a href="https://codeforces.com/profile/utkarsh_raj_13" target="_blank">
        <SiCodeforces className="icon" />
      </a>
      <a
        href="https://auth.geeksforgeeks.org/user/utkarsh_raj_13"
        target="_blank"
      >
        <SiGeeksforgeeks className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/utkarshraj1306/" target="_blank">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://twitter.com/Utkarsh_raj_13" target="_blank">
        <FaTwitter className="icon" />
      </a>
      <a href="https://www.instagram.com/utkarsh_raj.random/" target="_blank">
        <FaInstagram className="icon" />
      </a>
    </div>
  );
};

export default SocialHandle;
