(()=> {
    
    abstract class Mutante {
        constructor (
              public name: string,
              public realName: string,
        ){}
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo a salvo';
        }
    }
    class Villian extends Mutante{
        conquitarMundo(){
            return 'Mundo Conquistado';
        }
    } 

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian ('Magneto', 'Magnus')

    // console.log(wolverine.salvarMundo())
    // console.log(magneto.conquitarMundo())


})()