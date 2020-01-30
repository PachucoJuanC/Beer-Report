var coorsBeers = {
    original:{
        style: 'pilsner',
        size: '12oz'
    },
    tallboy: {
        style: 'pilsner',
        size: '12oz'
    },
    coorsLightTall:{
        style: 'pilsner',
        size: '16oz'
    },
    coorsLight: {
        style: 'pilsner',
        size: '12oz'
    },
};

// How many Coors in inventory
console.log(Object.keys(coorsBeers).length);

// List all types of Coors in inventory
function listTypesOfCoors() {
   console.log(Object.keys(coorsBeers));     
};
