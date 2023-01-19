class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        //console.log(`Nombre ${this.nombre} con fuerza ${this.fuerza}, velocidad ${this.velocidad} y salud ${this.salud}`);
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }
    
    drinkSake(){
        this.salud += 10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.salud = 200
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
