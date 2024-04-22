package Java_inherit;

public class Person {
	private String name;
	private int age;
	
	public Person(String name, int age) {
		this.name = name;
		this.age=age;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	//Override 어노테이션이며 상속 받았다는것을 명시적으로 알려주기 위해서 작성
	@Override
	public String toString() {
		return "사람 이름은 " + name + ", 나이는 " +age + "입니다";
	}
}
