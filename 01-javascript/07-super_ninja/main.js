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
        console.log(`Nombre ${this.nombre} con fuerza ${this.fuerza}, velocidad ${this.velocidad} y salud ${this.salud}`);
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
}