(()=> {

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Fermando';
    console.log(typeof(myCustomVariable))

    myCustomVariable = 20;
    console.log(typeof(myCustomVariable))

    myCustomVariable = {
        name: 'Bruce Banner',
        age: 43,
        powers: [1]
    }
    console.log(typeof(myCustomVariable))


}) ()