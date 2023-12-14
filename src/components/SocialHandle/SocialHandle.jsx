import "./SocialHandle.scss";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

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
    </div>
  );
};

export default SocialHandle;
