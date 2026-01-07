export abstract class Account {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  //MÉTODO QUE RETORNA O NOME
  getName(): string {
    return this.name;
  }

  //MÉTODO QUE RETORNA O SALDO
  getBalance(): number {
    return this.balance;
  }

  //MÉTODO DE DEPÓSITO
  deposit(deposit: number): void {
    if (this.validateStatus()) {
      this.balance += deposit;
      console.log("Voce depositou! \n");
    }
  }

  //MÉTODO DE SAQUE
  withdraw(withdraw: number): void {
    if (this.hasEnoughBalance(withdraw) && this.validateStatus()) {
      this.balance -= withdraw;
      console.log("Você Sacou! \n");
    } else {
      console.log("Erro ao realizar o Saque! \n");
    }
  }

  //VALIDAÇÃO DE STATUS
  protected validateStatus(): boolean {
    if (this.status) {
      return this.status;
    }

    return false;
  }

  //VALIDAÇÃO DE SALDO SUFICIENTE PARA SAQUE
  protected hasEnoughBalance(withdraw: number): boolean {
    if (withdraw <= this.balance) {
      return true;
    }

    return false;
  }
}
