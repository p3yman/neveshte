import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/fa";
import GithubLogo from "../assets/images/github.svg";
dayjs.locale("fa");

const Footer = ({ updatedAt }) => {
  let update = "در حال بروزرسانی...";
  if (updatedAt) {
    update = `آخرین بروزرسانی: ${dayjs
      .unix(updatedAt.seconds)
      .format("MMMM D, YYYY h:mm A")}`;
  }

  return (
    <footer>
      <div className="github">
        <a
          href="https://github.com/p3yman/neveshte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubLogo} alt="Github Source" width="24" />
        </a>
      </div>
      <div className="data">{update}</div>
    </footer>
  );
};
export default Footer;