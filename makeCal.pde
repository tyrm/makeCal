import java.util.*;

calObj myCal = new calObj(5);

void setup() {
  size(800,600);
  background(0);
  
  
}

void draw() {

}

class calObj {
  int spacer;
  
  calObj (int tempS) {  
    spacer = tempS;
  }
  
  void drawCal(int x, int y, int w, int h) {
    int boxW = (w-(spacer*6))/7;
    
  }
}

