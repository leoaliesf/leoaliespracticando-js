
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

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learninPath: undefined,
    socialMedia:{
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};

const juan = deepcopy(studentBase);
// Object.defineProperty(juan, "name",{
//     value: "juanito",
//     configurable: false,
    
// });
Object.seal(juan); // no deja que se borre ninguna propiedad de juan mi objeto
//Object.isSealed(juan); // nos da true si nuestro objeto es protegido (de configurable de borrar la propiedad)
//Object.isFrozen(juan); // para freeze que tambien incluye writable