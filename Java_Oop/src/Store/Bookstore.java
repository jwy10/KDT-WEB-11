package Store;

public class Bookstore {
	
	private String name;
	private int books;
	
	public Bookstore(String name, int books) {
		this.name = name;
		this.books = books;
	}
	
	public void print(){
		System.out.println("서점명은 " + name + ", 책 수량은" + books);
	}
}

