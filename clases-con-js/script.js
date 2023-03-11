const natalia = {
    name: "natalia",
    age: 20,
    cursosAprobados: [
    "curso definitivo de html y css",
    "otro curso"],

    aprobarCurso: function(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
};


class estudiante {
    constructor(name, age, cursosaprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosaprobados;
        this.aprobarCurso = function (nuevo) {
            this.cursosAprobados.push(nuevo);
        };
    }
}

const nuevoEstudiante = new estudiante("leonardo", 31, ["algebra", "matematica"],);
nuevoEstudiante.aprobarCurso("quimica");
