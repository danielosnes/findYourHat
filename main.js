const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const PORT = process.env.PORT || 8001;


class Field {
constructor (field){
this.field = field;
}

print() {
    for(let row of this.field) 
        {
        console.log(row.join(''))
        }   
    }

play() {
let start = this.field;
let xpos = 0;
let ypos = 0;


const prompt = require('prompt-sync')();

    while ([xpos][ypos] != hat) {
        this.print();
        const move = prompt('What is your move?');

        if (move === 'w') { if (ypos === 0) 
            { return (console.log(`You LOSE, Try Again!!!`)); 
            } else {ypos--;} } 
        else if (move === 'a'){if (xpos === 0) 
            { return (console.log(`You LOSE, Try Again!!!`)); 
            }                       
            else {xpos--;}  }
        else if (move === 's'){ if (ypos === (this.field.length)-2) 
            { return (console.log(`You LOSE, Try Again!!!`)); 
            }                       
            else {ypos++;}  }
        else if (move === 'd'){ if (xpos === 50-1) 
            { return (console.log(`You LOSE, Try Again!!!`)); 
            }                             
            else {xpos++;}   };

            if (this.field [ypos][xpos] === hole) 
            {return (console.log(`You LOSE, Try    Again!!!`));}   
            if (this.field [ypos][xpos] === hat) 
            {return (console.log(`You Won !!!`));}       

    
    start[ypos][xpos] = pathCharacter;

    }

}



static generateField() {
var background = [];
let iMax = 15;
let jMax = 50;
let count = 0;
let counter = iMax*jMax;
let HatXPosition = Math.floor((Math.random()*counter)/iMax)
let HatYPosition = Math.floor((Math.random()*counter)/jMax)

for (let i = 0; i < iMax; i++) {
    background[i] = [];
    background.push([]);
    for (let j = 0; j < jMax; j++) {
    background[i].push(fieldCharacter);
    count++;
    }   
}
    
    background[0][0] = pathCharacter;
    
    if((HatYPosition===0)&&(HatXPosition===0)) {
        background[iMax-1][jMax-1] = hat;
    } else 
    {
        background[HatYPosition][HatXPosition] =  hat;
    }

    let percenthole = 25;
    let uMax = (counter/100) * percenthole;   
    for (let u = 0; u < uMax; u++) 
    {
        let holeXPosition = Math.floor((Math.random()*counter)/iMax)
        let holeYPositon = Math.floor((Math.random()*counter)/jMax)
        background[holeYPositon][holeXPosition] =  hole;
    }   
return background

};

}


let generatedfield = Field.generateField();
const myField = new Field(generatedfield);


myField.play()

server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});