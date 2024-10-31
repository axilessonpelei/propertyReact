import { useState } from "react";
import Service from "../../../service/service.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Gift = () => {
    const [giftId, setGiftId] = useState(0);
    const [cancelId, setCancelId] = useState(0);
    const [confirmId, setConfirmId] = useState(0);

    const gift = async () => {
        await Service.createGift(giftId, 0);
        // Optionally, handle success or error feedback
    }

    const cancelGift = async () => {
        await Service.cancelGift(cancelId);
        // Optionally, handle success or error feedback
    }

    const confirmGift = async () => {
        await Service.confirmGift(confirmId);

    }

    return (
        <div className="container">
            <header className="mt-4"><h2>Недвижимость/Дарение</h2></header>

            <div className="mt-4">
                <form onSubmit={(e) => { e.preventDefault(); gift(); }}>
                    <div className="mb-3">
                        <label htmlFor="giftId" className="form-label">ID подарка</label>
                        <input
                            type="number"
                            className="form-control"
                            id="giftId"
                            value={giftId}
                            onChange={(e) => setGiftId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Дарение</button>
                </form>

                <form onSubmit={(e) => { e.preventDefault(); confirmGift(); }} className="mt-4">
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

                <form onSubmit={(e) => { e.preventDefault(); cancelGift(); }} className="mt-4">
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