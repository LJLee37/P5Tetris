export default class GameMap {
  constructor(p5, width, height) {
    this.row = 22;
    this.column = 12;
    this.width = width;
    this.height = height;
    this.cellWidth = this.width / this.column;
    this.cellHeight = this.height / this.row;
    this.arrRow = [];
    this.lastTime = 0;
    this.arrBlock = [];
    this.newBlockType = 'I';
    for (let i = 0; i < this.row; i++) {
      let column = [];
      for (let j = 0; j < this.column; j++) {
        if (j === 0 || i === 0 || i === 21 || j === 11) column.push("#");
        else column.push(" ");
      }
      this.arrRow.push(column);
    }
    /*
    this.arrRow[1][1] = "I";
    this.arrRow[2][1] = "I";
    this.arrRow[3][1] = "I";
    this.arrRow[4][1] = "I";
    */
  }
  draw(p5) {
    
    p5.text("" + this.lastTime, )
    //p5.fill(255, 0, 0);
    p5.stroke(255,0,0);
    //p5.rect(0, 0, this.width, this.height);
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        let cell = this.arrRow[i][j];
        if (cell === "#") {
          p5.fill(102);
        } else if (cell === "I") {
          p5.fill(0, 255, 255);
        } else {
          p5.noFill();
        }
        p5.rect(
          j * this.cellWidth,
          i * this.cellHeight,
          this.cellWidth,
          this.cellHeight
        );
      }
    }
    //let elapsed = p5.millis() - this.lastTime;
    //if(elapsed > 1000) {
    //  p5.text("time : " + elapsed, 100,100);
    //  this.lastTime = p5.millis();
    //  this.generate_block();
    //}
    p5.text("new block : " + this.newBlockType, this.width + 10, 100);
  }
  generate_block(){
    let blockTypes = ['I', 'J', 'L', 'O', 'Z', 'S', 'T'];
    let randomIndex = this.getRandomInt(0, blockTypes.length);
    this.newBlockType = blockTypes[randomIndex];
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }
}
