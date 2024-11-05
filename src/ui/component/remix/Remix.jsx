import { useState, useContext } from "react";
import {Context} from "../../../core/context/context.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Property} from "../../pages/properety/Property.jsx";

const Remix = () => {
    const { setWallet } = useContext(Context); // Получаем функцию setWallet из контекста
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Состояние для проверки авторизации
    const [username, setUsername] = useState(""); // Состояние для имени пользователя
    const [password, setPassword] = useState(""); // Состояние для пароля

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "user" && password === "pass") {
            setWallet("User Wallet Address"); // Устанавливаем адрес кошелька (замените на реальный)
            setIsLoggedIn(true); // Меняем состояние на авторизованного пользователя
        } else {
            alert("Неверные учетные данные"); // Сообщение об ошибке
        }
    };

    if (isLoggedIn) {
        // Если пользователь авторизован
        return (
            <div className="container mt-5">
                <h2>Личный Кабинет</h2>
                <p>Добро пожаловать, {username}!</p>
                <Property></Property>
            </div>
        );
    }

    // Если пользователь не авторизован, отображаем форму входа
    return (
        <div className="container mt-5">
            <h2>Авторизация</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Имя пользователя</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Обновляем состояние имени пользователя
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Пароль</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Обновляем состояние пароля
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
            </form>
        </div>
    );
};

export { Remix };
