import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © {new Date().getFullYear()} Michael Murphy
                <p>TX, USA</p>
                <p>Email: mpmurphy2014@gmail.com</p>
                <p>Phone: N/A</p>
            </div>
        </footer>
    );
};

export default Footer;
