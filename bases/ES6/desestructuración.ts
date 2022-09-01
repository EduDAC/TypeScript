(()=>{

    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activos: boolean,
        poder: number,
    }

    const avengers:Avengers = {
        nick: 'Samul L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activos: true,
        poder: 1500.123123

    }

    // const { poder, vision } = avengers

    // console.log(poder.toFixed(2), vision.toUpperCase())
    const printAvenger = ( {ironman, ...resto}:Avengers ) => {
        console.log(ironman, resto);
    }

    // printAvenger( avengers)

    const avengersArr: [string, boolean, number] = ['Cap. América',true,150.12];

    const [capi, ironman] = avengersArr;
    // console.log({ironman, capi})

})()