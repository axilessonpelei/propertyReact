import { useState, useEffect } from "react";
import Service from "../../../service/service.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../component/header/Header.jsx";

export const Deposit = () => {
    const [depositId, setDepositId] = useState('');
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');
    const [propertyId, setPropertyId] = useState('');
    const [depositedProperties, setDepositedProperties] = useState([]);  // Состояние для хранения недвижимости в залоге

    // Функция для получения недвижимости в залоге
    const fetchDepositedProperties = async () => {
        const properties = await Service.getDepositedProperties();  // Предполагаем, что есть такой метод
        setDepositedProperties(properties);
    };

    // Загружаем недвижимость при монтировании компонента
    useEffect(() => {
        fetchDepositedProperties();
    }, []);

    // Функция для создания залога
    const deposit = async (e) => {
        e.preventDefault();
        await Service.createDepositOffer(propertyId, amount, term);  // Отправляем запрос на создание залога
        fetchDepositedProperties();  // Обновляем список недвижимости в залоге
    };

    // Функции для разных операций с залогами
    const takeInDeposit = async (e) => {
        e.preventDefault();
        await Service.takeInDeposit(depositId);
        fetchDepositedProperties();  // Обновляем список
    };

    const confirmDeposit = async (e) => {
        e.preventDefault();
        await Service.confirmDeposit(depositId);
        fetchDepositedProperties();  // Обновляем список
    };

    const cancelDepositOffer = async (e) => {
        e.preventDefault();
        await Service.cancelDepositOffer(depositId);
        fetchDepositedProperties();  // Обновляем список
    };

    const repayDeposit = async (e) => {
        e.preventDefault();
        await Service.repayDeposit(depositId);
        fetchDepositedProperties();  // Обновляем список
    };

    const forecloseDeposit = async (e) => {
        e.preventDefault();
        await Service.forecloseDeposit(depositId);
        fetchDepositedProperties();  // Обновляем список
    };

    return (
        <div className="container">
            <Header />
            <header className="header mb-4">Недвижимость/Залог</header>
            <div className="mt-4">
                {/* Форма для создания залога */}
                <form onSubmit={deposit}>
                    <div className="form-group">
                        <label>Property ID</label>
                        <input
                            type="number"
                            className="form-control"
                            value={propertyId}
                            onChange={(e) => setPropertyId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Сумма залога</label>
                        <input
                            type="number"
                            className="form-control"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="term" className="form-label">Срок залога</label>
                        <input
                            type="number"
                            className="form-control"
                            id="term"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Сдача в залог</button>
                </form>

                {/* Форма для операции с залогом */}
                <form onSubmit={takeInDeposit} className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="takeInId" className="form-label">ID залога</label>
                        <input
                            type="number"
                            className="form-control"
                            id="takeInId"
                            value={depositId}
                            onChange={(e) => setDepositId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-warning">Взять объект в залог</button>
                </form>

                <form onSubmit={confirmDeposit} className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="confirmId" className="form-label">ID залога</label>
                        <input
                            type="number"
                            className="form-control"
                            id="confirmId"
                            value={depositId}
                            onChange={(e) => setDepositId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Подтверждение залога</button>
                </form>

                <form onSubmit={cancelDepositOffer} className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="cancelId" className="form-label">ID для отмены залога</label>
                        <input
                            type="number"
                            className="form-control"
                            id="cancelId"
                            value={depositId}
                            onChange={(e) => setDepositId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-danger">Возврат средств при отмене залога</button>
                </form>

                <form onSubmit={repayDeposit} className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="repayId" className="form-label">ID для погашения залога</label>
                        <input
                            type="number"
                            className="form-control"
                            id="repayId"
                            value={depositId}
                            onChange={(e) => setDepositId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-info">Погашение залога</button>
                </form>

                <form onSubmit={forecloseDeposit} className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="forecloseId" className="form-label">ID для перехода собственности</label>
                        <input
                            type="number"
                            className="form-control"
                            id="forecloseId"
                            value={depositId}
                            onChange={(e) => setDepositId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary">Переход собственности</button>
                </form>
            </div>

            {/* Отображение недвижимости в залоге */}
            <div className="mt-4">
                <h4>Недвижимость в залоге</h4>
                <div className="row">
                    {depositedProperties.length > 0 ? (
                        depositedProperties.map((property) => (
                            <div key={property.propertyId} className="col-12 col-md-4">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Недвижимость ID: {property.propertyId}</h5>
                                        <p className="card-text">Сумма залога: {property.amount}</p>
                                        <p className="card-text">Срок: {property.term} дней</p>
                                        <p className="card-text">Статус: {property.status}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>На данный момент заложенной недвижимости нет.</p>
                    )}
                </div>
            </div>

            <footer className="mt-4"></footer>
        </div>
    );
};
