//indexOf
function indexOf (arrIndexOf, pointOf){
    for (let i = 0; i < arrIndexOf.length; i++){
        if (arrIndexOf[i] === pointOf){
            return i
        }
        return -1
    }
}
indexOf()

//lastIndexOf
function  lastIndexOf (arrLastIndexOf, pointLast, indexLast = arrLastIndexOf - 1){
    for (let i = indexLast; i >= 0; i--){
        if (arrLastIndexOf[i] === pointLast){
            return i
        }
        return -1
    }
}
lastIndexOf()

//find
function find (arrFind, findBack){
    for (let i = 0; i < arrFind.length; i++){
        if (findBack(arrFind[i], arrFind, findBack)){
            return i
        }
        return undefined
    }
}
find()

//findIndex
function findIndex (arrFindIndex, findIndexBack){
    for (let i = 0; i < arrFindIndex.length; i++){
        if (findIndexBack(arrFindIndex[i], arrFindIndex, findIndexBack)){
            return i
        }
        return -1
    }
}
findIndex()

//some
function some (arrSome, someBack){
    for (let i = 0; i < arrSome.length; i++){
        if (someBack(arrSome[i], someBack, arrSome)){
            return true
        }
        return false
    }
}
some()

//includes
function includes (arrIncludes, pointIncludes){
    for (let i = 0; i < arrIncludes.length; i++){
        if (arrIncludes[i] === pointIncludes){
            return true
        }
        return false
    }
}
includes()

//every
function every (arrEvery, everyBack){
    for (let i = 0; i < arrEvery.length; i++){
        if (!everyBack(arrEvery[i], arrEvery, everyBack)){
            return true
        }
        return false
    }
}
every()