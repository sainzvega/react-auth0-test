import React from "react";

export function Content({ children }) {
  return <main id="content">{children}</main>;
}

export function UnauthenticatedContent({ children }) {
  return <main id="content">{children}</main>;
}
