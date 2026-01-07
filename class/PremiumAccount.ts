import { Account } from "./Account";

export class PremiumAccount extends Account {

  //MÉTODO DE DEPÓSITO PREMIUM + 10 DE BÔNUS
  deposit = (deposit: number): void => {
    if (this.validateStatus()) {
      super.deposit(deposit + 10);
      console.log("Depósito premium realizado! \n");
    }
  };
}
