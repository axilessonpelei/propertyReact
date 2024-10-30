import {Web3} from "web3";
import  abi from "./abi.json";

class Services{
    web3 = new Web3(window.ethereum)
    contractAddress = '0x4cFC1fF8a3e6dbf69c75c37364A00f7C808EBFb9'
    contract = new this.web3.eth.Contract(abi, this.contractAddress)
    wallet =''
//добавление недвижки
    async addProperty(_propertyId, _area){
        try{
            return await  this.contract.methods.addProperty(_propertyId,  _area).send({from: this.wallet})
        } catch(error){console.log(error)}
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

    //возврат средств при отказе
    async cancelSale (_saled){
        try{
            return  await this.contract.methods.cancelSale(_saled).send({from: this.wallet})
        } catch(error){console.log(error)}
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
    async forecloseDeposit (_depositId){
        try{
            return await this.contract.methods.forecloseDeposit(_depositId).send({from: this.wallet})
        } catch(error){console.log(error)}
    }

}
export default new Services();