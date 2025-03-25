import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleAuthButtonClick = () => {
    navigate('/auth');
    closeMenu();
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass-blur py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="flex items-center justify-between px-4">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="">
            <img 
              src="/logo.png" 
              alt="Promo Mitra Logo" 
              
              className="h-14 w-14 object-contain "
            />
          </div>
          <span className="text-xl font-display font-bold text-white">Promo Mitra</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8">
            {['Services', 'Portfolio', 'About', 'Blog'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-promo-red after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white rounded-full flex items-center gap-2 px-3">
                  <div className="h-8 w-8 rounded-full bg-promo-red/20 flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                  <span className="text-sm">{profile?.username || user.email?.split('@')[0]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-promo-lightgray/90 backdrop-blur-md border-white/10">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem 
                  className="text-white hover:bg-white/10 cursor-pointer"
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              className="bg-promo-red hover:bg-promo-red/90 text-white button-glow"
              onClick={handleAuthButtonClick}
            >
              Sign In <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-promo-black/95 backdrop-blur-md z-40 pt-20">
          <nav className="container mx-auto px-4 py-5">
            <ul className="flex flex-col space-y-5">
              {['Services', 'Portfolio', 'About', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-xl font-medium text-white/90 hover:text-white transition-colors block py-2"
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                  <div className="h-px bg-white/10 mt-2"></div>
                </li>
              ))}
            </ul>

            {user ? (
              <div className="mt-8 border-t border-white/10 pt-4">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-promo-red/20 flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{profile?.username || user.email?.split('@')[0]}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-promo-lightgray/20 hover:bg-promo-lightgray/40 text-white"
                  onClick={() => {
                    handleSignOut();
                    closeMenu();
                  }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button 
                className="w-full mt-8 bg-promo-red hover:bg-promo-red/90 text-white py-6"
                onClick={handleAuthButtonClick}
              >
                Sign In <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
