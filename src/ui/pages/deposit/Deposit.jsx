import { useState } from "react";
import Service from "../../../service/service.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../component/header/Header.jsx";

export const Deposit = () => {
    const [depositId, setDepositId] = useState('');
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');
    const [propertyId, setPropertyId] = useState("");

    const takeInDeposit = async () => {
        await Service.takeInDeposit(depositId);
    }

    const deposit = async () => {
        await Service.createDepositOffer(0, amount, term);
    }

    const confirmDeposit = async () => {
        await Service.confirmDeposit(depositId);
    }

    const cancelDepositOffer = async () => {
        await Service.cancelDepositOffer(depositId);
    }

    const repayDeposit = async () => {
        await Service.repayDeposit(depositId);
    }

    const forecloseDeposit = async () => {
        await Service.forecloseDeposit(depositId);
    }

    return (
        <div className="container">
            <Header/>
            <header className="header mb-4">Недвижимость/Залог</header>
            <div className="mt-4">
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

            <footer className="mt-4"></footer>
        </div>
    );
};
