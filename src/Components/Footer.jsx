import React from "react";

var Year= new Date().getFullYear();


function Footer(){
  return <footer>
     <p className="footer">Copyright &copy; {Year} </p>
     </footer>
}

export default Footer;