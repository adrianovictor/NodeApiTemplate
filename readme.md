# Node Project Template

Este projeto trata-se de um modelo, pré-configurado para criação de API's usando o NodeJS. O template esta configurado para usar o nodemon, sequelize com MySql, autenticação de usuários com a geração de tokens de acesso e o Yup como middleware de validação para as entradas de dados.

Também esta configurado para usar o ES6 e já possuí o arquivo dockerfile para criar um container para executar a aplicação.

O modelo base para o registro de usuários no banco de dados está criado e com sua migration criada. Para criar a tabela para inserir os dados, siga os passos indicado à baixo.

### 1. Criando o arquivo de Configuração (.env)

Adiciona um novo arquivo chamado ```.env``` na raiz do projeto e inclua as seguintes linhas no arquivo:

```
# database
DB_DIALECT=mysql
DB_HOST=127.0.0.1
DB_USER=<seu-usuario>
DB_PASS=<sua-senha>
DB_NAME=<nome-do-seu-banco>
```

Substitu-a os valores de ```DB_USER```, ```DB_PASS``` e ```DB_NAME``` para os valores de acesso ao seu banco de dados e salve.

Tenha certeza de que o seu MySql esta em execução e que o usuário que você informou tem as devidas permissões para realizar as operações necessárias.

Após isto, acesse seu servidor MySql e crie um novo banco de dados com o mesmo nome que foi adicionado no arquivo ```.env``` pois o ```Sequelize``` não cria o banco, somente o que esta constando nas migrations que pre-supõe que este já exista.

### 2. Criando e executando uma migration

Após configurado o acesso ao banco de dados, abra o terminal no Visual Studio Code utilizando o atalho ```CTRL+"``` para ambientes Windows e digite o seguinte comando:

```
> npm run add-migration <nome-da-migration>
```

O comando ```add-migration``` é um script, ou um atalho para o comando de criação de migrações do Sequelize para facilitar a utilização do mesmo.

Substitu-a o item ```<nome-da-migration>``` pelo nome que desejar que ela tenha para que a mesma seja criada. Após criar todas as migrations que achar necessário, vá novamente ao terminal do Visual Studio Code e entre com o seguinte comando:

```
> npm run update-database
```

O comand ```update-database``` também é um atalho criado no arquivo ```package.json``` para facilitar a utilização da pacote do ```Sequelize```. Este script executa o comando ```db:migrate```.

