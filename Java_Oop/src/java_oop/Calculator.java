package java_oop;

public class Calculator {
	public int add(int num1, int num2) {
		return num1 + num2;
	}
	public int sub(int num1, int num2) {
		return num1 - num2;
	}
	public int mul(int num1, int num2) {
		return num1 * num2;
	}
	public double div(int num1, int num2) {
		if(num2 != 0) {
			return (double) num1 / num2;
		}else {
			throw new IllegalArgumentException("오류");
		}
	}
}
