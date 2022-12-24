# FIreray  [ 2.4.8 ]

<div align="center">
    <img src="https://media.discordapp.net/attachments/983446685327966269/1041340936367644783/FIreray-removebg-preview.png?width=662&height=241" height="130">
    <br>
    Usar Array na Realtime da Firebase & <a href="https://fsdb.tk">Fsdb.js</a>
</div>

# 💬 Linguagem
> **click [here](https://github.com/lucasFelixSilveira/FIreray/blob/main/FIreray/assets/ENGLISH.md) to go to the documentation in English.**

# ⁉ Sobre
A FIreray trabalha com [Node.js](https://nodejs.org), em conjunto com a [Firebase](https://firebase.google.com/), fazendo a [Real Time](https://firebase.google.com/docs/database/web/start) aceitar arrays.

- Sempre com novidades em produção
- Frequentemente atualizada
- O mais optmizada possível

# 🟣 Instalação

Abra seu projeto no Visual Studio ou outra IDE, abra o terminal e use: 
```sh-session
npm i fireray
```
- Aguarde a instação do modulo e pronto! Agora você já pode usar a **Firebase** com **Arrays**

# ♻ Uso

- `1.` Dependendo se você vai usar a **_[Fsdb](https://fsdb.tk)_** ou a **_[Firebase](https://firebase.google.com/)_** ( Não ambas ) você pode simplificar o uso da **FIreray** usando:
```js
FIreray.singleUse('fsdb')    
```

<div align="center"> ou <br><br> </div>

```js
FIreray.singleUse('firebase')    
```
- - O uso também é simples. Só se basear no modo de uso normal e usar função coletada.
```js
FIreray.use('get', async (func) => {
    const get = await func(db, 'directory')
    console.log(get)
})
```

- `2.` Se você vai usar os 2, infelizmente você tera que sempre ficar usando o prefixo `fs` ou `fb`. Veja o exemplo abaixo:
- - Lembrando que `fs` é para a Fsdb e `fb` para a Firebase!
```js
const db = fsdb.database();

await FIreray.fsSet(db, 'users', [ { user: 0, name: 'Lucas F. Sil' }, { user: 1, name: 'Ana C. Rod' }, { user: 2, name: 'Vitor G. Sil' }, { user: 3, name: 'Kauã J. San' } ])
const get = await FIreray.fsGet(db, 'users');

console.log(get)
```

# 🔗 Direções
- [Módulo npm](https://www.npmjs.com/package/fireray)
- [Projeto na github](https://github.com/lucasFelixSilveira/FIreray)
- [Licença MIT](https://github.com/lucasFelixSilveira/FIreray/blob/main/FIreray/licence)
- [Discord da comunidade](https://discord.gg/cdEnEtwehC)

# 📄 Notas da versão
- **2.4.1** & **2.4.2**
```
Correção de bugs
```
- **2.4.0**
```
Mudança do get para sistema simplificado
```
- **2.3.7**
```
Adição do "usage" no comando remove!
```
- **2.3.6**
```
Correção do bug do 0 no remove!
Observação: https://www.youtube.com/watch?v=9URV25JlVK0
```
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
