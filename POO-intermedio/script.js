//Object.keys()
//Object.getOwnPropertyNames()
//Object.entries()
//Object.getOwnPropertyDescriptor() //configurable = borrable o no, enumerable = si se puede ver en objects.keys o no, writable = si se puede cambiar el value 
const objt1 = {
    a: "a",
    b: "b",
    c: {
        d: 'd',
        e: 'e',   
    },
    edith(){
        this.a = 'aaaaaaaaaa'
    }
};

// const objt2 = {};
//     for(x in objt1){
//         objt2[x] = objt1[x];  
// };

// const objt3 = Object.assign({}, objt1);
// const objt4 = Object.create(objt1); // cambia las propiedas si se modifican en objt1 pero este objeto no modifica el original

// const stringified = JSON.stringify(objt1);
// const jsonparse = JSON.parse(stringified); // manera adecuada para copiar objetos pero no copia funciones.









// función recursiva

// function recursiva() {
//     if(/* validacion*/){
//         // llamados recursivos
//     }else{
//         // llamados normales, sin recursividad
//     }
// }

// let numeros= [10,112,2,3,4,5,5,6,7,8,11,9,14];
// // let numero = 0;

// // for (let index = 0; index < array.length; index++) {
// //     numero = numeros[index];
// //     console.log({index, numero})
// // }

// function recursiva(numArray) {
//     if(numArray.length != 0){
//         const first = numArray[0];
//         console.log(first)
//         numArray.shift();
//         return recursiva(numArray);
//     }
// }



// deep COPY
function isObject(subject) {
    return typeof subject == "object"
}
function isArray(subject) {
    return Array.isArray(subject)
}
function deepcopy(subject) {
    let copySubject;
    const subjectIsObject = isObject(subject) ;
    const subjectIsArray = isArray(subject) ;

    if(subjectIsArray){
        copySubject = [];
    }else if (subjectIsObject) {
        copySubject = {};
    }else{
        return subject;
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key]);
        
        if(keyIsObject){
            copySubject[key] = deepcopy(subject[key]);
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key]);
            }else{
                copySubject[key] = subject[key];
            }
        }
    }
    return copySubject
}

const objt6 = deepcopy(objt1);