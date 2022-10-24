# FIreray
Usar Array na Realtime da Database

Como funciona

Na sua pasta raiz, crie a pasta **utils** e lá dentro crie outra chamada **FIreray**.
```
📂 Utils
  📂 FIreray
```
Lá dentro, cole os arquivos baixados.
```
📂 Utils
  📂 FIreray
    📋 handler.js
    📋 response.js
```

**・Como usar?**
é meio complexo, mas vamos lá.

・Buscar array
```js
const FIreray = require('utils/FIreray/handler.js');
var array = [];
const eval_ = FIreray(db, true, { 
  dir: `member/0/items`, // Diretório onde o array está salvo.
  var: 'array', // Nome da variável que deseja salvar o array.
  exe: 'pass' // Nome da função onde após você coletar o array você deseja executar. 
})
eval(eval_)
function pass(){
  console.log(array);
  // Aqui você poderá fazer todo seu código.
  // LEMBRE-SE o seu array está salvo na variável que você escolheu.
}
```

・Alocar array
```js
const FIreray = require('utils/FIreray/handler.js');
const array = [ { nome: 'Lucas', saudar: function () { return `Olá Sr. ${this.nome}, bem vindo!` } } ] // Este é o array que você deseja salvar.
FIreray(db, false, { 
  dir: `pessoa/0/infos`, 
  val: `${array}` 
})
```

**❌・Possíveis erros: **
```md
[Normais](Erros em Inglês auto explicativos / Motivo: Problemas na hora de usar.)
[NODE_NOT_FOUND](Motivo: O diretório informado não existe.)
```

**・Segue abaixo os arquivos.**

Clique **[aqui](https://github.com/lucasFelixSilveira/FIreray/raw/main/files.zip)** para baixar os arquivos nescessários
