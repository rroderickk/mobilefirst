import React from "react";

const styleLayout = {
  textAlign: "center",
  backgroundColor: "white",
  minHeight: "100vh",
  // padding: "20px",
  maxWidth: "100vw",
};

const Layout =({ children })=> {
return (
<div className="Layout" 
  style={styleLayout}>
         {children}
</div>
);  }; export { Layout };