class Screen {
    constructor(data){
        this.dim = dim;
        this.matrix=[];
        this._setMatrix();
    }
  
    _setMatrix(){
        this.matrix.push(this.dim*[this.dim*[0]]);
  
    }
  }
  
  let screen = new Screen(10);
  