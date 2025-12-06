import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Image
        src="/assets/logo.svg"
        alt="Liu Musica Logo"
        width={150}
        height={120}
      />
      <div className="p-6 shadow-md rounded-lg w-1/3 ">
        <h1 className="text-4xl font-bold mt-4">404 - Page Not Found</h1>
        <p className="mt-2 text-lg text-center">
          Sorry, the page you are looking for does not exist.
        </p>
        <Button asChild className="mt-6 ">
          <Link href="/">Go Back Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
