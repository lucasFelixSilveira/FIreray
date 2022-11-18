const FIreray = require('./lib/response.js')

module.exports.get = function(db, dir, configs ) {
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('You need to tell the directory where you want to search.')
    if( typeof dir !== 'string' ) throw new TypeError('the type requested in parameter 1 is a string.')
    if(! configs ) throw new TypeError('The next parameter, where you will pass the environment information should be informed.')
    if(! configs.var ) throw new TypeError('You need to enter the name of the variable that you want to save the array.')
    if( typeof configs.var !== 'string' ) throw new TypeError('The type requested in parameter 2[0] is a string.')
    if(! configs.exe ) throw new TypeError('You need to enter the name of the function you want to run after saving the array.')
    if( typeof configs.exe !== 'string' ) throw new TypeError('The type requested in parameter 2[1] is a variable.')
    return FIreray.run(db, dir).get(configs['var'], configs['exe']); 
}

module.exports.push = function(db, dir, content ) {
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db === 'object' ) throw new TypeError('the type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('You need to tell me the directory of this matrix where I\'ll add this new information.')
    if( typeof dir !== 'string' ) throw new TypeError('the type requested in parameter 1 is a string.')
    if(! content ) throw new TypeError('you need to inform me the contents of the push.')
    return FIreray.run(db, dir).push(content); 
}

module.exports.set = function(db, dir, content ) {
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db === 'object' ) throw new TypeError('the type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('You need to tell me the directory of this array where I will save this new information.')
    if( typeof dir !== 'string' ) throw new TypeError('the type requested in parameter 1 is a string.')
    if(! content ) throw new TypeError('you need to inform me the contents of the set.')
    return FIreray.run(db, dir).set(content); 
}

module.exports.delete = function(db, dir) {
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db === 'object' ) throw new TypeError('the type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory in which you want to delete the array')
    if( typeof dir !== 'string' ) throw new TypeError('the type requested in parameter 1 is a string.')
    return FIreray.run(db, dir).set(null); 
}

module.exports.clone = function(db, dir, dir2) {
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db === 'object' ) throw new TypeError('the type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory in which you want to clone.')
    if( typeof dir !== 'string' ) throw new TypeError('the type requested in parameter 1 is a string.')
    if(! dir2 ) throw new TypeError('Enter the directory in which you want to leave cloning.')
    if( typeof dir2 !== 'string' ) throw new TypeError('the type requested in parameter 2 is a string.')
    return FIreray.run(db, dir).clone(dir2); 
}

module.exports.replace = function(db, dir, dir2) {
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db === 'object' ) throw new TypeError('the type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory that you want to be exchanged for the other')
    if( typeof dir !== 'string' ) throw new TypeError('the type requested in parameter 1 is a string.')
    if(! dir2 ) throw new TypeError('Enter the directory you want copied')
    if( typeof dir !== 'string' ) throw new TypeError('the type requested in parameter 2 is a string.')
    return FIreray.run(db, dir).replace(dir2); 
}

/** 
 * ≫ ≫ ≫ feito por Lucas Felix Silveira
*/