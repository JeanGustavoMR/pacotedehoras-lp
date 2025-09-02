import logo from "@/assets/logo.png";
import logoBranco from "/logo-branco.png";
import { useTheme } from "@/hooks/use-theme";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const { isDark } = useTheme();

  return (
    <nav className="fixed top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full mx-auto max-w-6xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-1 justify-center lg:justify-start">
            <img 
              src={isDark ? logoBranco : logo} 
              alt="Logo" 
              className="h-6 sm:h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Language Toggle */}
          <div className="flex items-center absolute right-4 sm:right-6">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
