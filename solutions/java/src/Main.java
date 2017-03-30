public class Main {

    public static void main(String[] args) {
        Pile pile = new Pile();
        pile.addBox(new Box(1, 2));
        pile.addBox(new Box(2, 3));
        pile.addBox(new Box(1, 2));
        pile.addBox(new Box(1, 2));
	    System.out.println(pile.getHeight());
    }
}
