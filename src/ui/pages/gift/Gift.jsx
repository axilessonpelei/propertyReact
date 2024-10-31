import { useState } from "react";
import Service from "../../../service/service.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../component/header/Header.jsx";
export const Gift = () => {
    const [giftId, setGiftId] = useState(0);
    const [cancelId, setCancelId] = useState(0);
    const [confirmId, setConfirmId] = useState(0);
    const [newOwner, setNewOwner] = useState("");

    const createGift = async (e) => {
        e.preventDefault();
        await Service.createGift(giftId, newOwner);

    }

    const cancelGift = async () => {
        await Service.cancelGift(cancelId);
    }

    const confirmGift = async () => {
        await Service.confirmGift(confirmId);

    }

    return (
        <div className="container">
            <Header/>
            <header className="header mb-4">Недвижимость/Дарение</header>

            <div className="mt-4">
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
                        <label> адресс нового владельца</label>
                        <input
                            type="text"
                            className="form-control"
                            value={newOwner}
                            onChange={(e) => setNewOwner(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">подарить</button>
                </form>

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

                <form onSubmit={cancelGift} className="mb-3" >
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

            <footer className="mt-4"></footer>
        </div>
    );
};