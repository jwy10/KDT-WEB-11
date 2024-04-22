package Java_inherit;

public class Main {
	public static void main(String[] args) {
	Cat cat1 = new Cat("고양이","먼로", 3, "야옹" );
	System.out.println(cat1.makeSound());
	
	Dog dog1 = new Dog("강아지","간지", 7, "월월" );
	System.out.println(dog1.makeSound());
	
	}
	
	
	// Main이 없을 때 main + ctrl 스페이스바
//	public static void main(String[] args) {
//		Student student  = new Student("코딩온", 22, "홍길동");
//		System.out.println(student);
//	}

}
