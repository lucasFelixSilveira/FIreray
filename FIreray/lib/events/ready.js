const fetch = require('node-fetch');

module.exports = (versao) => {

    const options = { method: 'GET' };

    fetch('https://my-api-lilac.vercel.app/api', options)
    .then(res => res.json())
    .then(res => {
        if( res.FIreray.version !== versao ) {
            console.log("[FIreray]\033[0m \033[1;33mYou're using an old version! Use:\033[0m")
            setTimeout(() => {
                console.log('\033[0;34m$\033[0m \033[4;34;37mnpm i fireray@'+res.FIreray.version+'\033[0m')
            }, 300)
        }
    })

}