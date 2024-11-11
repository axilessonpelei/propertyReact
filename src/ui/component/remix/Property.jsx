import { useEffect, useState } from "react";
import Service from "../../../service/service.js";
import "bootstrap/dist/css/bootstrap.min.css";

export const Property = () => {
    const [propertyType, setPropertyType] = useState("");
    const [area, setArea] = useState("");
    const [properties, setProperties] = useState([]);


    const getAllPropertys = async () => {
        const userProperties = await Service.getAllPropertys();
        setProperties(userProperties);
    };


    useEffect(() => {
        getAllPropertys();
    }, []);


    const addProperty = async (e) => {
        e.preventDefault();
        const newProperty = await Service.addProperty(propertyType, area);
        setProperties([...properties, { ...newProperty, propertyType, status: "Доступна" }]);
        setArea("");
        setPropertyType("");
        await getAllPropertys();
    };


    const handler = async () => {
        await window.ethereum.request({ method: "eth_requestAccounts" }).then((response) => {
            console.log("Connected account:", response[0]);
            Service.wallet = response[0];
            getAllPropertys();
        });
    };

    return (
        <div className="container">
            <button className="btn btn-primary" onClick={handler}>Авторизоваться</button>
            <form onSubmit={addProperty} className="mb-3">
                <h5>Добавить недвижимость</h5>
                <div className="form-group">
                    <label>Площадь недвижимости</label>
                    <input
                        type="number"
                        className="form-control"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={propertyType === "жилая"}
                        onChange={(e) => setPropertyType(e.target.checked ? "жилая" : "нежилая")}
                    />
                    <label className="form-check-label">
                        Жилая недвижимость
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Добавить недвижимость</button>
            </form>

            <div>
                {properties.map((property, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title">Недвижимость ID: {property.propertyId.toString()}</p>
                                <p className="card-text">Площадь: {property.area.toString()} м²</p>
                                <p className="card-text">Тип: {property.propertyType.toString() ? "Жилая" : "Нежилая"}</p>
                                <p className="card-text">Продажа: {property.forSale.toString()}</p>
                                <p className="card-text">Дарение: {property.gifted.toString()}</p>
                                <p className="card-text">Залог: {property.deposit.toString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
