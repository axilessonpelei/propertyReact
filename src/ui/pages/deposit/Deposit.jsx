import Service from "../../../service/service.js";
import Header from "../../component/header/Header.jsx";
import Footer from "../../component/footer/Footer.jsx";

export const Deposit = () => {
    const takeInDeposit = async () => {
        Service.takeInDeposit(3)
    }
    const deposit = async () => {
        Service.createDepositOffer(0, 100, 500)
    }

    const confirmDeposit = async () => {
        Service.confirmDeposit(3)
    }

    const cancelDepositOffer = async () => {
        Service.cancelDepositOffer(3)
    }

    const repayDeposit = async () => {
        Service.repayDeposit(3)
    }

    const forecloseDeposit = async () => {
        Service.forecloseDeposit(3)
    }


    return (
        <div>
            <Header/>
            <div>
                <div onClick={deposit}> сдача в залог</div>
                <div onClick={takeInDeposit}> вызтие объекта в залог</div>
                <div onClick={confirmDeposit}> подтверждение залога</div>
                <div onClick={cancelDepositOffer}>возврат средств при отмене залога</div>
                <div onClick={repayDeposit}>погашение залога</div>
                <div onClick={forecloseDeposit}>переход собственности</div>
            </div>
            <div></div>
            <Footer/>
        </div>
    );
};