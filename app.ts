import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'João', 10)

const companyAccount: CompanyAccount = new CompanyAccount('AbacatePay', 20)
companyAccount.getLoan(56)
console.log(companyAccount)