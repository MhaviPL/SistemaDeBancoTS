# Sistema de Banco em TypeScript

Este projeto consiste em uma simulação de sistema bancário desenvolvida para exercitar conceitos fundamentais da Programação Orientada a Objetos (POO) utilizando TypeScript.

O projeto foi estruturado focando na utilização dos 4 fundamentos de POO: Abstração, Herança, Encapsulamento e Polimorfismo.

## Estrutura do Projeto

* `class/Account.ts`: Classe abstrata pai com a lógica central de depósitos e saques.
* `class/PeopleAccount.ts`: Especialização para pessoas físicas com identificação por documento.
* `class/CompanyAccount.ts`: Especialização para contas empresariais com lógica de empréstimo.
* `class/PremiumAccount.ts`: Especialização com benefícios de depósito e uso de polimorfismo.
* `app.ts`: Ponto de entrada configurado com cenários de teste para validar todas as funcionalidades e restrições.

## Como rodar o projeto

1. Clone o repositório em sua máquina local.
2. Certifique-se de ter o Node.js instalado.
3. Instale as dependências executando o comando:
```bash
npm install

```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev

```

## Créditos

Este projeto é uma resolução de um exercício criado por https://github.com/nathsouzadev 
Repositório do exércício: https://github.com/digitalinnovationone/desafio01-ts.git




