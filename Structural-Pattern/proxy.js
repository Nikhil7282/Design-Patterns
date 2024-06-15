// const person = {
//   name: "asdfg",
//   age: 21,
//   gender: "male",
// };

// const handler = {
//   get: (obj, prop) => {
//     console.log(`The value of ${prop} is ${obj[prop]}`);
//     return obj[prop];
//   },
//   set: (obj, prop, value) => {
//     if (value <= 0) {
//       console.log("The age should be positive");
//       return false;
//     }
//     console.log(
//       `The value of ${prop} is changed from ${obj[prop]} to ${value}`
//     );
//     obj[prop] = value;
//     return true;
//   },
// };

// const personProxy = new Proxy(person, handler);
// // console.log(personProxy);
// personProxy.name;
// personProxy.age = 25;

const fonts = {
  large: "large",
  small: "small",
  medium: "medium",
  tiny: "extraSmall",
  larger: "extraLarge",
};

const legacyFonts = {
  extraSmall: {
    replacementName: "tiny",
    replacementValue: "extraSmall",
  },
  extraLarge: {
    replacementName: "larger",
    replacementValue: "extraLarge",
  },
};

const handler = {
  get: (target, propName) => {
    if (propName in legacyFonts) {
      console.warn(
        `${propName} is deprecated use ${legacyFonts[propName].replacementName}`
      );
      return legacyFonts[propName].replacementValue;
    }
    return target[propName];
  },
};

const proxyFonts = new Proxy(fonts, handler);

// export default { ...fonts, ...legacyFonts };
