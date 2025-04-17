
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="flex items-center mb-8">
        <Heart className="h-8 w-8 text-rose-500 mr-2" />
        <h1 className="text-3xl font-bold text-rose-500">ЛавМи</h1>
      </div>
      
      <RegisterForm />
      
      <p className="mt-8 text-center text-sm text-gray-500">
        Регистрируясь, вы принимаете наши{" "}
        <Link to="/terms" className="text-rose-500 hover:underline">
          Условия использования
        </Link>{" "}
        и{" "}
        <Link to="/privacy" className="text-rose-500 hover:underline">
          Политику конфиденциальности
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
