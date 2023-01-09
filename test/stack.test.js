class Screen {
    constructor(dim=10){
        this.dim = dim;
        this.matrix=this._setMatrix();
        this.brigthness = this._setMatrix();

    }
  
    _setMatrix(){
        const returner=[];
        for(let i= 0; i< this.dim; i++){
            returner.push([]);
            for(let j= 0; j< this.dim; j++){
                returner[i].push(0);
            }
        }
        return returner;
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

    turnOff(vect1,vect2){
        _switcher(vect1,vect2,0);
    }
    
    toggle(vect1,vect2){
        _switcher(vect1,vect2);
    }

    countOn(){
        let counter;
        for(let i = x1; i<= x2; i++){
            for(let j = y1; j<= y2; j++){
                if(this.matrix[i][j]){
                    counter++;
                }
            }
        }
        return counter;
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

    it('switch', ()=>{
        expect((screen._switch(1))).toBe(0);
        expect((screen._switch(0))).toBe(1);
        expect(screen._switch(screen._switch(1))).toBe(1);
        expect(screen._switch(screen._switch(0))).toBe(0);
    });

})


