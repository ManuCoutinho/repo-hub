## Antes de iniciar

Você precisará inserir as variáveis de ambiente em eu arquivo `.env`, conforme pode ver no exemplo abaixo ou no arquivo `.env.example` na raiz do projeto.

```bash
GH_SECRET= {{ GH Secret generated }}
# para gerar um secret pessoal, baste seguir a documentação: https://docs.github.com/pt/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28

BASE_URL= {{ host da aplicação ou http://localhost:3000}}

API_URL=https://api.github.com
```

## Iniciando

Para rodar o servidor de desenvolvimento

```bash
$ npm run dev

# servidor irá inicializar na porta: http://localhost:3000
```


## Demo

Para ter uma prévia de como o projeto poderá ficar em produção, você pode acessar em [aqui 😁](https://repo-hub-pi.vercel.app/).
Esta prévia leva em conta uma chave de autenticação do meu usuário.

