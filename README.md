# 🎰 Apostas Compulsivas (Case 1)

## 🧠 Sobre o Problema

O vício em apostas — ou transtorno do jogo — é reconhecido pela **Organização Mundial da Saúde (OMS)** como um transtorno de saúde mental que compromete o autocontrole do indivíduo.  
Suas consequências podem ser devastadoras, incluindo:

- Endividamento  
- Rupturas familiares  
- Depressão e ansiedade  
- Risco de suicídio  

De forma alarmante, a maioria das pessoas afetadas **não busca ajuda**, seja por vergonha, estigma ou desconhecimento. Isso cria um ciclo de impulsividade e autodestruição que se repete silenciosamente.

---

## 🎯 Nossa Proposta

Diante desse cenário, propomos uma **solução tecnológica e educativa integrada**, indo muito além do simples bloqueio de sites. Nosso objetivo é desenvolver um sistema inteligente que seja capaz de:

### 🧠 1. Detectar Comportamentos Compulsivos

Utilizando algoritmos de **machine learning**, o sistema identificará padrões de uso, frequência de apostas e gatilhos emocionais.

### 🤝 2. Conectar o Usuário a uma Rede de Apoio

Incluindo:

- Profissionais de saúde mental  
- Grupos de terapia  
- Atendimentos emergenciais

### 📚 3. Promover Educação Comportamental e Financeira

Com recursos como:

- Conteúdo interativo  
- Trilhas de reabilitação  
- Relatórios de progresso  
- Simulações de como o dinheiro gasto poderia ser investido

##  Tela de Cadastro e Validação de Usuário

vídeo demostrativo: https://www.youtube.com/watch?v=-WHlevglnhs

projeto no figma: https://www.figma.com/design/RCdjn9juYXLMp57SQPfymv/sprint-xp?node-id=0-1&t=Qc1rs3WdL7C4zsBR-1

Neste projeto, implementamos um sistema de **autenticação e cadastro de usuários** com backend em **Spring Boot** e banco de dados **H2**.

### 🔐 Funcionalidades da API

- **Cadastro de usuários**: armazena os campos `nome`, `username` e `senha`.
- **Login**: valida as credenciais do usuário (`username` e `senha`) e permite o acesso à conta.

### 📦 Link para baixar a API via Docker:
docker pull gui2604/sf-compulsory:v1.0.1

## 💡 Nossa Solução

Após realizar o login, o usuário é direcionado para a tela principal da sua conta. Nessa tela, ele encontra:

- Um **botão de acesso à "Tela de Investimentos"**, onde:
  - É exibido o valor total apostado no mês.
  - O usuário pode visualizar o **valor estimado que teria se tivesse investido** o dinheiro apostado.
  - Existe um botão que direciona o usuário a **recursos de apoio psicológico** contra o vício em apostas.

### ⚠️ Classificação de Risco

A aplicação classifica automaticamente o comportamento do usuário com base no valor apostado, em três níveis:

- 🟢 **Leve**
- 🟡 **Moderado**
- 🔴 **Alto**

Essa classificação altera dinamicamente o **layout da interface**, ajustando:

- A **cor da tela**
- O **texto e o seu tamanho**
- O **destaque do botão de ajuda psicológica**

Essa abordagem visa **estimular a conscientização** e **encorajar o usuário a abandonar o vício em apostas**, incentivando práticas mais saudáveis, como o investimento financeiro.

---
