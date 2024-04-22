package Store;
import java_oop.Car;

public class Main {

	public static void main(String[] args) {
		Bookstore bookstore = new Bookstore("교보문고", 1000);
		bookstore.print();

		Car kia = new Car(20);
		kia.getSpeed();
		System.out.println(kia.getSpeed());
	}

}
