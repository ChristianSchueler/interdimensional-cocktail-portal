// Interdimensional Cocktail Portal (c) 2022 Christian Schüler

console.log("Interdimensional Cocktail Portal booting...");

var isWin = process.platform === "win32";
// enable this on Raspberry Pi!
//import { Gpio } from "onoff";

if (isWin) {
	console.log('Running on Windows!');
} else {
	
	console.log('Running on Raspberry Pi!');
  	let Gpio = {}; 
}


/** @class Pump
*/
/* class Pump {
	gpioId: number;				// which GPIO pin the pump will connect to
	static flow_dl_m: number = 1;
	
	constructor(gpio: number) {
		this.gpioId = gpio;
	}
} */

// aka dispenser
// @todo rename to Dispenser
class IngredientPump {
	name: string = "ingredient";				// unique name
	description: string = "";		// screen description
	isAlcohol: boolean = true;
	gpioId: number = 2;				// which GPIO pin the pump will connect to
	static flow_ml_m: number = 1;
	
	constructor(name: string, isAlcohol: boolean, gpioId: number) {
		console.log(`Ingredient: ${name}, ${isAlcohol ? `alcohol` : `no alcohol`}, GPIO ID: ${gpioId}`);

		//const led = new onoff.Gpio(2, 'out');
	}
	
	//async dispense(dose_ml: number) {

	//	let duration_s = dose_ml * IngredientPump.flow_ml_m / 60;
        //return "";
    //}
	
	//async dispense(dose_ml: number): Promise<string> {
    //    return await Promise.resolve("OK"); 
    //}
}

class Arm {
}

/** @class InterdimensionalCocktailPortal
*/
class InterdimensionalCocktailPortal {
	pumps: IngredientPump[];
	drinkRepository: { name: string; isAlcohol: boolean; gpioId: number }[] = [
		{ name: 'vodka', isAlcohol: true, gpioId: 2 },
		{ name: 'lemon-juice', isAlcohol: false, gpioId: 3 },
		{ name: 'strawberry-juice', isAlcohol: false, gpioId: 4 }];
	
	constructor() {

		this.pumps = [];
		
		for (let index in this.drinkRepository) {
			let p = new IngredientPump(this.drinkRepository[index].name, this.drinkRepository[index].isAlcohol, this.drinkRepository[index].gpioId);
			this.pumps.push(p);
		}
	}
	
	run() {
		console.log("Interdimensional Cocktail Portal run...");
	}
}

let bot = new InterdimensionalCocktailPortal();
bot.run();