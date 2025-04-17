
import { useState } from "react";
import NavBar from "@/components/layouts/NavBar";
import UserCard from "@/components/profile/UserCard";

// Моковые данные пользователей
const MOCK_USERS = [
  {
    id: "1",
    name: "Анна",
    age: 28,
    location: "Москва",
    bio: "Люблю путешествия, фотографию и хорошую музыку. Ищу человека для совместных приключений и душевных разговоров.",
    interests: ["путешествия", "фотография", "музыка", "кино"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Дмитрий",
    age: 32,
    location: "Санкт-Петербург",
    bio: "Программист, любитель активного отдыха. В свободное время катаюсь на велосипеде и занимаюсь скалолазанием.",
    interests: ["программирование", "скалолазание", "велоспорт"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Елена",
    age: 25,
    location: "Новосибирск",
    bio: "Художница, интересуюсь искусством и творческими проектами. Люблю природу и уютные вечера с книгой.",
    interests: ["искусство", "чтение", "природа"],
    imageUrl: "/placeholder.svg"
  }
];

const HomePage = () => {
  const [users, setUsers] = useState(MOCK_USERS);
  
  const handleLike = (id: string) => {
    console.log(`Лайк пользователю ${id}`);
    setUsers(users.filter(user => user.id !== id));
  };
  
  const handleDislike = (id: string) => {
    console.log(`Дизлайк пользователю ${id}`);
    setUsers(users.filter(user => user.id !== id));
  };
  
  const handleMessage = (id: string) => {
    console.log(`Сообщение пользователю ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <div className="container mx-auto px-4 pt-20 pb-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-rose-500">Найдите свою вторую половинку</h1>
        
        {users.length > 0 ? (
          <div className="max-w-md mx-auto">
            <UserCard 
              {...users[0]} 
              onLike={handleLike} 
              onDislike={handleDislike} 
              onMessage={handleMessage} 
            />
          </div>
        ) : (
          <div className="text-center p-10 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Пока анкет больше нет</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Загляните позже, чтобы увидеть новых людей или измените настройки поиска
            </p>
            <button className="mt-4 px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600">
              Обновить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
