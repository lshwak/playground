class Box {
    constructor(index, x, y) {
        // this.index = index; // box 고유번호 부여
        this.x = x;
        this.y = y;
        this.draw();
    }
    draw() {
        context.fillRect(this.x, this.y, 100, 20); // 넓이100, 두께20의 박스
        
        // context.fillStyle = '#fff';
        // context.fillText(this.index, this.x+45, this.y+13);
    }
} // class box