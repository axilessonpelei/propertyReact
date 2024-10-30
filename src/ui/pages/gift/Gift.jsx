import Service from "../../../service/service.js";
import Header from "../../component/header/Header.jsx";
import Footer from "../../component/footer/Footer.jsx";

export const Gift = () => {
    const gift = async () => {
        Service.createGift(5, 0)
    }

    const cancelGift = async () => {
        Service.cancelGift(3)
    }

    const confirmGift = async () => {
        Service.confirmGift(3)
    }
    return (
        <div>
            <Header/>
            <div>
            <div onClick={gift}> дарение</div>
            <div onClick={confirmGift}> подтверждение дарения</div>
            <div onClick={cancelGift}> отмена дарения</div>
            </div>
            <div></div>
            <Footer/>
        </div>
    );
};