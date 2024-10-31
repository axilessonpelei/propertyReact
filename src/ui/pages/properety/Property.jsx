import { useState } from "react";
import Service from "../../../service/service.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../component/header/Header.jsx";

export const Property = () => {
    const [propertyType, setPropertyType] = useState("");
    const [area, setArea] = useState("");

    const property = async (e) => {
        e.preventDefault();
        await Service.addProperty(propertyType, area);
    };
    return (
        <div className="container">
            <Header/>
            <header className="header mb-4">Недвижимость</header>
            <form onSubmit={property} className="mb-3">
                <h5>добавить недвижимость</h5>
                <div className="form-group">
                    <label> площадь недвижимости</label>
                    <input
                        type="number"
                        className="form-control"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                    />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                           value={propertyType}
                           onChange={(e) => setPropertyType(e.target.value)}
                           required
                    />
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                        недвижимость жилая
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">добавить недвижимость</button>
            </form>
        </div>
    );
};