# FIreray  [ 2.1.0 ]
Usar Array na Realtime da Firebase

Como funciona

Abra seu projeto no Visual Studio ou outra IDE e use: 
```
npm i fireray
```
Aguarde a instação do modulo e pronto! Agora você já pode codar na **Firebase** usando **Arrays**

**・Como usar?**
Agora na nova atualização ( 2.0.0 para cima ) é muito mais simples a forma de uso.

・exemplo de **Script:** - index.js
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
            <h1>${array}</h1>
            <script> const array = ${array} </script>
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

**$** abaixo temos todos os tipos de extenssões.
```diff
- Push
- Set
- Get
- Delete
- Clone
```

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

Deseja ajudar no desenvolvimento?
- Pix: `lucasdwbfff@gmail.com`
