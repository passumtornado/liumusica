import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t mt-auto">
      <div className="container mx-auto py-4 flex items-center justify-between gap-4">
        <a
          href="https://liu.se"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Linköping University website"
          className="inline-flex items-center"
        >
          <Image
            src="/assets/liu-logo.png"
            alt="Linköping University (LiU) logo"
            width={120}
            height={36}
            priority
          />
        </a>

        <div className="text-center text-sm text-muted-foreground w-full">
          &copy; {new Date().getFullYear()} LiU MuSiCa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
