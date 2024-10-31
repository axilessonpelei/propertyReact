import { useState } from "react";
import Service from "../../../service/service.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Deposit = () => {
    const [depositId, setDepositId] = useState(0);
    const [amount, setAmount] = useState(100);
    const [term, setTerm] = useState(500);

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
            <header className="mt-4"><h2>Недвижимость/Залог</h2></header>
            <div className="mt-4">
                <form onSubmit={(e) => { e.preventDefault(); deposit(); }}>
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

                <form onSubmit={(e) => { e.preventDefault(); takeInDeposit(); }} className="mt-4">
                    <div className="mb-3">
                        <label htmlFor="takeInId" className="form-label">ID объекта для вызова</label>
                        <input
                            type="number"
                            className="form-control"
                            id="takeInId"
                            value={depositId}
                            onChange={(e) => setDepositId(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-warning">Вызов объекта в залог</button>
                </form>

                <form onSubmit={(e) => { e.preventDefault(); confirmDeposit(); }} className="mt-4">
                    <div className="mb-3">
                        <label htmlFor="confirmId" className="form-label">ID подтверждения залога</label>
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

                <form onSubmit={(e) => { e.preventDefault(); cancelDepositOffer(); }} className="mt-4">
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

                <form onSubmit={(e) => { e.preventDefault(); repayDeposit(); }} className="mt-4">
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

                <form onSubmit={(e) => { e.preventDefault(); forecloseDeposit(); }} className="mt-4">
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
