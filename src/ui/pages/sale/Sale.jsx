import { useState } from "react";
import Service from "../../../service/service.js";
import "bootstrap/dist/css/bootstrap.min.css";

export const Sale = () => {
    const [propertyId, setPropertyId] = useState("");
    const [price, setPrice] = useState("");
    const [timeAfter, setTimeAfter] = useState("");
    const [saleId, setSaleId] = useState("");

    const sale = async (e) => {
        e.preventDefault();
        await Service.createSale(propertyId, price, timeAfter);
    };

    const transferFunds = async (e) => {
        e.preventDefault();
        await Service.transferFunds(saleId);
    };

    const confirmSale = async (e) => {
        e.preventDefault();
        await Service.confirmSale(saleId);
    };

    const cancelSale = async (e) => {
        e.preventDefault();
        await Service.cancelSale(saleId);
    };

    const refundIfNotConfirmed = async (e) => {
        e.preventDefault();
        await Service.refundIfNotConfirmed(saleId);
    };

    return (
        <div className="container">
            <header className="header mb-4">Недвижимость/Продажа</header>

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
                    <label>Price</label>
                    <input
                        type="number"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Time After (in seconds)</label>
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
                <button type="submit" className="btn btn-warning">Отмена продажи</button>
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
                <button type="submit" className="btn btn-danger">Отмена при истечении</button>
            </form>
        </div>
    );
};
