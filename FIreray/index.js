const FIreray = require('./lib/response.js')

let itsWarning = false;

function usage() {
    if( itsWarning == false ) {
        require('./lib/events/ready.js')(require('./package.json').version)
        itsWarning = true;
    }
}

module.exports.get = function(db, dir) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('You need to tell the directory where you want to search.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    return FIreray.run(db, dir).get(); 
}

module.exports.push = function(db, dir, content) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('You need to tell me the directory of this matrix where I\'ll add this new information.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! content ) throw new TypeError('you need to inform me the contents of the push.')
    return FIreray.run(db, dir).push(content); 
}

module.exports.set = function(db, dir, content) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('You need to tell me the directory of this array where I will save this new information.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! content ) throw new TypeError('you need to inform me the contents of the set.')
    return FIreray.run(db, dir).set(content); 
}

module.exports.delete = function(db, dir) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory in which you want to delete the array')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    return FIreray.run(db, dir).set(null); 
}

module.exports.clone = function(db, dir, dir2) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory in which you want to clone.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! dir2 ) throw new TypeError('Enter the directory in which you want to leave cloning.')
    if( typeof dir2 !== 'string' ) throw new TypeError('The type requested in parameter 2 is a string.')
    return FIreray.run(db, dir).clone(dir2); 
}

module.exports.replace = function(db, dir, dir2) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory that you want to be exchanged for the other')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! dir2 ) throw new TypeError('Enter the directory you want copied')
    if( typeof dir2 !== 'string' ) throw new TypeError('The type requested in parameter 2 is a string.')
    return FIreray.run(db, dir).replace(dir2); 
}

module.exports.remove = function(db, dir, index) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory in which you want to delete the item in which it is reported in the next parameter.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! index && index !== 0 ) throw new TypeError('Enter the index of the item you want to remove from the array.')
    let number = index;
    if( typeof index !== 'number' ) {
        if( typeof index !== 'string' ) throw new TypeError('Parameter 2 can only be a number or a string that contains a number.')
        else {
            if( isNaN(index) ) throw new TypeError('Parameter 2 can only be a number or a string that contains a number.')
            else {
                number = parseInt(index)
                execute()
            }
        }
    } else {
        number = parseInt(index)
        execute();
    }

    function execute() {
       return FIreray.run(db, dir).remove(number); 
    }
}

/** 
 * ≫ ≫ ≫ feito por Lucas Felix Silveira
*/