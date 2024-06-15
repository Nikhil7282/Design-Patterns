class CharacterFactory {
  createCharacter(type) {
    if (type === "warrior") {
      return new Warrior();
    } else if (type === "mage") {
      return new Mage();
    } else if (type === "archer") {
      return new Archer();
    } else {
      throw new Error("Unknown character creation");
    }
  }
}

class Warrior {
  type = "warrior";
  attack() {
    console.log("Warrior attacks with a sword!");
  }
}

class Mage {
  type = "mage";

  castSpell() {
    console.log("Mage casts a powerful spell!");
  }
}

class Archer {
  type = "archer";
  shootArrow() {
    console.log("Archer shoots an arrow!");
  }
}

const factory = new CharacterFactory();

const myWarrior = factory.createCharacter("warrior");
const myMage = factory.createCharacter("mage");
const myArcher = factory.createCharacter("archer");
