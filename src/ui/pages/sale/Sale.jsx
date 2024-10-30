import Service from "../../../service/service.js";
import Header from "../../component/header/Header.jsx";
import Footer from "../../component/footer/Footer.jsx";

export const Sale = () => {

    const sale = async () => {
        await Service.createSale(5, 100, 500)
    }

    const transferFunds = async () => {
        Service.transferFunds(4)
    }
    const confirmSale = async () => {
        Service.confirmSale(3)
    }
    const cancelSale = async () => {
        Service.cancelSale(3)
    }
    const refundIfNotConfirmed = async () => {
        Service.refundIfNotConfirmed(3)
    }
    return (
        <div>
            <Header/>
            <div>
            <div onClick={sale}> выставить на продажу</div>
            <div onClick={transferFunds}> перевод средств</div>
            <div onClick={confirmSale}> подверждение перевода</div>
            <div onClick={cancelSale}> отмена при отмене продажи</div>
            <div onClick={refundIfNotConfirmed}> отмена при истечении срока продажи</div>
            </div>
            <div>
                тут выводятся сами карточки которые находятся на продаже
            </div>
            <Footer/>
        </div>
    );
};