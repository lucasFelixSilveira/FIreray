# FIreray  [ 2.4.3 ]

<div align="center">
    <img src="https://media.discordapp.net/attachments/983446685327966269/1041340936367644783/FIreray-removebg-preview.png?width=662&height=241" height="130">
    <br>
    Use Array in Firebase Realtime
</div>

# 💬 Language
> **Clique [aqui](https://github.com/lucasFelixSilveira/FIreray) para ir para a documentação em Português.**

# ⁉ About
FIreray works with [Node.js](https://nodejs.org), together with [Firebase](https://firebase.google.com/), doing [Real Time](https://firebase.google.com/docs/database/web/start) accept arrays.

- Always with news in production
- Frequently updated
- As optming as possible

# 🟣 Installation

Open your project in Visual Studio or another IDE, open the terminal, and use:
```sh-session
npm i fireray
```
- Wait for the module to be set and that's it! Now you can use the **Firebase** with **Arrays**

# ♻ Usage

- `1.` Depending on whether you will use the **_[Fsdb](https://fsdb.tk)_** or the **_[Firebase](https://firebase.google.com/)_** ( Not both ) you can simplify the use of **FIreray** by using:
```js
FIreray.singleUse('fsdb')    
```

<div align="center"> or <br><br> </div>

```js
FIreray.singleUse('firebase')    
```
- - The use is also simple. Only be based on normal usage mode and use collected function.
```js
FIreray.use('get', async (func) => {
    const get = await func(db, 'directory')
    console.log(get)
})
```

- `2.` If you are going to use the 2, unfortunately you will always have to keep using the prefix `fs` or `fb`. See the example below:
- - Remembering that `fs` is for Fsdb and `fb` for Firebase!
```js
const db = fsdb.database();

await FIreray.fsSet(db, 'users', [ { user: 0, name: 'Lucas F. Sil' }, { user: 1, name: 'Ana C. Rod' }, { user: 2, name: 'Vitor G. Sil' }, { user: 3, name: 'Kauã J. San' } ])
const get = await FIreray.get(db, 'users');

console.log(get)
```

# 🔗 Links
- [Npm package](https://www.npmjs.com/package/fireray)
- [Github project](https://github.com/lucasFelixSilveira/FIreray)
- [MIT licence](https://github.com/lucasFelixSilveira/FIreray/blob/main/FIreray/licence)
- [Community server](https://discord.gg/cdEnEtwehC)

# 📄 Release notes
- **2.4.1** & **2.4.2**
```
Bug fixes
```
- **2.4.0**
```
Change from get to simplified system
```
- **2.3.7**
```
"usage" added in remove command!
```
- **2.3.6**
```
Fix bug from 0 in remove!
```
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