class Screen {
    constructor(dim=10){
        this.dim = dim;
        this.matrix=[];
        this._setMatrix();
        // this._switcher([0,0],[10,10],1)
    }
  
    _setMatrix(){
        for(let i= 0; i< this.dim; i++){
            this.matrix.push([]);
            for(let j= 0; j< this.dim; j++){
                this.matrix[i].push(0);
            }
        }
    }

    _switch(bool){
        if(bool){
            return 0;
        }
        return 1;
    }

    _switcher(vect1,vect2, value){
        let x1 = vect1[0];
        let y1 = vect1[1];
        let x2 = vect2[0];
        let y2 = vect2[1];

        for(let i = x1; i<= x2; i++){
            for(let j = y1; j<= y2; j++){
                this.matrix[i][j]= value!== undefined ? value: this._switch(this.matrix[i][j]);
            }
        }
    }
    
    turnOn(vect1,vect2){
        _switcher(vect1,vect2,1);
    }

    turnOf(vect1,vect2){
        _switcher(vect1,vect2,0);
    }
    
    switch(vect1,vect2){
        _switcher(vect1,vect2);
    }
  }

//Testing
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
        screen.matrix.forEach((element) => {
            element.forEach((item)=>{
                expect(item).toEqual(0);
            })
        });
    });
})


describe('change light status', ()=>{
    
    let screen;

    beforeEach(()=>{
        screen = new Screen();
    });

    it('switcher', ()=>{
        let dimIndx = screen.dim-1;
        let defaultMatrix = new Screen().matrix;

        screen._switcher([0,0],[dimIndx,dimIndx]);
        defaultMatrix.forEach((x,xIndx)=>{
            x.forEach((y)=>{
                expect(screen.matrix[xIndx][y]).not.toEqual(defaultMatrix[xIndx][y]);
            })
        })

    })

})