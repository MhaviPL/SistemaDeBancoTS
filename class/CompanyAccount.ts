import { Account } from "./Account"

export class CompanyAccount extends Account {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): void => {
    if(this.validateStatus()){
      this.balance += loan
      console.log('Voce pegou um empréstimo!')
    }
  }


  
}
