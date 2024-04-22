package java_oop;

public class Rectangle {
	private int width;
	private int height;
	
	//기본
	Rectangle() {
//		this.width = 0;
//		this.height = 0;
		this(0, 0);
	}
	
	//정사각형
	Rectangle(int num) {
//		this.width = num;
//		this.height =num;
		this(num, num);
	}
	
	//직사각형 또는 정사각형
	Rectangle(int w, int h) {
		this.width = w;
		this.height = h;
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

}