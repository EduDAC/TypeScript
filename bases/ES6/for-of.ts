(()=> {

    type Avengers = {
        name: string;
        weapon: string; 
    }

    const ironman: Avengers = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    }

    const capitanAmerica: Avengers = {
        name: 'Capitán América',
        weapon: 'Escuedo',
    }
    
    const thor: Avengers = {
        name: 'Thor',
        weapon: 'Mjolnir',
    }

    const avengers: Avengers[] = [ironman, thor, capitanAmerica];
    
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon)
    }

})()