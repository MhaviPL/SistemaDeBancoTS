import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'


// --- CENÁRIO 1: PeopleAccount (Conta Pessoa Física) ---
// Herança e Getters
console.log('--- Testando PeopleAccount ---')
const people = new PeopleAccount(1, 'João Silva', 10)
people.deposit(150)
people.withdraw(50)
console.log(`Cliente: ${people.getName()} | Saldo final validado.`) 

// --- CENÁRIO 2: CompanyAccount (Empréstimo e Regras de Negócio) ---
// Métodos específicos de subclasses
console.log('\n--- Testando CompanyAccount ---')
const company = new CompanyAccount('AbacatePay', 20)
company.getLoan(1000) // Chama deposit internamente
console.log(company.getBalance()) 

// --- CENÁRIO 3: PremiumAccount (Poliomorfismo e Super) ---
// Sobrescrita de métodos com bónus
console.log('\n--- Testando PremiumAccount ---')
const premium = new PremiumAccount('Enzo Premium', 30)
premium.deposit(100) 

// O saldo total deve ser 110 (100 + 10 de bónus)
console.log(premium.getBalance()) 

// --- CENÁRIO 4: Validação de Segurança (O que não deve acontecer) ---
// Demonstrando que o sistema é respeita o encapsulamento

// people.balance = 10000; // ❌ Erro: Propriedade 'balance' é privada.
// console.log(people.status); // ❌ Erro: Propriedade 'status' é privada.

console.log('\n--- Testando Restrições (Segurança) ---')

console.log('Tentativa de saque maior que o saldo:')
people.withdraw(500) // Deve cair no "Erro ao realizar o Saque!"

