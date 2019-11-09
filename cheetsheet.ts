// console.clear();
// console.log(`1. Uncalled function checks`);
// console.log(`===========================`);

// interface User {
//   isAdmin(): boolean;
//   promote?(): boolean;
// }

// function checkAdminRights(user: User) {
//   if (user.isAdmin) {
//     user.isAdmin();
//     console.log('I am an admin!')
//   } else {
//     console.log(`I am no admin!`)
//   }

//   if (user.promote) {
//     console.log('I can be promoted!')
//   }
// }

// checkAdminRights({ isAdmin: () => false });


// console.clear();
// console.log(`2. Recursive type alias`);
// console.log(`===========================`);

// type Person = Person;

// type Json = string | number | boolean | null | Json[] | { [key: string]: Json }


// console.clear();
// console.log(`3. Nullish Coalescing`);
// console.log(`===========================`);

// const preferences = { volume: 0, welcomeText: '', sidebarVisible: false };

// // let realVolume = preferences.volume === undefined || preferences.volume === null ? 50 : preferences.volume;
// let realVolume = preferences.volume ?? 50;
// let realWelcomeText = preferences.welcomeText ?? 'Hello World';
// let realSidebarVisible = preferences.sidebarVisible ?? true;

// let volume: number;
// if (preferences.volume === null || preferences.volume === undefined) {
//   volume = 50;
// } else {
//   volume = preferences.volume;
// }

// console.log(`Volume is ${realVolume}`);
// console.log(`Welcome text is "${realWelcomeText}"`);
// console.log(`Sidebar visible: ${realSidebarVisible}`);



// console.clear();
// console.log(`4. Optional Chaining`);
// console.log(`===========================`);

// interface Company {
//   name: string;
//   presentation?: () => void;
// }

// interface FuelTank {
//   volume: number;
//   producer?: Company;
// }

// interface Car {
//   name: string;
//   fuelTank?: FuelTank;
//   similarCars?: Car[];
// }

// const audi: Car = {
//   name: 'Audi A3',
//   fuelTank: {
//     volume: 60,
//     producer: {
//       name: 'Metallwerk München',
//       presentation: () => console.log('Hello, we are Metallwerk München')
//     }
//   }
// }

// const tesla: Car = {
//   name: 'Tesla Model 3'
// }

// const homemade: Car = {
//   name: 'Homemade Car',
//   fuelTank: {
//     volume: 10
//   },
//   similarCars: [audi]
// }

// function getFuelTankProducer(car: Car) {
//   return (car && car.fuelTank && car.fuelTank.producer) ? car.fuelTank.producer.name : undefined;
// }

// function getFuelTankProducer(car: Car) {
//   return car?.fuelTank?.producer?.name;
// }

// function presentTankProducer(car: Car) {
//   car?.fuelTank?.producer?.presentation?.();
// }

// function similarCar(car: Car) {
//   return car?.similarCars?.[0]?.name;
// }

// const producer = getFuelTankProducer(audi);
// console.log(`Producer: ${producer}`);

// presentTankProducer(audi);

// console.log(similarCar(tesla)); 




// console.clear();
// console.log(`7. Nullish Coalescing + Optional Chaining`);
// console.log(`=========================================`);

// interface Customer {
//   name: string;
//   getDiscount?: () => number;
// }

// const bst: Customer = {
//   name: 'bst',
//   getDiscount: () => 100
// };

// const newCustomer: Customer = {
//   name: 'new customer'
// };

// const meanPerson: Customer = {
//   name: 'mean person',
//   getDiscount: () => 0
// }

// const customers = [bst, newCustomer, meanPerson];


// customers.forEach(customer => {
//   // const discount = customer.getDiscount?.() ?? 10;
//   const discount = customer.getDiscount && customer.getDiscount() !== null && customer.getDiscount() !== undefined ? customer.getDiscount() : 10;
//   console.log(`${customer.name} gets ${discount}% off`);
// });


// console.clear();
// console.log('Release Notes:');
// console.log('https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html');
// console.log();
// console.log('Code:');
// console.log('https://github.com/bene-starzengruber/typescript3.7/blob/master/cheetsheet.ts');