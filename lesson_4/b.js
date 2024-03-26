class Creature {
  constructor(name, habitat) {
    this.name = name;
    this.habitat = habitat;
  }
}

class LandCreature extends Creature {
  chase() {
    console.log("Chases");
  }
}

class SkyCreature extends Creature {
  fly() {
    console.log("Flys");
  }
}

const CanBreatheFireMixin = {
  breatheFire() {
    console.log("Breathes fire");
  },
};

function applyMixin(targetClass, mixin) {
  Object.assign(targetClass.prototype, mixin);
}

class Wolf extends LandCreature {
  constructor(name, habitat, color) {
    super(name, habitat);
    this.color = color;
  }

  howl() {
    console.log("Howls");
  }
}

class Wyvern extends SkyCreature {}
Object.assign(Wyvern.prototype, CanBreatheFireMixin);

class Drake extends LandCreature {}
Object.assign(Drake.prototype, CanBreatheFireMixin);

let wolf = new Wolf("Wolf", "Forest", "Gray");
console.log(wolf.chase()); // "Wolf is chasing."
console.log(wolf.howl()); // "Wolf howls."

let wyvern = new Wyvern("Wyvern", "Mountains");
console.log(wyvern.fly()); // "Wyvern is flying."
console.log(wyvern.breatheFire()); // "Wyvern breathes fire."

let drake = new Drake("Drake", "Caves");
console.log(drake.chase()); // "Drake is chasing."
console.log(drake.breatheFire()); // "Drake breathes fire."
