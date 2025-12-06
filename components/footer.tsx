import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t mt-auto">
      <div className="wrapper py-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} liu Musica. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
