import {Web3} from "web3";
import  abi from "./abi.json";

class Services{
    web3 = new Web3(window.ethereum)
    contractAddress = '0xdC8718a41AA2bD3021447cA0a1dEC0A82F0CD1B1'
    contract = new this.web3.eth.Contract(abi, this.contractAddress)
    wallet =''
//добавление недвижки
    async addProperty(propertyType, area) {
        try {
            const typeAsBool = propertyType === "жилая";
            await this.contract.methods.addProperty(typeAsBool, area)
                .send({ from: this.wallet });
            return { propertyType, area };
        } catch (error) {
            console.log(error.message);
        }
    }
//создание продажи
    async createSale (_propertyId,_price, _timeAfter){
        try{
            return await this.contract.methods.createSale(_propertyId,_price, _timeAfter).send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }
//перевод средств покупателем
    async transferFunds (_saled){
        try{
            return  await this.contract.methods.transferFunds(_saled).send({from: this.wallet})
        } catch(error){console.log(error)}
    }
//подтверждение оплаты
    async confirmSale (_saled){
        try{
            return await  this.contract.methods.confirmSale(_saled).send({from: this.wallet})
        } catch(error){console.log(error)}
    }

    //отмена продажи
    async cancelSale (_saled){
        try{
            return  await this.contract.methods.cancelSale(_saled).send({from: this.wallet})
        } catch(error){console.log(error)}
    }

    //возврат при  отказе
    async refundFunds (_propertyId,_price, _timeAfter){
        try{
            return await this.contract.methods.refundFunds(_propertyId,_price, _timeAfter).send({from: this.wallet})
        } catch(error){
            console.log(error.message)
        }
    }

    // возврат средств при истечении
    async refundIfNotConfirmed (_saled){
        try{
            return  await this.contract.methods.refundIfNotConfirmed(_saled).send({from: this.wallet})
        } catch(error){console.log(error)}
    }

//дарение
    async createGift(_propertyId, _newOwner){
        try{
            return  await this.contract.methods.createGift(_propertyId, _newOwner).send({from: this.wallet})
        } catch(error){console.log(error)}
    }

    //подтверждение дарения
    async confirmGift (_giftId){
        try{
            return await this.contract.methods.confirmGift(_giftId).send({from: this.wallet})
        } catch(error){console.log(error)}
    }

    // отмена дарения
    async cancelGift (_giftId){
        try{
            return await this.contract.methods.cancelGift(_giftId).send({from: this.wallet})
        } catch(error){console.log(error)}
    }

//создания предложения по залогу
    async createDepositOffer(_propertyId, _amount, _depositPeriod){
        try{
            return await this.contract.methods.createDepositOffer(_propertyId, _amount, _depositPeriod).send({from: this.wallet})
        } catch(error){console.log(error)}
    }

    //взятие в залог
    async takeInDeposit (_depositId){
        try{
            return await this.contract.methods.takeInDeposit(_depositId).send({from: this.wallet})
        } catch(error){console.log(error)}
    }
    //подтверждение залога
    async confirmDeposit (_depositId){
        try{
            return await this.contract.methods.confirmDeposit(_depositId).send({from: this.wallet})
        } catch(error){console.log(error)}
    }

    //отмена залога
    async cancelDeposit (_depositId){
        try{
            return await this.contract.methods.cancelDeposit(_depositId).send({from: this.wallet})
        } catch(error){console.log(error)}
    }

    //возврат средств
    async cancelDepositOffer (_depositId){
        try{
            return await this.contract.methods.cancelDepositOffer(_depositId).send({from: this.wallet})
        } catch(error){console.log(error)}
    }
    //погашение залога
    async repayDeposit (_depositId){
        try{
            return await this.contract.methods.repayDeposit(_depositId).send({from: this.wallet})
        } catch(error){console.log(error)}
    }
    //переход собственности
    async transferProperty (_depositId){
        try{
            return await this.contract.methods.transferProperty(_depositId).send({from: this.wallet})
        } catch(error){console.log(error)}
    }

    //вывод продаж
    async getAllPropertys() {
        try {
            const allProperties = await this.contract.methods.getAllPropertys().call();
            return allProperties.filter(property => property.owner.toLowerCase() === this.wallet.toLowerCase());
        } catch (error) {
            console.error("Error fetching properties:", error);
            return [];
        }
    }

    async getAllSale() {
        try {
            return await this.contract.methods.getAllSale().call();
        } catch (error) {
            console.error(error);
        }
    }
    //вывод дарений
    async getAllGifts() {
        try {
            return await this.contract.methods.getAllGifts().call();
        } catch (error) {
            console.error(error);
        }
    }
    //вывод залогов
    async getAllDeposit() {
        try {
            return await this.contract.methods.getAllSale().call();
        } catch (error) {
            console.error(error);
        }
    }

}
export default new Services();