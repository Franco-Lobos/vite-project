export default class Screen {
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
        if(data === 0 && operator === 0){
            return data;
        }   

        if(operator===undefined){
            return data+2;
        }
        if(operator===1){
            return data+1;
        }
        if(operator===0){
            return data-1;
        }     

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
        let dim = this.dim;
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
