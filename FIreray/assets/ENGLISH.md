# FIreray  [ 2.3.5 ]

<div align="center">
    <img src="https://media.discordapp.net/attachments/983446685327966269/1041340936367644783/FIreray-removebg-preview.png?width=662&height=241" height="130">
    <br>
    Use Array in Firebase Realtime
</div>

# Language
> **Clique [aqui](https://github.com/lucasFelixSilveira/FIreray) para ir para a documentação em Português.**

# About
FIreray works with [Node.js](https://nodejs.org), together with [Firebase](https://firebase.google.com/), doing [Real Time](https://firebase.google.com/docs/database/web/start) accept arrays.

- Always with news in production
- Frequently updated
- As optming as possible

# Installation

Open your project in Visual Studio or another IDE, open the terminal, and use:
```sh-session
npm i fireray
```
- Wait for the module to be set and that's it! Now you can use the **Firebase** with **Arrays**

# Example of use

Install the module:
```sh-session
npm i fireray
```

Create using express, a localhost with which to see the array information and also send updates:
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
    console.log('[Ready] Online site at: localhost:8080')
})
```

# Commands

- below we have all kinds of extensions.
```diff
- Push
- Set
- Get
- Delete
- Clone
- Replace
- Remove
```

# Mode of use

- **Set**
ㅤ`Define exactly the ARRAY`
```js
FIreray.set(db, `dir`, array)
```

- **Get**
ㅤ`Collect the array`
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
ㅤ`Add new information to the array ( STRING / BOOLEAN / NUMBER / OBJECT / ARRAY )`
```js
const object = { nome: 'Mauricio', idade: 23 }
FIreray.push(db, `dir`, object)
```

- **Delete**
ㅤ`Delete the saved array`
```js
FIreray.delete(db, `dir`)
```

- **Clone**
ㅤ`Copy x array and save at location y`
```js
FIreray.clone(db, `dir`, `dir2`)
/* 
Dir is the array you want to clone and dir2 where you want to save cloning
Note: The directory from which it will be saved cannot contain any content.
*/
```

- **Replace**
ㅤ`Copy x array and save at location y`
```js
FIreray.replace(db, `dir`, `dir2`)
/* 
Dir2 is the array you want to copy and the dir2 where you want to save the copy
Note: The directory from which it will be saved may contain content.
*/
```

- **Remove**
ㅤ`Delete a specified array item`
```js
FIreray.remove(db, `dir`, 1)
```
Where is the '1' you must enter the index of the item. Example:
```js
const array = [ { name: 'Lucas', createdDate: '12/25' }, { name: 'Ana', createdDate: '12/25' },  ]
// indice 1 is the owner of NAME Ana
```

# Links
- [Npm package](https://www.npmjs.com/package/fireray)
- [Github project](https://github.com/lucasFelixSilveira/FIreray)
- [MIT licence](https://github.com/lucasFelixSilveira/FIreray/blob/main/FIreray/licence)
- [Community server](https://discord.gg/cdEnEtwehC)

# Release notes
- **2.3.5**
```
Documentation in English.
```
- **2.3.2** & **2.3.3**
```
Bug fixes
```
- **2.3.1**
```
Adding the REMOVE command
- Removes unwanted items from an array.
```
- **2.3.0**
```
Addition of update alert system
- communicates with the CLI by requiring the current version and verifying that it is running.
```
- **2.2.4**
```
Bug fixes
```
- **2.2.3**
```
Adding TypeOf checks 
(string checks to only accept STRINGS)
(object checks to only accept VARS/OBJECTS)

Ps. In push and set were not added because within an array can contain MULTIPLE data types.
```
- **2.2.1** & **2.2.2**
```
Bug fixes
```
- **2.2.0**
```
Added the release notes system to Github and Npm;
Adding the REPLACE command
```
