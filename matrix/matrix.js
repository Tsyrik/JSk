export class Matrix {
  constructor(StringOfValues) {
  this.rows=[]
  let Rows = StringOfValues.split('\n')
  for (var i =0; i<Rows.length; ++i)
  {
    this.rows[i] = (Rows[i].split(' '))
  }

  this.columns=[]
  for (var i =0; i<this.rows.length; ++i)
  {
    for (var y =0; y<this.rows[i].length; ++y)
    {
      this.columns=[y][i] = this.rows[i][y]
    }
  }
}
  
  get rows (){
    this.rows
  }

  get columns() {
    this.columns
  }
}

