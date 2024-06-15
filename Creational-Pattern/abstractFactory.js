class ControlFactory {
  createButton() {
    return { type: "button" };
  }
}

class LightControlFactory extends ControlFactory {
  createButton() {
    const button = super.createButton();
    button.color = "white";
    return button;
  }
}

class DarkControlFactory extends ControlFactory {
  createButton() {
    const button = super.createButton();
    button.color = "black";
    return button;
  }
}

const lightFactory = new LightControlFactory();
const darkFactory = new DarkControlFactory();

const lightButton = lightFactory.createButton();
const darkButton = darkFactory.createButton();

console.log(lightButton);
console.log(darkButton);
