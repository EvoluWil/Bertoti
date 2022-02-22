import { Eat } from "./eat";

class Pet {
    eat: Eat;

    setEat = (eat: Eat) => {
        this.eat = eat
    }

    handleEat() {
        this.eat.eat
	}
}