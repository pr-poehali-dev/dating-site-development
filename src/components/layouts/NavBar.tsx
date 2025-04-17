
import { useState } from "react";
import { Heart, UserCircle2, MessageCircle, BellRing, Menu, X, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-10 border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-bold text-rose-500">ЛавМи</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
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
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  <LogIn className="h-5 w-5 mr-2" />
                  Войти
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="default" size="sm" className="bg-rose-500 hover:bg-rose-600">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Регистрация
                </Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Мобильное меню */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <SheetHeader className="mb-6">
              <SheetTitle className="flex items-center">
                <Heart className="h-6 w-6 text-rose-500 mr-2" />
                <span className="text-xl font-bold text-rose-500">ЛавМи</span>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4">
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="flex items-center">
                    <UserCircle2 className="h-5 w-5 mr-3" />
                    <span>Профиль</span>
                  </Link>
                  <Link to="/matches" className="flex items-center">
                    <Heart className="h-5 w-5 mr-3 text-rose-500" />
                    <span>Пары</span>
                  </Link>
                  <Link to="/messages" className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-3" />
                    <span>Сообщения</span>
                  </Link>
                  <Link to="/notifications" className="flex items-center">
                    <BellRing className="h-5 w-5 mr-3" />
                    <span>Уведомления</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="flex items-center">
                    <LogIn className="h-5 w-5 mr-3" />
                    <span>Войти</span>
                  </Link>
                  <Link to="/register" className="flex items-center text-rose-500 font-medium">
                    <UserPlus className="h-5 w-5 mr-3" />
                    <span>Регистрация</span>
                  </Link>
                </>
              )}
              
              {/* Дополнительные пункты меню */}
              <div className="pt-4 mt-4 border-t">
                <Link to="/about" className="flex items-center py-2">
                  О нас
                </Link>
                <Link to="/help" className="flex items-center py-2">
                  Помощь
                </Link>
                <Link to="/terms" className="flex items-center py-2">
                  Условия использования
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
