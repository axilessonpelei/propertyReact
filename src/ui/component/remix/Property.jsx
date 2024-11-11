import {useEffect, useState} from "react";
import Service from "../../../service/service.js";
import "bootstrap/dist/css/bootstrap.min.css";

export const Property = () => {
    const [propertyType, setPropertyType] = useState("");
    const [area, setArea] = useState("");
    const [properties, setProperties] = useState([]); // Состояние для хранения добавленных объектов недвижимости

    // Функция для загрузки недвижимости пользователя
    const getPropertiesByOwner = async () => {
        const userProperties = await Service.getPropertiesByOwner(); // Получаем все объекты недвижимости пользователя
        const updatedProperties = userProperties.map((property) => {
            // Определяем статус недвижимости в зависимости от состояния флагов
            let status = "Доступна";
            if (property.forSale) {
                status = "Продается";
            } else if (property.deposit) {
                status = "В залоге";
            } else if (property.gifted) {
                status = "В дарении";
            }
            return { ...property, status };
        });
        setProperties(updatedProperties);

    };

    useEffect(() => {
        getPropertiesByOwner();

    }, []);


    // Функция для добавления недвижимости
    const addProperty = async (e) => {
        e.preventDefault();
        const newProperty = await Service.addProperty(propertyType, area); // Добавляем недвижимость через сервис
        setProperties([...properties, { ...newProperty, status: "Доступна" }]);
        setArea(""); // Сбрасываем поле площади
        setPropertyType(""); // Сбрасываем тип недвижимости
        getPropertiesByOwner()
    };


    const handler = async () => {
        await window.ethereum.request({method:'eth_requestAccounts'}).then((response) => {
            console.log(response[0]);
            Service.wallet = response[0]
            console.log(Service.wallet);
        })
    }

    return (
        <div className="container">
            <button className="btn btn-primary" onClick={handler}> авторизоваться</button>
            <form onSubmit={addProperty} className="mb-3">
                <h5>Добавить недвижимость</h5>
                <div className="form-group">
                    <label>Площадь недвижимости</label>
                    <input
                        type="number"
                        className="form-control"
                        value={area}
                        onChange={(e) => setArea(e.target.value)} // Обновляем состояние площади
                        required
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={propertyType === "жилая"}
                        onChange={(e) => setPropertyType(e.target.checked ? "жилая" : "")} // Обновляем состояние типа недвижимости
                    />
                    <label className="form-check-label">
                        Жилая недвижимость
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Добавить недвижимость</button>
            </form>

            {/* Отображение карточек с недвижимостью */}
            <div className="row">
                {properties.map((property) => (
                    <div key={property.propertyId} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Недвижимость ID: {property.propertyId}</h5>
                                <p className="card-text">Площадь: {property.area} м²</p>
                                <p className="card-text">Тип: {property.propertyType}</p>
                                <p className="card-text">Статус: {property.status}</p> {/* Отображаем статус */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

