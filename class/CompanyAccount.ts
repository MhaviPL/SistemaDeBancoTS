import { Account } from "./Account";

export class CompanyAccount extends Account {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  //MÉTODO DE EMPRÉSTIMO
  getLoan = (loan: number): void => {
    if (this.validateStatus()) {
      this.deposit(loan);
      console.log("Voce pegou um empréstimo! \n");
    }
  };
}
