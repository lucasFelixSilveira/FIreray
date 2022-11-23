# FIreray  [ 2.3.5 ]

<div align="center">
    <img src="https://media.discordapp.net/attachments/983446685327966269/1041340936367644783/FIreray-removebg-preview.png?width=662&height=241" height="130">
    <br>
    Usar Array na Realtime da Firebase
</div>

# Linguagem
> **click [here](https://github.com/lucasFelixSilveira/FIreray/blob/main/FIreray/assets/ENGLISH.md) to go to the documentation in English.**

# Sobre
A FIreray trabalha com [Node.js](https://nodejs.org), em conjunto com a [Firebase](https://firebase.google.com/), fazendo a [Real Time](https://firebase.google.com/docs/database/web/start) aceitar arrays.

- Sempre com novidades em produção
- Frequentemente atualizada
- O mais optmizada possível

# Instalação

Abra seu projeto no Visual Studio ou outra IDE, abra o terminal e use: 
```sh-session
npm i fireray
```
- Aguarde a instação do modulo e pronto! Agora você já pode usar a **Firebase** com **Arrays**

# Exemplo de uso

Instale o módulo:
```sh-session
npm i fireray
```

Crie usando express, uma localhost com que dê para ver as informações da array e também enviar atualizações:
```js
const FIreray = require('fireray');
const firebase = require('firebase');
const express = require('express');
const app = express();
const secrets = require('./env.json');

firebase.initializeApp(secrets['firebase']);
const db = firebase.database();

app.get('/get', (req, res) => {
    let array;
    try {
        eval(FIreray.get(db, `users`, {
            var: 'array', exe: 'nextTick'
        }))
    } catch(er) {
        array = undefined;
        nextTick()
    }
    function nextTick() {
        console.log(array)
        res.send(`
            <h1>${JSON.stringify(array)}</h1>
            <script> const array = ${JSON.stringify(array)} </script>
        `)
    }
})

app.get('/', (req, res) => res.redirect('/get'))

app.get('/push', (req, res) => {
    const nomes = [
        'Lucas', 'Ana', 'Pedro', 'Carlos', 'Kauã', 'Júlia', 'Camila', 'Laura', 'Breno', 'Augusto', 'João', 'Kleber'
    ]
    FIreray.push(db, `users`, { name: nomes[Math.floor(Math.random() * nomes.length)] })
    res.redirect('/')
})

app.listen(8080, () => {
    console.log('[Ready] Site online em: localhost:8080')
})
```

# Comandos

- abaixo temos todos os tipos de extensões.
```diff
- Push
- Set
- Get
- Delete
- Clone
- Replace
- Remove
```

# Modo de uso

- **Set**
ㅤ`Defina exatamente a ARRAY`
```js
FIreray.set(db, `dir`, array)
```

- **Get**
ㅤ`Colete o array`
```js
let returnedArray = [];
function nextTick() {
  console.log(returnedArray);
}
eval(FIreray.get(db, `dir`, {
  exe: 'nextTick', var: 'returnedArray'
}))
```

- **Push**
ㅤ`Adicione novas informações ao array STRING / BOOLEAN / NUMBER / OBJECT / ARRAY`
```js
const object = { nome: 'Mauricio', idade: 23 }
FIreray.push(db, `dir`, object)
```

- **Delete**
ㅤ`Delete a array salva`
```js
FIreray.delete(db, `dir`)
```

- **Clone**
ㅤ`Copie x array e salve na localização y`
```js
FIreray.clone(db, `dir`, `dir2`)
/* 
O dir é o array que você deseja clonar e o dir2 onde deseja salvar a clonagem
Observação: O diretório de onde irá ser salvo não pode conter nenhum conteúdo.
*/
```

- **Replace**
ㅤ`Copie x array e salve na localização y`
```js
FIreray.replace(db, `dir`, `dir2`)
/* 
O dir2 é o array que você deseja copiar e o dir2 onde deseja salvar a cópia
Observação: O diretório de onde irá ser salvo pode conter conteúdo.
*/
```

- **Remove**
ㅤ`Delete um item especificado da array`
```js
FIreray.remove(db, `dir`, 1)
```
Onde está o `1` você deve informar o indice do item. Exemplo:
```js
const array = [ { name: 'Lucas', createdDate: '12/25' }, { name: 'Ana', createdDate: '12/25' },  ]
// indice 1 é o dono do NAME Ana
```

# Direções
- [Módulo npm](https://www.npmjs.com/package/fireray)
- [Projeto na github](https://github.com/lucasFelixSilveira/FIreray)
- [Licença MIT](https://github.com/lucasFelixSilveira/FIreray/blob/main/FIreray/licence)
- [Discord da comunidade](https://discord.gg/cdEnEtwehC)

# Notas da versão
- **2.3.5**
```
Documentação em Inglês.
```
- **2.3.2** & **2.3.3**
```
Correção de bugs
```
- **2.3.1**
```
Adição do comando REMOVE
- Remove itens indesejados de um array.
```
- **2.3.0**
```
Adição do sistema de alerta de atualizações
- se comunica com a CLI requerindo a versão atual e verificando se é a em execução.
```
- **2.2.4**
```
Correção de bugs
```
- **2.2.3**
```
Adição de verificações TypeOf 
( verificações de string para apenas aceitar STRINGS )
( verificações de objects para apenas aceitar VARIAVEIS / OBJETOS )

ps. No push e no Set não foram adicionados pois dentro de um array pode conter VÁRIOS tipos de dados.
```
- **2.2.1** & **2.2.2**
```
Correção de bugs
```
- **2.2.0**
```
Adição o sistema de notas de versão no Github e no Npm;
Adição do comando REPLACE
```

# Notas do desenvolvedor

Deseja ajudar no desenvolvimento?
- Donate por Pix: `lucasdwbfff@gmail.com`
