import Service from "../../../service/service.js";
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
            <header>недвижимость/дарение</header>
            <div>
            <div onClick={gift}> дарение</div>
            <div onClick={confirmGift}> подтверждение дарения</div>
            <div onClick={cancelGift}> отмена дарения</div>
            </div>
            <div></div>
            <footer></footer>
        </div>
    );
};