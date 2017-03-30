import java.util.ArrayList;
import java.util.List;

public class Pile {
    public Pile(){
        boxes = new ArrayList<Box>();
    }

    private ArrayList<Box> boxes;

    public int getHeight(){
        int height = 0;
        for(Box box : boxes){
           height += (box.pile != null && box.pile.getHeight() > box.height) ? box.pile.getHeight() : box.height;
        }

        return  height;
    }

    public void addBox(Box box){
        int pileSize = boxes.size();
        if(pileSize == 0){
            boxes.add(box);
        }else{
            Box lastBox = boxes.get(pileSize -1);
            if(lastBox.width > box.width){
                if(lastBox.pile == null){
                    lastBox.pile = new Pile();
                }

                lastBox.pile.addBox(box);
            }else{
                boxes.add(box);
            }
        }
    }
}
