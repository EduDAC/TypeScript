(()=> {

    class Apocalipsis{

        static instance:Apocalipsis;

        private constructor (public name:string) {}

        static callApocalipsis(): Apocalipsis{
            if (!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único');
            }

            return Apocalipsis.instance;
        }

        changeName(newName : string):void{
            this.name = newName;
        }

    }

    const apocalipsis = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    apocalipsis2.changeName('Xavier');
    // const apocalipsis = new Apocalipsis ('Soy Apocalipsis... soy el único')
    // console.log(apocalipsis)

})()