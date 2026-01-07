import { Account } from './Account'

export class PremiumAccount extends Account{

    deposit = (deposit: number): void => {
      if(this.validateStatus()){
        super.deposit(deposit+10)
        console.log("Depósito premium realizado!")
      }  
    }
}