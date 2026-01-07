export abstract class Account {
  private readonly name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposit: number): void => {
    if(this.validateStatus()){
      this.balance += deposit
      console.log('Voce depositou')
    }
  }

  withdraw = (withdraw: number): void => {
    if(this.validateBalance(withdraw) && this.validateStatus()){
      this.balance -= withdraw
      console.log("Você Sacou!")
    } else{
      console.log("Erro ao realizar o Saque!")
    }
    
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    return false
  }

  protected validateBalance = (withdraw: number): boolean => {
    if(withdraw < this.balance){
      return true
    }

    return false
  }
}
