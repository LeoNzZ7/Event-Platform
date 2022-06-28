import { useState } from "react";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile.menu";

export const Header = () => {
  return(
    <header className="w-full justify-center items-center py-5 flex bg-gray-700 border-b border-gray-600 mobile:px-4 mobile:w-screen mobile:justify-between">
      <Logo/>
      <button className="md:hidden">
        <MobileMenu/>
      </button>
    </header>
  );
};