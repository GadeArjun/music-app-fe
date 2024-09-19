import "./Footer.css";

function Footer() {
  return (
    <>
      <hr style={{ marginTop: "50px", marginBottom: "0px" }} />

      <div className="footer-container">
        <div className="copyright-section">
          © 2024 MusicApp | All rights reserved.
        </div>
        <div className="terms-policy-section">
          <p>
            <a href="/">Terms of Service </a>|<a href="/"> Privacy Policy</a>
          </p>
        </div>
      </div>
      <hr style={{ marginBottom: "0px", marginTop: "0px" }} />
    </>
  );
}

export default Footer;
