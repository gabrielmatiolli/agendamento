# ✂️ **Sistema de Agendamento Online para Barbearias**  

Um sistema moderno para facilitar o agendamento de serviços em barbearias, permitindo que clientes escolham horários, profissionais e serviços online, enquanto os administradores gerenciam os agendamentos e finanças de forma eficiente.  

---

## 🚀 **Tecnologias Utilizadas**  

O sistema foi desenvolvido com as seguintes tecnologias:  

- **[Next.js](https://nextjs.org/)** → Framework React para frontend e backend  
- **[TypeScript](https://www.typescriptlang.org/)** → Tipagem estática para maior segurança no código  
- **[Prisma ORM](https://www.prisma.io/)** → ORM para gerenciamento do banco de dados  
- **[PostgreSQL](https://www.postgresql.org/)** → Banco de dados relacional escalável  
- **[Tailwind CSS](https://tailwindcss.com/)** → Framework para estilização rápida e responsiva  

---

## 🛠 **Funcionalidades**  

### **📌 Para Clientes**  
✅ Cadastro e login com verificação via SMS  
✅ Agendamento de serviços com escolha de profissional e horário  
✅ Notificações automáticas via SMS para lembrete de agendamento  
✅ Histórico de agendamentos e possibilidade de reagendamento  

### **📌 Para Administradores**  
✅ Cadastro de profissionais e serviços  
✅ Controle de disponibilidade e horários  
✅ Painel de gestão de agendamentos  
✅ Relatórios financeiros interativos  

---

## ⚙️ **Instalação e Configuração**  

### **1️⃣ Clone o repositório:**  
```bash
git clone https://github.com/seu-usuario/sistema-barbearia.git
cd sistema-barbearia
```

### **2️⃣ Instale as dependências:**  
```bash
npm install
```

### **3️⃣ Configure o banco de dados:**  
1. Crie um banco de dados PostgreSQL  
2. Configure o arquivo `.env` com a string de conexão do banco  
3. Execute as migrações do Prisma:  
```bash
npx prisma migrate dev
```

### **4️⃣ Inicie o servidor:**  
```bash
npm run dev
```

O sistema estará disponível em `http://localhost:3000` 🚀  

---

## 📌 **Endpoints da API**  

### **📍 Autenticação**  
- `POST /api/auth/register` → Criação de conta  
- `POST /api/auth/login` → Login do usuário  

### **📍 Agendamentos**  
- `GET /api/appointments` → Listar agendamentos  
- `POST /api/appointments` → Criar um novo agendamento  
- `PUT /api/appointments/:id` → Editar um agendamento  
- `DELETE /api/appointments/:id` → Cancelar um agendamento  

### **📍 Relatórios**  
- `GET /api/reports/finance` → Relatórios financeiros  

---

## 🖥 **Arquitetura do Projeto**  

📁 `src/` → Código-fonte do sistema  
📂 `pages/api/` → API do Next.js  
📂 `components/` → Componentes reutilizáveis  
📂 `prisma/` → Modelos e migrações do banco de dados  
📂 `styles/` → Estilos globais  

---

## 🔥 **Contribuição**  

Contribuições são bem-vindas! Para contribuir:  

1. Faça um **fork** do repositório  
2. Crie uma **branch** para a nova feature:  
   ```bash
   git checkout -b minha-feature
   ```
3. Faça as alterações e commit:  
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie a branch para o repositório remoto:  
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request** 🚀  

---

## 📄 **Licença**  

Este projeto está licenciado sob a **MIT License**.  

---

📌 **Desenvolvido com ❤️ por [Gabriel Matiolli](https://github.com/gabrielmatiolli)** 🚀
