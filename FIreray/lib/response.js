module.exports.run = (db, req) => retorno(db, req)

function retorno(db, req) {
    var dir = `arrays/${req}`
    function get() {
        return new Promise((resolve, reject) => {
            try {
                db.ref(dir)
                .once('value')
                .then(
                    async (x) => { 
                        if( x.val() == null ) return resolve(undefined)
                        return resolve(x.val().array)
                    }
                )
            } catch(er) {
                return reject(undefined)
            }
        })
    }
    function __get(varName, functionName) {
        return `db.ref(\`${dir}\`).once('value').then((x) => { ${varName} = x.val()? eval(x.val().array):undefined; ${functionName}() })`
    }
    function set(res) {
        let array_ = `${JSON.stringify(res)}`;
        if( res == null ) array_ = null
        try {
            db.ref(dir).set({ array: array_ })
        } catch(er) {
            throw new TypeError(`FIreray:13 - response.js\n[there was a problem setar the array in the informed directory. Check database rules.]\n`+er)
        }
    }
    function push(res) {
        db.ref(dir).once('value').then(
            (x) => {
                if( x.val() == null ) set([res])
                else {
                    var sArray = [];
                    function nextTick () {
                        sArray.push(res)
                        set(sArray)
                    }
                    eval(__get('sArray', 'nextTick'))
                }
            }
        )
    }
    function clone(res, thisAreplace) {
        let array;
        function nextTick () {
            if( array == undefined ) array = null
            dir = `arrays/${res}`
            db.ref(dir)
                .once('value')
                .then(x => nextPass(x))
            function nextPass(x) {
                if( x.val() == null ) set(array)
                else if(! thisAreplace ) throw TypeError('The Clone method cannot be used with the SUBMISSION directory being with some saved content.')
                else if( thisAreplace ) set(array)
            }
        }
        eval(__get('array', 'nextTick'))
    }
    function replace(res) {
        dir = `arrays/${res}`
        clone(req, true)
    }
    function remove(res) {
        let array;
        eval(__get('array', 'nextTick'))
        function nextTick() {
            if( array == undefined ) return; 
            else {
                const arraySize = ( array.length -  1 );
                if( arraySize < res ) return;
                else {
                    if( arraySize >= res ) {
                        const newArray = [];
                        array.forEach(
                            function (item, index) {
                                if( index !== res ) newArray.push(item)
                                if( index == arraySize ) set(newArray) 
                            }
                        )
                    } else return;
                }
            }
        }
    }

    const obj = new Object();
    obj.get = () => get(); // V n° 1.0.0
    obj.set = (res) => set(res) // V n° 1.0.0
    obj.push = (res) => push(res) // V n° 1.1.0
    obj.clone = (res) => clone(res) // V n° 2.1.0
    obj.replace = (res) => replace(res) // V n° 2.2.0
    obj.remove = (res) => remove(res) // V n° 2.3.1

    return obj;
}

/** 
 * ≫ ≫ ≫ feito por Lucas Felix Silveira
*/