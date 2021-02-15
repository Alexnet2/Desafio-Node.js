## Instruções

O projeto inteiro utiliza a memória como armazenamento dos dados, existem dois usuários que são estáticos.
O usuário com permissão de administrador e o somente vendedor,
as rotas foram distríbuidas de forma em que se for administrador haverá o admin na url e é válidado essa permissão de utilizando da rota , assim combrindo a questão de autorização e também juntamente a autenticação que é enviado o token referente ao usuário quando passado corretamente os dados. A rota permission é o que é utilizado para adicionar ou remover as permissions, também coloquei mais uma rota pra verificar as permissões.

**Para rodar o projeto basta utilizar o nodemon ou npm start.**

## Documentação

Projeto realizado em nodeJS com intuíto de realizar um pequena aplicação em Rest, esta aplicação contém uma rota de login, localizada no userRoute, onde o usuário logado corretamente recebe um token pra se autenticar nas demais rotas. A permissionRoute, só está disponível para usuários administradires, logo é válidado se o usuário que solicitou a rota tem permissão de acessá-la. O projeto foi desenvolvido com express e JWT.
