let house = {
    areas: [{
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair']
        }
    }],
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: ()=>{alert("Beep")}
        }
    }
}

// Find total number of areas in the house //

console.log('number of areas in the house', Object.keys(house.areas[0]).length);

// Add a dining table to the living room //

let livingRoom = ['tv','sofa']

livingRoom.push('dining table')

console.log(livingRoom)

//console.log('add a dining table to the living room', Object.push(house.areas.livingRoom.items = 'dining table')

//console.log('add a dining table to the living room', Object.push(house.areas.livingRoom.items.'dining table'));

//house.areas.livingRoom.items.push('dining table')

// Add a stove to the kitchen //
let kitchen = ['fridge', 'broken chair'];
{
    kitchen.push("stove ")
}
console.log(kitchen)

// Remove the washing machine from bedroomOne //

var bedroomOne = ['bed','washing machine'];

    bedroomOne.pop()

console.log(bedroomOne)

// Find the total number of beds in all rooms //



// Change the color of the car to blue //

let car = ['red']

const changecolor = (word) =>{
    return word.replace("red","blue");
}

let newcolor = car.map(changecolor);

console.log(newcolor);

//car.replace("red","blue");

//console.log(car)

// Add a another car to the garage with a honk function //



// Make the new car honk //

const honk=()=>{alert("Beep")}

honk();
honk();

// Change the 'broken chair' in the kitchen to 'new chair' //

//var kitchen = ['fridge','broken chair']

//const replacechair = (word) =>{
    // return word.replace('broken chair','new chair');
//}

//let newchair = kitchen.map(replacechair);

//console.log(newchair);

// If the house has a garden, console.log the name of the flower //

