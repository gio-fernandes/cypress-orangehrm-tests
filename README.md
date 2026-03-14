# Testes E2E com Cypress | OrangeHRM

Projeto de **automação de testes End-to-End (E2E)** utilizando **Cypress** na aplicação de demonstração **OrangeHRM**.
O objetivo deste projeto é validar os principais fluxos de autenticação da aplicação, aplicando boas práticas de **automação de testes, organização de testes e registro de defeitos**.

<p align="left">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="40" height="40"/>

</p>

---

# Objetivo:
Validar o funcionamento do fluxo de autenticação da aplicação OrangeHRM através de testes automatizados, garantindo que:

- usuários consigam realizar login com credenciais válidas
- erros sejam exibidos corretamente em cenários inválidos
- o sistema trate corretamente o logout da sessão

---

# Cenários de teste automatizados:

Os seguintes cenários foram implementados:

- Login com credenciais válidas
- Login com senha incorreta
- Login com usuário inválido
- Validação de campos obrigatórios
- Logout do sistema

----

# Estratégia de testes:

Os testes foram desenvolvidos utilizando **Cypress** para validar os fluxos críticos da aplicação.

Tipos de testes aplicados:

- Testes E2E (End-to-End)
- Testes positivos
- Testes negativos
- Validação de respostas HTTP
- Testes com dados externos (fixtures)

----

# Cobertura dos testes:

Os testes automatizados cobrem os seguintes fluxos da aplicação:

- Autenticação de usuário
- Validação de credenciais
- Controle de sessão
- Encerramento de sessão (logout)

----

# Bug encontrado 🐞 

Durante a execução dos testes automatizados foi identificado o seguinte comportamento:

**Logout continua executando requisições para endpoints protegidos retornando 401**

O registro completo do defeito pode ser consultado em:

📄 [Bug Report](./cypress-orangehrm/bug-report.md)

----

🌸 Desenvolvido por Giovanna Fernandes

Estudante de **Sistemas de Informação**  

Focada em **Quality Assurance (QA)**

