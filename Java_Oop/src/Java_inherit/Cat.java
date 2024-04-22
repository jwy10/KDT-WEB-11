package Java_inherit;


public class Cat extends Animal {
	private String howl;
	
	public Cat (String spec, String name, int age, String howl) {
		super(spec,name,age);
		this.howl = howl;
	}
	
	public String makeSound() {
		return "우리집 " + getSpec() +" " + getName() + "는 "+ howl + "소리를 낸다";
	}
	
	
}
