import React from "react";

const Footer = () => {
  return (
    <footer className="footer is-info">
      <div className="container ">
        <div className="content has-text-centered ">
          <div className="soc">
            <a href="#">
              <i className="fa fa-github-alt fa-lg" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube fa-lg" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
            </a>
          </div>
          <p>
            <strong>FJeferson</strong> by{" "}
            <a href="http://jgthms.com">Jeferson Ferreira</a>. The source code
            is licensed{" "}
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.{" "}
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
