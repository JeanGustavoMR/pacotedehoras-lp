import logo from "@/assets/logo.png";
import logoBranco from "/logo-branco.png";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const { isDark } = useTheme();

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full mx-auto max-w-6xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-16 lg:h-20">
          {/* Logo Centralizado */}
          <div className="flex items-center justify-center">
            <img 
              src={isDark ? logoBranco : logo} 
              alt="Logo" 
              className="h-8 lg:h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
