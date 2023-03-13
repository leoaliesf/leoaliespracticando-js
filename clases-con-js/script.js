// const natalia = {
//     name: "natalia",
//     age: 20,
//     cursosAprobados: [
//     "curso definitivo de html y css",
//     "otro curso"],

//     aprobarCurso: function(nuevoCurso){
//         this.cursosAprobados.push(nuevoCurso)
//     }
// };


// class estudiante {
//     constructor(name, age, cursosaprobados) {
//         this.name = name;
//         this.age = age;
//         this.cursosAprobados = cursosaprobados;
//         this.aprobarCurso = function (nuevo) {
//             this.cursosAprobados.push(nuevo);
//         };
//     }
// }

// const nuevoEstudiante = new estudiante("leonardo", 31, ["algebra", "matematica"],);
// nuevoEstudiante.aprobarCurso("quimica");
function videoPlay(Id) {
    const urlVideo = "www.google.com";
    console.log("se esta reproduciendo  " + urlVideo)
}
function videoPause(Id) {
    const urlVideo = "www.google.com";
    console.log("se esta pausando  " + urlVideo)
}
class PLatziClass {
    constructor({
        name,
        videoID,
    })
    {
        this.name = name;
        this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoPause(this.videoID);
    }
}

class learnpath{
    constructor({
        name, 
        courses = []
    })
    {
        this.name = name;
        this.courses = courses;
    }
}
class course{
    constructor({name, clases = [],isFree = false, Lang = 'spanish'})
    {
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
        this.Lang = Lang;
    }
    get name(){
        return this._name;
    }
    set name(nuevoNombre){
        if (nuevoNombre === "malo") {
            console.error('que...haces')
        } else {
            this._name = nuevoNombre;    
        }
        
    }
}

class student{
    constructor({
        name,
        email,
        userName,
        twitter = undefined,
        facebook = undefined,
        instagram = undefined,
        aprobados = [],
        learnpath = [],
    }){
    this.name = name;
    this.email = email;
    this.userName = userName;
    this.socialMedio = {
        twitter,
        instagram,
        facebook,
    };
    this.aprobados = aprobados;
    this.learnpath = learnpath;
    }
}

 class freeStudent   extends student{
    constructor(prop){
        super(prop);   
    }
    aprovedCourses(newCourse){
        if(newCourse.isFree){
            this.aprobados.push(newCourse)
        }else{
            console.warn(`no puedes acceder a este ${this.name}`)
        }
    }
 }

 class basicStudent  extends student{
    constructor(prop){
        super(prop);
    }
    aprovedCourses(newCourse){
        if(newCourse.Lang !== 'english'){
            this.aprobados.push(newCourse)
        }else{
            console.warn(`no puedes acceder a este ${this.name}`)
        }
    }
 }

 class expertStudent  extends student{
    constructor(prop){
        super(prop);
    }
    aprovedCourses(newCourse){
        this.aprobados.push(newCourse)
    }
 }



const progrmaBasic = new course ({
    name: "la vida es una ratico aprende a programar",
    isFree : true,
})
const lonuevo = new course({
    name: 'la vida loca',
    Lang: 'english',
})
const leonardo = new freeStudent({
    name: 'leonardo',
    userName: 'leoaliesf',
    email :  'leoaleisf@gmail.com',
    instagram: '@leoaliesf',
})
const leonardo2 = new basicStudent({
    name: 'leonnar',
    userName: 'aliesf',
    email :  'aleisf@gmail.com',
    instagram: '@aliesf',
})
const escuelaWeb = new learnpath({
    name: "Escuela de Desarrollo Web",
    courses: [
      progrmaBasic,
      'cursoDefinitivoHTML',
      lonuevo,
    ],
  });
  
  const escuelaData = new learnpath({
    name: "Escuela de Data Science",
    courses: [
      progrmaBasic,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });
  
  const escuelaVgs = new learnpath({
    name: "Escuela de Videojuegos",
    courses: [
      'cursoProgBasica',
      "Curso de Unity",
      "Curso de Unreal",
      lonuevo,
    ],
  })
  

