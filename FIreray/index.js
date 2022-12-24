const FIreray = require('./lib/response.js')

let itsWarning = false;

function usage() {
    if( itsWarning == false ) {
        require('./lib/events/ready.js')(require('./package.json').version)
        itsWarning = true;
    }
}

let typeUse = null;

module.exports.singleUse = function (single) {
    if( typeUse ) throw new TypeError('You have already configured a single-use module.')
    if( single.toLowerCase() == 'fsdb' || single.toLowerCase() == 'firebase' ) typeUse = single.toLowerCase();
    else throw new TypeError('The module provided is invalid.')
}

module.exports.use = (command, _function) =>  {
    if(! typeUse ) throw new TypeError('You have to configure a "single-use module" to use this system.')
    const getFunc = () => {
        return new Promise((resolve, reject) => {
            const pass = (formed) => {
                let type;
                if( typeUse == 'firebase' ) type = 'fb'
                if( typeUse == 'fsdb' ) type = 'fs'
                const module_ = require('./')[type+formed]
                return resolve(module_);
            }
            const letters = command.split('');
            let string = '';
            letters.forEach(
                (item, index) => {
                    if( index == 0 ) string = string + item.toUpperCase() 
                    if( index > 0 ) string = string + item.toLowerCase()
                    if( index >= ( letters.length - 1 ) ) pass(string) 
                }
            )
        }) 
    }
    getFunc().then(_module => {
        _function(_module)
    })
}

module.exports.fbGet = function(db, dir) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('You need to tell the directory where you want to search.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    return FIreray.run(db, dir).fbGet(); 
}

module.exports.fbPush = function(db, dir, content) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('You need to tell me the directory of this matrix where I\'ll add this new information.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! content ) throw new TypeError('you need to inform me the contents of the push.')
    return FIreray.run(db, dir).fbPush(content); 
}

module.exports.fbSet = function(db, dir, content) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('You need to tell me the directory of this array where I will save this new information.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! content ) throw new TypeError('you need to inform me the contents of the set.')
    return FIreray.run(db, dir).fbSet(content); 
}

module.exports.fbDelete = function(db, dir) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory in which you want to delete the array')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    return FIreray.run(db, dir).fbSet(null); 
}

module.exports.fbClone = function(db, dir, dir2) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory in which you want to clone.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! dir2 ) throw new TypeError('Enter the directory in which you want to leave cloning.')
    if( typeof dir2 !== 'string' ) throw new TypeError('The type requested in parameter 2 is a string.')
    return FIreray.run(db, dir).fbClone(dir2); 
}

module.exports.fbReplace = function(db, dir, dir2) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of firebase.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory that you want to be exchanged for the other')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! dir2 ) throw new TypeError('Enter the directory you want copied')
    if( typeof dir2 !== 'string' ) throw new TypeError('The type requested in parameter 2 is a string.')
    return FIreray.run(db, dir).fbReplace(dir2); 
}

module.exports.fbRemove = function(db, dir, index) {
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
       return FIreray.run(db, dir).fbRemove(number); 
    }
}

module.exports.fsGet = function(db, dir) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of fsdb.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory that you want to be exchanged for the other')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    return new Promise((resolve, reject) => {
        FIreray.run(db, dir).fsGet().then(
            x => {
                if( x == undefined ) setTimeout(() => { return resolve(FIreray.run(db, dir).fsGet())}, 1000)
                else resolve(x)
            }
        ); 
    })
}

module.exports.fsSet = function(db, dir, content) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of fsdb.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('You need to tell me the directory of this array where I will save this new information.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! content ) throw new TypeError('you need to inform me the contents of the set.')
    return FIreray.run(db, dir).fsSet(content); 
}

module.exports.fsDelete = function(db, dir) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of fsdb.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory in which you want to delete the array')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    return FIreray.run(db, dir).fsDelete(null); 
}

module.exports.fsPush = function(db, dir, content) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of fsdb.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('You need to tell me the directory of this matrix where I\'ll add this new information.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! content ) throw new TypeError('you need to inform me the contents of the push.')
    return FIreray.run(db, dir).fsPush(content); 
}

module.exports.fsRemove = function(db, dir, index) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of fsdb.database()')
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
       return FIreray.run(db, dir).fsRemove(number); 
    }
}

module.exports.fsClone = function(db, dir, dir2) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of fsdb.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory in which you want to clone.')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! dir2 ) throw new TypeError('Enter the directory in which you want to leave cloning.')
    if( typeof dir2 !== 'string' ) throw new TypeError('The type requested in parameter 2 is a string.')
    return FIreray.run(db, dir).fsClone(dir2); 
}

module.exports.fsReplace = function(db, dir, dir2) {
    usage()
    if(! db ) throw new TypeError('You need to inform me the variable of fsdb.database()')
    if( typeof db !== 'object' ) throw new TypeError('The type requested in parameter 0 is a variable.')
    if(! dir ) throw new TypeError('Enter the directory that you want to be exchanged for the other')
    if( typeof dir !== 'string' ) throw new TypeError('The type requested in parameter 1 is a string.')
    if(! dir2 ) throw new TypeError('Enter the directory you want copied')
    if( typeof dir2 !== 'string' ) throw new TypeError('The type requested in parameter 2 is a string.')
    return FIreray.run(db, dir).fbReplace(dir2); 
}

/** 
 * ≫ ≫ ≫ feito por Lucas Felix Silveira
*/