import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html>
      <head>Blog - zen</head>
      <body>{children}</body>
    </html>
  );
};
