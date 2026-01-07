import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'João', 10)

const companyAccount: CompanyAccount = new CompanyAccount('AbacatePay', 20)

const premiumAccount: PremiumAccount = new PremiumAccount('Enzo', 2000)
