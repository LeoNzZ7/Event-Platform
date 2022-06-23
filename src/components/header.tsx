import { Logo } from "./logo";

export const Header = () => {
  return(
    <header className="w-full justify-center items-center py-5 flex bg-gray-700 border-b border-gray-600" >
      <Logo/>
    </header>
  );
};