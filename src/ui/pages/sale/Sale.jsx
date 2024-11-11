import { useState, useEffect } from "react";
import Service from "../../../service/service.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../component/header/Header.jsx";
import Footer from "../../component/footer/Footer.jsx";

export const Sale = () => {
    const [propertyId, setPropertyId] = useState("");
    const [price, setPrice] = useState("");
    const [timeAfter, setTimeAfter] = useState("");
    const [saleId, setSaleId] = useState("");
    const [propertiesForSale, setPropertiesForSale] = useState([]); // Состояние для списка недвижимости на продаже


    // Загрузка списка подаренных объектов
    const getAllSale = async () => {
        const properties = await Service.getAllSale(); // Получаем список с сервера
        setPropertiesForSale(properties);
    };
    // Загружаем недвижимость при монтировании компонента
    useEffect(() => {
        getAllSale();
    }, [])

    // Функция для выставления недвижимости на продажу
    const sale = async (e) => {
        e.preventDefault();
        const newSale = await Service.createSale(propertyId, price, timeAfter);
        setPropertiesForSale([...propertiesForSale, { ...newSale, status: 'Продается' }]);
        getAllSale()
    };

    // Функция для перевода средств
    const transferFunds = async (e) => {
        e.preventDefault();
        await Service.transferFunds(saleId);
        getAllSale()
    };

    // Функция для подтверждения продажи
    const confirmSale = async (e) => {
        e.preventDefault();
        const updatedProperty = await Service.confirmSale(saleId);
        updatePropertyStatus(updatedProperty, 'Продано');
        getAllSale()
    };

    // Функция для отмены продажи
    const cancelSale = async (e) => {
        e.preventDefault();
        const updatedProperty = await Service.cancelSale(saleId);
        updatePropertyStatus(updatedProperty, 'Отменено');
        getAllSale()
    };


    // Функция для возврата средств, если продажа не подтверждена
    const refundIfNotConfirmed = async (e) => {
        e.preventDefault();
        const updatedProperty = await Service.refundIfNotConfirmed(saleId);
        updatePropertyStatus(updatedProperty, 'Возвращено');
        getAllSale()
    };


    // возврат при отмене
    const refundFunds = async (e) => {
        e.preventDefault();
        const updatedProperty = await Service.refundFunds(saleId);
        updatePropertyStatus(updatedProperty, 'Возвращено');
        getAllSale()
    };

    // Обновление статуса недвижимости в списке
    const updatePropertyStatus = (updatedProperty, newStatus) => {
        setPropertiesForSale(propertiesForSale.map(property =>
            property.propertyId === updatedProperty.propertyId
                ? { ...property, status: newStatus }
                : property
        ));
    };



    return (
        <div className='ccont'>
            <Header/>
            <div className="container">

                <form onSubmit={sale} className="mb-3">
                    <h5>Выставить на продажу</h5>
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
                    <div className="form-group">
                        <label>Цена</label>
                        <input
                            type="number"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Время через (в секундах)</label>
                        <input
                            type="number"
                            className="form-control"
                            value={timeAfter}
                            onChange={(e) => setTimeAfter(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Выставить на продажу</button>
                </form>


                <form onSubmit={transferFunds} className="mb-3">
                    <h5>Перевод средств</h5>
                    <div className="form-group">
                        <label>Sale ID</label>
                        <input
                            type="number"
                            className="form-control"
                            value={saleId}
                            onChange={(e) => setSaleId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Перевод средств</button>
                </form>

                <form onSubmit={confirmSale} className="mb-3">
                    <h5>Подтверждение перевода</h5>
                    <div className="form-group">
                        <label>Sale ID</label>
                        <input
                            type="number"
                            className="form-control"
                            value={saleId}
                            onChange={(e) => setSaleId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Подтверждение перевода</button>
                </form>

                <form onSubmit={cancelSale} className="mb-3">
                    <h5>Отмена при отмене продажи</h5>
                    <div className="form-group">
                        <label>Sale ID</label>
                        <input
                            type="number"
                            className="form-control"
                            value={saleId}
                            onChange={(e) => setSaleId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Отмена продажи</button>
                </form>

                <form onSubmit={refundFunds} className="mb-3">
                    <h5>Отмена при истечении срока продажи</h5>
                    <div className="form-group">
                        <label>Sale ID</label>
                        <input
                            type="number"
                            className="form-control"
                            value={saleId}
                            onChange={(e) => setSaleId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">возврат средств при омене продажи</button>
                </form>

                <form onSubmit={refundIfNotConfirmed} className="mb-3">
                    <h5>Отмена при истечении срока продажи</h5>
                    <div className="form-group">
                        <label>Sale ID</label>
                        <input
                            type="number"
                            className="form-control"
                            value={saleId}
                            onChange={(e) => setSaleId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">возврат средств при истечении продажи</button>
                </form>

                <h4>Продажа недвижимости</h4>
                <div className="row">
                    {propertiesForSale.map((property) => (
                        <div key={property.propertyId} className="col-12 col-md-4">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Недвижимость ID: {property.propertyId}</h5>
                                    <p className="card-text">Цена: {property.price} р.</p>
                                    {<p className="card-text">Статус: {property.sale}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};
