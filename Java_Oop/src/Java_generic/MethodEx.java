package Java_generic;
import java.util.ArrayList;

public class MethodEx {
	
	//타입파라미터를 사용하는 메서드 : 데이터 타입을 매개변수처럼 다루게 해준다
	//extends : ~을 상속하는
	//super: ~가 상속하는
	public <T> void print(T value) {
		System.out.println(value);
	}
	
	//리턴이 있는 메소드
	public <T> T returnTypeMethod(T[] arr) {
		return arr [2];
	}
	//extends키워드 
	public <T extends Integer> double sum(T[] arr) {
		double sum = 0.0;
		for(T num : arr) {
			sum += num.doubleValue();
		}
		return sum;
	}
// 와일드카드가 읽기전용 주로 사용(? extends T)
//	public void wildList(ArrayList<? extends Number> list) {
//		list.add(value); //불가능
//	}
//	
	//super키워드 : 쓰기전용으로 주로 사용
	public <T> void addList(ArrayList<? super T> list, T value) {
		list.add(value);
	}
	
	
	
	
	public static void main(String[] args) {
		MethodEx example = new MethodEx();
		
		//타입파라미터 사용 메소드
		example.print("Hello World");
		example.print(12423);
		example.print(false);
		
		//리턴타입이 있는 메소드
		Integer[] ints = {1,2,3,4,5};
		Double[] doubs = {1.1,2.2,3.3,4.4,5.5};
		System.out.println(example.returnTypeMethod(ints));
		System.out.println(example.returnTypeMethod(doubs));
		
		//extends키워드
		System.out.println(example.sum(ints));
		
		//super키워드
		ArrayList<Integer> numList = new ArrayList<>();
		example.addList(numList, 66);
//		example.addList(numList, 38.44);
		
		//와일드카드 주의사항
		//1. 복잡성 : 과도하게 사용하면 복잡성이 증가하여 협업에 적절하지 않음
		//2. 제한된 작업 : '? extends T' 같은 경우 새로운 요소 추가 불가능
		
	}
}
