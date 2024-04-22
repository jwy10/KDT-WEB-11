package Java_practice;

public class RecPrac {
	private int width;
	private int height;
	//static 변수 추가
	private static int COUNT = 0;

	
	//기본
	RecPrac() {
//		this.width = 0;
//		this.height = 0;
		this(0);
	}
	
	//정사각형
//	RecPrac(int num) {
////		this.width = num;
////		this.height =num;
//		this(num, num);
//	}
	
	//직사각형 또는 정사각형
	RecPrac(int w) {
		COUNT++;
		this.width = w;
	
	}
	
	int area() {
		return width * height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}
	
	//static 메소드 추가
	public static int getCount() {
		return COUNT;
	}

}

