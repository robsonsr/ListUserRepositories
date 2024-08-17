# Listar repositórios do GitHub

## Como configurar o token

-   Crie um personal access token seguindo esse guia [gerar um token](https://docs.github.com/pt/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql);
-   Crie um arquivo `.env` e coloque o token em ACCESS_TOKEN, pode seguir [env.example](/.env.example) como exemplo;

_.env_

```
URL=https://api.github.com/graphql
ACCESS_TOKEN=
```

## Instale as dependências

`yarn`

## Execução

### Android

`yarn android`

### iOS

`cd ios && pod install`
`yarn ios`

## Rodar o testes

`yarn test`

### GIF
![ScreenRecording2024-08-17at16 00 06-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/a211f93f-8842-4ea2-88a9-a9bee4798bf5)
