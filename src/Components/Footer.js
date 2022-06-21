import React from 'react'
import './footer.css';

export default function Footer() {
  let footerStyle = {
    top: "96vh",
    width: "100%"
  };
  return (
    <footer className="bg-dark text-light footerCls" style={footerStyle}>
        <p className="text-center">
            Copyright &copy; Todos List
        </p>
    </footer>
  )
}
