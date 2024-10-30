import Header from "../../component/header/Header.jsx";
import Footer from "../../component/footer/Footer.jsx";
import Service from "../../../service/service.js";
export const Property = () => {
    const handlerData = async () => {
        Service.addProperty(true, 213)
    }
    return (
        <div>
           <Header />
            <div>
                <div onClick={handlerData}>добавление недвижки</div>
            </div>
            <Footer/>
        </div>
    );
};