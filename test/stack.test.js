class Screen {
    constructor(dim = -1){
        this.dim = dim;
        this.matrix=[];
        // this._setMatrix();
    }
  
    _setMatrix(){
        this.matrix.push(this.dim*[this.dim*[0]]);
  
    }
  }
  
  let screen = new Screen();
  
describe('create matrix', ()=>{

    it('Screen fields', ()=>{
        const testScreen = new Screen();
        expect(testScreen.dim).toBe(-1);
        expect(testScreen.matrix).toEqual([]);
    });
    

    // it('it is array');

    // it('it is bidimentional');

    // it('all values are cero');
})