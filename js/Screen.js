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
