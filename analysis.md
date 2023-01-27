## Função -> onMessageReceived
  - As mensagens enviadas são apresentadas no console passando o nome do autor

  ### Mensagens dentro do servidor
  Dentro do canal de 'autenticação' caso seja enviada a mensagem 'acesso':
  - Caso seja um Participante:
    - Bot response com a mensagem:
    ```text
      `Você foi autenticado(a) com sucesso! :partying_face: Agora você tem acesso aos outros canais, você pode começando pelo #busca-de-times :rocket:`
    ```
  - Caso não seja Participante:
    - É apresentada uma mensagem no console:
    ```text
     `[autenticacao falha] - Não é participante do evento na plataforma - ${message.author.username} (${message.author.id})`
    ```
    - É enviada um resposta:
    ```text
      'Precisamos ajustar algumas coisas... Enviei uma mensagem no privado :innocent:'
    ```
    - É enviada uma mensagem no privado:
    ```text
      `Precisamos ajustar algumas coisas... Por favor me diga o \`email\` informado no formulário de inscrição! :pizza:`
    ```
  ---
  Caso a mensagem contenha '(react)':
  - a função `addReactionsToMessage' é executada

  Caso a mensagem contenha '(emojify)':
  - a função `emojifyToMessage' é executada

  Caso o usuário esteja na lista de administradores:
  - Se a mensagem for '!ping' ou '!p' o bot response
  ```text
  'pong!'
  ```
  - Se a mensagem for '!auth' ou '!a' o bot informa a quantidade de participantes autenticados respondendo:
  ```text
  `Quantidade de participantes autenticados: ${participantCount}`
  ```
  - Se a mensagem for '!sheet' ou '!s', a função `importEventsFromGoogleSheetsToDB` e o bot response
  ```text
  'Atualizando banco de mentorias a partir da planilha!'
  ```
   - Se a mensagem for '!mentorias' ou '!m', a função o bot response
  ```text
  `Mentorias disponíveis: ${numero de mentorias agendadas}`
  ```
  - Se a mensagem for '!relatorio', '!relatório' ou '!r' o bot informa um relatório de mentorias

  ### Mensagens enviadas no privado
  Caso seja enviado um email:
  - Deve apresentar o email recebido no console:
    ```text
    `Email recebido ${email}`
    ```
  - Deve validar se o email está na planilha de inscrições e no banco da shawee:
    - Caso o email for encontrado 
      - Deve informar no console:
      ```text
      `Email no formulário ${email}`
      ```
      - Deve atualizar o id do discord no banco de dados da Shawee
      - Se o autor da mensagem conter a tag de Participante o bot deve enviar a mensagem:
      ```text
      'Configuração realizada com sucesso! Agora você tem acesso total aos outros comandos, experimente digitar `ajuda`!'
      ```
      - Caso o autor não tenha a tag de Participante deve ser adicionada a tag de Participante e da especialidade registrada na planilha, o bot tambem deve responder:
      ```text
      'Você foi autenticado(a) com sucesso :clap: , \nAgora você tem acesso total aos outros comandos, experimente digitar `ajuda` :grin: \nVocê também pode escolher o seu cargo, experimente digitar `lista de cargos`! \nVocê já pode acessar o evento na plataforma da Shawee através do link a seguir: \n' + PARTICIPANT_INVITE_LINK
      ```
    - Caso o email não esteja registrado o bot deve responder
    ```text
    `Parece que você não está participando deste evento :disappointed_relieved: Por favor, me diga o email informado no formulário de inscrição do evento.`
    ```
  - Caso o email não estiver registrado no banco da Shawee
  ```text
  `Parece que precisamos do seu email usado na plataforma da Shawee para uma configuração :smile: basta me dizer seu email:\nCaso não tenha uma conta na plataforma ainda utilize o link a seguir para criar:\nhttps://app.shawee.io/`
  ```

