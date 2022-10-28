# FIreray  [ 2.0.2 ]
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
    eval(FIreray.get(db, `users`, {
        var: 'array', exe: 'nextTick'
    }))
    function nextTick() {
        res.send(`
            <script> const array = ${array} </script>
        `) // Para debugar no console da localhost a array informada.
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

**$** Acima temos todos os tipos de extenssões.
```diff
- Push
- Set
- Get
```

**・Set**
```js
FIreray.set(db, `dir`, array)
```

**・Get**
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
```js
const object = { nome: 'Mauricio', idade: 23 }
FIreray.push(db, `dir`, object)
```
