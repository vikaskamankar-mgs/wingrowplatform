import { Button } from "primereact/button";
import React from "react";
import { Link } from "react-router-dom";
import '../Footer/index.css';

const Footer = () => {
  return (
    <>
      <div className="footer-distributed">
            <footer className="footer">
                <div className="footer-left">
                    <h3>Wingrow Agritech</h3>
                    <h3>Innovations Pvt Ltd</h3>
                    <p className="footer-links">
                        <Link to="/" className="link-1">Home</Link>
                        <Link to="/customers/*">Customers</Link>
                        <Link to="/farmers/*">Farmers</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/farmers/stallplaces">Stall Bookings</Link>
                        <Link to="/terms">Terms and Conditions</Link>
                    </p>
                    <p className="footer-company-name">Wingrow Agritech. All rights reserved.</p>
                </div>
                <div className="footer-center">
                    <div>
                        {/* <i className="pi pi-map-marker"></i> */}
                        <p><span>Wingrow Agritech Innovations Pvt. Ltd.,</span> Office no.208, Times Square building, Pune Satara Road, Pune 411037</p>
                    </div>
                    <div>
                        {/* <i className="pi pi-phone"></i>  */}
                        <p>+91 777 600 3700</p>
                    </div>
                    <div>
                        {/* <i className="pi pi-envelope"></i> */}
                        <p><a href="mailto:connect@wingrowagritech.com">connect@wingrowagritech.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        We at Wingrow Agritech facilitate direct interaction between consumers and farmers. Consumers get access to produce direct from farms which is much fresher and lasts longer, at reasonable prices.
                    </p>
                    <div className="footer-icons">
                        <Button icon="pi pi-facebook" className="p-button-rounded p-button-secondary" aria-label="Facebook" onClick={() => window.location.href = 'https://www.facebook.com/Wingrow-Agritech-Producer-Company-Limited-4'} />
                        <Button icon="pi pi-instagram" className="p-button-rounded p-button-secondary" aria-label="Instagram" onClick={() => window.location.href = 'https://instagram.com/wingrowagritech?utm_medium=copy_link'} />
                        <Button icon="pi pi-linkedin" className="p-button-rounded p-button-secondary" aria-label="LinkedIn" onClick={() => window.location.href = 'https://www.linkedin.com/company/31488381'} />
                        <Button icon="pi pi-github" className="p-button-rounded p-button-secondary" aria-label="GitHub" onClick={() => window.location.href = '#'} />
                    </div>
                </div>
            </footer>
        </div>
    </>
  );
};

export default Footer;
