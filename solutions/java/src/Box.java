public class Box {
    public Box(int _width, int _height){
        width = _width;
        height = _height;
    }

    public Box(int _size){
        width = _size;
        height = _size;
    }

    public int width;

    public int height;

    public Pile pile;
}
