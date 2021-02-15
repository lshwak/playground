class Panel {
 constructor() {
    this.scale = 0;
 }   
 draw() {
    context.fillStyle = 'rgba(255,0,0,0.8)'; 
    // 변환 초기화
    context.resetTransform();
    // 또는 context.setTransform(1,0,0,1,0,0); // 처음 변환할때 단위 행렬로 초기화. 변환 자체는 행렬이다. 변환 자체를 초기화해야 안전.
    context.translate(oX, oY);
    context.scale(this.scale, this.scale);
    context.translate(-oX, -oY); // 중심점을 캔버스 좌측상단끝에서 끌어당겨서 scale을 늘린 다음 다시 되돌려줌.
    context.fillRect(oX-150, oY-150, 300, 300);
    context.resetTransform();
    
   //  if(selectedBox) {
   //    context.fillText(selectedBox.index, oX, oY);
   //  }
 }
 showContent() {
   context.fillStyle = '#fff';
   context.fillText(selectedBox.index, oX, oY);
 }
}