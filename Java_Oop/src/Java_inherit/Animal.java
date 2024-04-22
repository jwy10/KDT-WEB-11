package Java_inherit;

public class Animal {
	private String spec;
	private String name;
	private int age;
	
	public Animal(String spec, String name, int age) {
		this.spec = spec;
		this.name = name;
		this.age = age;
	}
	public String getSpec() {
		return spec;
	}
	public void setSpec(String spec) {
		this.spec = spec;
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
	public String makeSound() {
		return spec + "는" + "소리를 낸다";
	}
}
