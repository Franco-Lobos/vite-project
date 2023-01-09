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
                this.brigthness[i][j] = this._brigthnessManager(this.brigthness[i][j], value);
            }
        }
    }
    
    _brigthnessManager(data, operator){
        if(data === operator === 0){
            return data;
        }   
        if(operator===1){
            return data+1;
        }
        if(operator===0){
            return data-1;
        }     

        return data+2;
    }

    turnOn(vect1,vect2){
        this._switcher(vect1,vect2,1);
    }

    turnOff(vect1,vect2){
        this._switcher(vect1,vect2,0);
    }
    
    toggle(vect1,vect2){
        this._switcher(vect1,vect2);
    }

    countOn(){
        let counter = 0;
        let brigthness = 0;
        for(let i = 0; i< dim; i++){
            for(let j = 0; j< dim; j++){
                if(this.matrix[i][j]){
                    counter++;
                }
                if(this.brigthness[i][j]){
                    brigthness+= this.brigthness[i][j];
                }
            }
        }
        return [counter, brigthness];
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
            x.forEach((y, yIndx)=>{
                expect(screen.matrix[xIndx][yIndx]).not.toEqual(y);
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

describe('brigtness', ()=>{  
    let screen;
    beforeEach(()=>{
        screen = new Screen();
    });

    it('increase brigtness', ()=>{
        let dimIndx = screen.dim-1;
        screen.turnOn(dimIndx,dimIndx);
        screen.matrix.forEach((x,xIndx)=>{
            x.forEach((y, yIndx)=>{
                expect(screen.brigthness[xIndx][yIndx]).toEqual(y);
            })
        })
    })

    it('increase x2 brigtness', ()=>{
        let dimIndx = screen.dim-1;
        screen.turnOn(dimIndx,dimIndx);
        screen.turnOn(dimIndx,dimIndx);

        screen.matrix.forEach((x,xIndx)=>{
            x.forEach((y, yIndx)=>{
                expect(screen.brigthness[xIndx][yIndx]).toEqual(y*2);
            })
        })
    })

    it('increase x2 (toggle) brigtness', ()=>{
        let dimIndx = screen.dim-1;
        screen.toggle(dimIndx,dimIndx);

        screen.matrix.forEach((x,xIndx)=>{
            x.forEach((y, yIndx)=>{
                expect(screen.brigthness[xIndx][yIndx]).toEqual(y*2);
            })
        })
    })

    it('increase an decrease', ()=>{
        let dimIndx = screen.dim-1;
        screen.turnOn(dimIndx,dimIndx);
        screen.turnOn(dimIndx,dimIndx);
        screen.turnOff(dimIndx,dimIndx);

        screen.matrix.forEach((x,xIndx)=>{
            x.forEach((y, yIndx)=>{
                expect(screen.brigthness[xIndx][yIndx]).toEqual(y);
            })
        })
    })

    it('decrease', ()=>{
        let dimIndx = screen.dim-1;
        screen.turnOn(dimIndx,dimIndx);
        screen.turnOn(dimIndx,dimIndx);
        screen.turnOff(dimIndx,dimIndx);

        screen.matrix.forEach((x,xIndx)=>{
            x.forEach((y, yIndx)=>{
                expect(screen.brigthness[xIndx][yIndx]).toEqual(y);
            })
        })
    })

    it('decrease limit 0', ()=>{
        let dimIndx = screen.dim-1;
        screen.turnOff(dimIndx,dimIndx);
        screen.turnOff(dimIndx,dimIndx);

        screen.matrix.forEach((x,xIndx)=>{
            x.forEach((y, yIndx)=>{
                expect(screen.brigthness[xIndx][yIndx]).toEqual(y);
            })
        })
    })
})


