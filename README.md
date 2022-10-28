# FIreray  [ 2.0.0 ]
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

const names = [
  'bruno, 'ana', 'júlia', 'augusto', 'josé', 'kauã', 'wendel'
]

const newUsers = [
  {
    name: names[Math.floor(Math.random() * names.length)]
  }, {
    name: names[Math.floor(Math.random() * names.length)]
  }
]

app.get('/setUsers', (req, res) => {
  let users   
  eval(FIreray.get(db, `users`, {
    var: 'users', exe: 'nextTick'
  }))
  function nextTick() {
    if(!users) {
      FIreray.set(db, `users`, newUsers)
    } else {
      function some(x) {
        FIreray.push(db, `users`, x)  
      } 
      newUsers.forEach(item => {
        some(item)
      })
    }
  }  
})

app.listen(8080, () => {
  console.log('[Site] Online na localhost:8080')
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
