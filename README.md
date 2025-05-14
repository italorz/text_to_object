Descrição:
Projeto realizado em parceria com a faculdade unimar e empresa Dsin no intuito de integrar front-end em Flutter usando biblioteca speck to text,
 passando para este projeto de api com gemini convertendo o texto em objeto para salvar no banco de dados.
 O projeto foi desenvolvido em typescript no intuído de integrar com outros backend da empresa (Java, C# .net code, php laravel),
 atraves do gerenciamento de Filas usando RabbitMq, e ou Kafka.

Instruções:
1.Acesse o link e gere uma chave de api google gemini:
 [link](https://aistudio.google.com/apikey)
![image](https://github.com/user-attachments/assets/518d8c3f-2c1b-4518-ac0b-76cb852d49f5)

2.crie o arquivo .env na raiz do projeto
e cole dentro do arquivo na seguinte forma:
![image](https://github.com/user-attachments/assets/5f60490b-b6ed-4cbf-970a-8de63f0e6df9)
substituindo "*" pela chave da api
obs: neste tipo de arquivo não é nescessario uso de aspas.

3.Instalação e dependencias do projeto:
Certifique de que esta com o node instalado, caso contrario pode acessar o site:
[link](https://nodejs.org/)

3.1. para se certificar de que o node esta instalado, no cmd ou terminal, digite:
"npm -v"
obs: caso seu terminal retorne uma numeração indicando a versao, quer dizer que esta tudo certo, caso contrario tente reiniciar a maquina.
3.2. apos isso com "VS CODE" aberto podemos instalar as dependencias:
"npm install fastify @google/genai mime dotenv"
"npm install -D typescript ts-node @types/node",
para iniciar o projeto:
"npx ts-node src/server.ts"
o terminal deve retornar a seguinte mensagem:
"Server listening at http://localhost:3000"

pronto sua api esta funcionando para testar podemos usar um http client, recomendo o uso do PostMan
link para download do postman:
[link](https://www.postman.com/downloads/)
seque exemplo:
![image](https://github.com/user-attachments/assets/0e80715d-f876-4872-b58f-e5392a8f7d72)
imagem, passo 8 ja é retorno em json, ideal para salvar no banco de dados e ou retornar via api para o front-end.


