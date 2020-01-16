import React from "react";

export function Footer({ children }) {
  return (
    <footer id="footer">
      <p>Authenticated footer here</p>
      {children}
    </footer>
  );
}

export function UnauthenticatedFooter({ children }) {
  return <footer id="footer">{children}</footer>;
}
