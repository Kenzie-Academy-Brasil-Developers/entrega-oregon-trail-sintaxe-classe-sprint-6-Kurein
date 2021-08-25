class Traveler {
    constructor(name, food = 1, isHealthy = true){
        this.name = name
        this.food = food
        this.isHealthy = isHealthy
    }

    hunt(){
        this.food += 2
    }

    eat(){
        if(this.food === 0){
            this.isHealthy = false
        } else {
            this.food -= 1
        }
    }
}

class Wagon {
    constructor(capacity, passengers = []){
        this.capacity = capacity
        this.passengers = passengers
    }

    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }

    join(traveler){
        if(this.getAvailableSeatCount() !== 0){
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine(){
        let check = false

        this.passengers.forEach((element) =>{
            if(element.isHealthy === false){
                check = true
            }
        })

        return check
    }

    totalFood(){
        let count = 0
        this.passengers.forEach((element) =>{
            count += element.food
        })

        return count
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);