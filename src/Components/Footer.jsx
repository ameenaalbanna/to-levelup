import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-slogan">Designed & developed by Ameena Albanna</p>
            <div className="footer-icons">
                <a href="https://github.com/ameenaalbanna" target="_blank" className= "btn-purple" title="GitHub"><img className="social-icon" src='assets/images/github.svg'/></a>
                <a href="https://www.linkedin.com/in/ameenaalbanna" target="_blank" className= "btn-purple" title="LinkedIn"><img className="social-icon" src='assets/images/linkedIn.svg'/></a>
                <a href="https://www.instagram.com/ameena.albanna" target="_blank" className= "btn-purple" title="Instagram"><img className="social-icon" src='assets/images/instagram.svg'/></a>
                <a href="https://www.facebook.com/ameena.albanna" target="_blank" className= "btn-purple" title="Facebook"><img className="social-icon" src='assets/images/facebook.svg'/></a>
                <a href="https://wa.me/+967780116497" target="_blank" className= "btn-purple" title="WhatsApp"><img className="social-icon" src='assets/images/whatsapp.svg'/></a>
            </div>
        </footer>
    );
}

export default Footer;
