class Screen {
    constructor(dim=10){
        this.dim = dim;
        this.matrix=[];
        this._setMatrix();
    }
  
    _setMatrix(){
        for(let i= 0; i< this.dim; i++){
            this.matrix.push([]);
            for(let j= 0; j< this.dim; j++){
                this.matrix[i].push([0]);
            }
        }
    }
  }
  
  let screen = new Screen();
  
describe('create matrix', ()=>{

    let screen;

    beforeEach(()=>{
        screen = new Screen();
    })

    it('Screen fields', ()=>{
        expect(screen.dim).toBeTruthy();
        expect(screen.matrix).toBeTruthy();
    });

    //AFTER CREATE A MATRIX
    it('it is array', ()=>{
        expect(screen.matrix).toEqual(expect.arrayContaining([]));
    });

    it('it is bidimentional', ()=>{
        screen.matrix.forEach(element => {
            expect(element).toEqual(expect.arrayContaining([]));
        });
    });

    it('all values are cero',()=>{
        screen.matrix.forEach((element, indx) => {
            element.forEach((array)=>{
                expect(array).toEqual(expect.arrayContaining([0]));
            })
        });
    });
})