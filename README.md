# FIreray  [ 2.1.1 ]

<div align="center">
    <img src="https://media.discordapp.net/attachments/983446685327966269/1041340936367644783/FIreray-removebg-preview.png?width=662&height=241" height="130">
    <br>
    Usar Array na Realtime da Firebase
</div>

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
Aguarde a instação do modulo e pronto! Agora você já pode usar a **Firebase** com **Arrays**

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

- abaixo temos todos os tipos de extenssões.
```diff
- Push
- Set
- Get
- Delete
- Clone
```

# Modo de uso

**・Set**
ㅤ`Defina exatamente a ARRAY`
```js
FIreray.set(db, `dir`, array)
```

**・Get**
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

**・Push**
ㅤ`Adicione novas informações ao array STRING / BOOLEAN / NUMBER / OBJECT / ARRAY`
```js
const object = { nome: 'Mauricio', idade: 23 }
FIreray.push(db, `dir`, object)
```

**・Delete**
ㅤ`Delete a array salva`
```js
FIreray.delete(db, `dir`)
```

**・Clone**
ㅤ`Copie x array e salve na localização y`
```js
FIreray.clone(db, `dir`, `dir2`)
/* 
O dir é o array que você deseja clonar e o dir2 onde deseja salvar a clonagem
*/
```

# Direções
- [Módulo npm](https://www.npmjs.com/package/fireray)
- [Licence MIT](https://youtube.com)

# Notas do desenvolvedor

Deseja ajudar no desenvolvimento?
- Donate por Pix: `lucasdwbfff@gmail.com`
