
import { Heart, UserCircle2, MessageCircle, BellRing, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-10 border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-bold text-rose-500">ЛавМи</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/matches">
            <Button variant="ghost" size="sm" className="text-rose-500">
              <Heart className="h-5 w-5 mr-2" />
              Пары
            </Button>
          </Link>
          <Link to="/messages">
            <Button variant="ghost" size="sm">
              <MessageCircle className="h-5 w-5 mr-2" />
              Сообщения
            </Button>
          </Link>
          <Link to="/notifications">
            <Button variant="ghost" size="sm">
              <BellRing className="h-5 w-5 mr-2" />
              Уведомления
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <UserCircle2 className="h-6 w-6" />
            </Button>
          </Link>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
