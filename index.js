const FIreray = require('./response.js')

module.exports.get = function(db, dir, configs ) {
    if(! configs.var ) throw new TypeError('You need to enter the name of the variable that you want to save the array.')
    if(! configs.exe ) throw new TypeError('You need to enter the name of the function you want to run after saving the array.')
    if(! dir ) throw new TypeError('You need to tell the directory where you want to search.')
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    return FIreray.run(db, dir).get(configs['var'], configs['exe']); 
}

module.exports.push = function(db, dir, content ) {
    if(! dir ) throw new TypeError('You need to tell me the directory of this matrix where I\'ll add this new information.')
    if(! content ) throw new TypeError('you need to inform me the contents of the push.')
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    return FIreray.run(db, dir).push(content); 
}

module.exports.set = function(db, dir, content ) {
    if(! dir ) throw new TypeError('You need to tell me the directory of this array where I will save this new information.')
    if(! content ) throw new TypeError('you need to inform me the contents of the set.')
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    return FIreray.run(db, dir).set(content); 
}