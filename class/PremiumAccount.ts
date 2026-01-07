import { Account } from './Account'

export class PremiumAccount extends Account{

    deposit = (deposit: number): void => {
      if(this.validateStatus()){
        this.balance += (deposit + 10)
      }  
    }
}