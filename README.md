# 🎤 Integração Flutter com API Google Gemini (Texto → Objeto → Banco de Dados)

Projeto desenvolvido em parceria com a **Faculdade Unimar** e a empresa **Dsin** com o objetivo de integrar um front-end em **Flutter** utilizando a biblioteca `speech_to_text` a uma API que converte texto em objeto utilizando a **API Google Gemini**, armazenando os dados em um banco de dados.

> O back-end foi implementado em **TypeScript**, visando integração com sistemas da empresa desenvolvidos em **Java**, **C# (.NET Core)** e **PHP (Laravel)**. A comunicação entre os serviços utiliza **RabbitMQ** e/ou **Kafka** para gerenciamento de filas.

---

## 🚀 Instruções de Configuração

### 1️⃣ Obtenha sua chave da API Gemini

Acesse o link abaixo para gerar sua chave de API:  
🔗 [Gerar chave Google Gemini](https://aistudio.google.com/apikey)

![Gerar chave Gemini](https://github.com/user-attachments/assets/518d8c3f-2c1b-4518-ac0b-76cb852d49f5)

---

### 2️⃣ Crie o arquivo `.env`

Na raiz do projeto, crie um arquivo chamado `.env` e adicione a chave no seguinte formato:

```env
GOOGLE_API_KEY=sua_chave_api_aqui
```

> ⚠️ Atenção: **Não utilize aspas** no valor da chave.

![Exemplo .env](https://github.com/user-attachments/assets/5f60490b-b6ed-4cbf-970a-8de63f0e6df9)

---

### 3️⃣ Instale o Node.js (caso necessário)

Verifique se o Node.js está instalado com o comando:

```bash
npm -v
```

Se não estiver instalado, acesse o site:  
🔗 [https://nodejs.org/](https://nodejs.org/)

> ✅ Caso o terminal retorne um número de versão, o Node está instalado corretamente.  
> 🔁 Caso contrário, instale e reinicie o computador.

---

### 4️⃣ Instale as dependências

No terminal, execute:

```bash
npm install fastify @google/genai mime dotenv
npm install -D typescript ts-node @types/node
```

---

### 5️⃣ Inicie o projeto

Para iniciar o servidor local, execute:

```bash
npx ts-node src/server.ts
```

Você verá a mensagem:

```bash
Server listening at http://localhost:3000
```

---

## 🧪 Testando a API

Recomendamos o uso do **Postman** para testar a API:  
🔗 [Download Postman](https://www.postman.com/downloads/)

Exemplo de requisição e resposta:

![Exemplo Postman](https://github.com/user-attachments/assets/0e80715d-f876-4872-b58f-e5392a8f7d72)

> 📦 A resposta será retornada em formato **JSON**, ideal para:


---



## 👥 Créditos

- **Faculdade Unimar**
- **Empresa Dsin**
