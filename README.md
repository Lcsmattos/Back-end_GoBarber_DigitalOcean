# Recuperação de Senha - OK

**Requisitos Funcionais** -Quais são as funcionalidades dentro da recuperação de senha-

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar a sua senha;

**Requisitos não Funcionais** -Parte Técnica-

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar o amazon SES para envios em produção;
- O envio de e-mail deve acontecer em segundo plano (Background job);

**Regras de Negócio**

- O link enviado por e-mail para resetar a senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil do Usuário

**Requisitos Funcionais**

- O usuário deve poder atualizar seu perfil ( nome, e-mail e senha );

**Regras de Negócio**

- O usuário não pode alterar seu email para um email já utilizado (outro usuário);
- Para atualizar sua senha, o usuário deve digitar sua senha anterior;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do Pestador

**Requisitos Funcionais**

- O usuário deve poder listar os seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve visualizar as notificações não lidas;

**Requisitos não Funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**Regras de Negócio**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**Requisitos Funcionais**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com os horários disponiveis de um prestador;
- O usuário deve poder listar horários disponiveis em um dia específico de um prestador;
- O usuário deve poder fazer um novo agendamento com um prestador;


**Requisitos não Funcionais**

- A listagem de prestadores deve ser armazenado em cache;

**Regras de Negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h às 18h (Primeiro horário às 8h, ultimo 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar um horário consigo;
# Back-end_GoBarber_DigitalOcean
