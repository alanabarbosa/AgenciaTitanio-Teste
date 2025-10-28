# Teste Agência Titânio

Este projeto é uma landing page com formulário de contato integrado a um backend PHP e banco de dados MySQL. A aplicação utiliza JavaScript modularizado (ES Modules) e depende de PHP para processar os formulários e salvar os dados no banco.

---

## Estrutura do Projeto

```
AgenciaTitanio-Teste/
├─ index.html  
├─ salvar.php  
├─ conexao.php  
├─ docker-compose.yml  
├─ Dockerfile  
├─ README.md  
├─ assets/  
│  ├─ css/  
│  │  └─ style.css  
│  ├─ js/  
│  │  ├─ script.js  
│  │  └─ modules/ (JS modularizado)  
│  │     ├─ FieldValidator.js  
│  │     ├─ FormHandler.js  
│  │     ├─ FormMask.js  
│  │     └─ FormModalHandler.js  
│  ├─ images/  
│  ├─ font/  
│  └─ sql/  
│     └─ leads.sql  
```

- `index.html` → Página principal da landing page.  
- `salvar.php` → Backend PHP para salvar os dados do formulário no MySQL.  
- `conexao.php` → Configuração de conexão com o banco de dados.  
- `assets/js/script.js` → Script principal, utilizando módulos JS.  
- `assets/js/modules/` → Contém classes JS separadas e modularizadas.  
- `assets/sql/leads.sql` → Script de criação do banco ou tabela de leads. 

---

## Por que rodar com Docker ou servidor Apache

O projeto deve ser executado em um servidor (Docker com Compose ou Apache) pelos seguintes motivos:

1. **Compatibilidade do PHP**: O backend é feito em PHP e precisa de um servidor web (Apache) configurado corretamente.  
2. **Banco de Dados MySQL**: O projeto depende de um banco de dados MySQL. O uso de Docker Compose garante que o PHP e o MySQL se comuniquem sem problemas de configuração local.  
3. **JavaScript em Módulos**: O uso de ES Modules exige que o site seja servido por um servidor, pois **não funciona abrindo o HTML diretamente no navegador**.  

> ⚠️ O JavaScript está modularizado, portanto ele só funcionará quando servido via PHP (Docker ou XAMPP/Apache).

---

## Como Rodar com Docker

1. Tenha o [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) instalados.  
2. Navegue até a pasta do projeto:

```bash
cd AgenciaTitanio-Teste
```

3. Suba os containers:

```bash
docker-compose up -d
```

4. Acesse a landing page pelo navegador:

```
http://localhost:8081
```

5. Para acessar o PhpMyAdmin:

```
http://localhost:8082
```

---

## Como Rodar com XAMPP

Se preferir usar XAMPP:

1. Coloque a pasta `AgenciaTitanio-Teste` dentro de `htdocs`.  
2. Configure o MySQL com o banco `teste_dev` e usuário `root` (senha `root`) ou ajuste o `salvar.php`.  
3. Acesse a página via:

```
http://localhost/AgenciaTitanio-Teste
```

> ⚠️ Ainda assim, o JS modularizado exige que a página seja servida por um servidor (PHP/Apache), **não abra o HTML direto no navegador**.

---

## Configuração do Banco

- Banco: `teste_dev`  
- Usuário: `root`  
- Senha: `root`  
- Porta externa do Docker: `3307`  

Crie a tabela `leads` usando este SQL:

```sql
CREATE TABLE leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone TEXT NOT NULL,
  website TEXT NOT NULL,
  data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Observações

- O projeto só funciona corretamente dentro do Docker ou XAMPP devido à combinação de PHP, MySQL e JS modularizado.  
- Formulário envia dados via PHP e exibe respostas em modal usando JavaScript.  
- Abrir o HTML direto sem servidor quebra funcionalidades do backend e dos módulos JS.
