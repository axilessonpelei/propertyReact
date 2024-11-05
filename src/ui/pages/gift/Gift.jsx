import { useState, useEffect } from "react";
import Service from "../../../service/service.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../component/header/Header.jsx";

export const Gift = () => {
    const [giftId, setGiftId] = useState(0);
    const [cancelId, setCancelId] = useState(0);
    const [confirmId, setConfirmId] = useState(0);
    const [newOwner, setNewOwner] = useState("");
    const [giftedProperties, setGiftedProperties] = useState([]); // Состояние для хранения списка подаренных объектов

    // Функция для создания подарка
    const createGift = async (e) => {
        e.preventDefault();
        await Service.createGift(giftId, newOwner);
        fetchGiftedProperties(); // После создания подарка, обновляем список подаренных объектов
    };

    // Функция для отмены подарка
    const cancelGift = async () => {
        await Service.cancelGift(cancelId);
        fetchGiftedProperties(); // После отмены подарка, обновляем список
    };

    // Функция для подтверждения подарка
    const confirmGift = async () => {
        await Service.confirmGift(confirmId);
        fetchGiftedProperties(); // После подтверждения подарка, обновляем список
    };

    // Загрузка списка подаренных объектов
    const fetchGiftedProperties = async () => {
        const properties = await Service.getGiftedProperties(); // Получаем список с сервера
        setGiftedProperties(properties);
    };

    // Загрузка подаренной недвижимости при монтировании компонента
    useEffect(() => {
        fetchGiftedProperties(); // Загрузка списка при монтировании компонента
    }, []);

    return (
        <div className="container">
            <Header />
            <header className="header mb-4">Недвижимость/Дарение</header>

            <div className="mt-4">
                {/* Форма для создания подарка */}
                <form onSubmit={createGift} className="mb-3">
                    <h5>Подарить недвижимость</h5>
                    <div className="form-group">
                        <label>Property ID</label>
                        <input
                            type="number"
                            className="form-control"
                            value={giftId}
                            onChange={(e) => setGiftId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Адрес нового владельца</label>
                        <input
                            type="text"
                            className="form-control"
                            value={newOwner}
                            onChange={(e) => setNewOwner(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Подарить</button>
                </form>

                {/* Форма для подтверждения подарка */}
                <form onSubmit={confirmGift} className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="confirmId" className="form-label">ID подтверждения подарка</label>
                        <input
                            type="number"
                            className="form-control"
                            id="confirmId"
                            value={confirmId}
                            onChange={(e) => setConfirmId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Подтверждение дарения</button>
                </form>

                {/* Форма для отмены подарка */}
                <form onSubmit={cancelGift} className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="cancelId" className="form-label">ID отмены подарка</label>
                        <input
                            type="number"
                            className="form-control"
                            id="cancelId"
                            value={cancelId}
                            onChange={(e) => setCancelId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-danger">Отмена дарения</button>
                </form>
            </div>

            <div className="mt-4">
                {/* Секция с подаренными объектами */}
                <h4>Подаренные объекты</h4>
                <div className="row">
                    {giftedProperties.length > 0 ? (
                        giftedProperties.map((property) => (
                            <div key={property.propertyId} className="col-12 col-md-4">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Недвижимость ID: {property.propertyId}</h5>
                                        <p className="card-text">Новый владелец: {property.newOwner}</p>
                                        <p className="card-text">Статус: {property.status}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Подаренных объектов нет.</p>
                    )}
                </div>
            </div>

            <footer className="mt-4"></footer>
        </div>
    );
};
