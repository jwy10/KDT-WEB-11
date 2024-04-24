package Java_practice;
//import java.util.Scanner;
import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
			Vehicle[]  vehicles = new Vehicle[2];
			vehicles[0] = new Car();
			vehicles[1] = new Airplane();
			
			for(Vehicle vehicle: vehicles) {
				vehicle.move();
				//instanceOf : 객체가 지정된 유형의 인스터스인지 여부를 확인하는데 사용하는 비교 연산다
				if(vehicle instanceof Flyable) {
					((Flyable) vehicle).fly();
				}
			}
		
		
		
		
//	public void musicPlayer(Music player, String play) {
//		System.out.println("===" + play + "Player ===");
//		player.play();
//		player.stop();
//	}
//	
//		Main music = new Main();
//		
//		Music mp3 = new Mp3Player();
//		Music cd = new CdPlayer();
//		music.musicPlayer(mp3, "MP3");
//		music.musicPlayer(cd, "CD");
		
		
		
//		Kim kim = new Kim("김지수", "ABC고등학교", 19, 202221321);
//		Baek baek = new Baek("백지수", "XYZ고등학교", 17, 202411321);
//		
//		kim.print();
//		baek.print();
//		
		
		
		
		
//		Scanner s = new Scanner(System.in);
//		ArrayList<RecPrac> rec = new ArrayList<>();
//		
//		while(true) {
//			System.out.println("사각형의 가로와 세로의 길이를 띄어쓰기 기준으로 입력하세요");
//			int wid = s.nextInt();
//			int hei = s.nextInt();
//			
//			if(wid == 0 && hei == 0) {
//				break;
//			}
//			RecPrac rect = new RecPrac(wid);
//			rect.setHeight(hei);
//			rec.add(rect);
//		}
//		for(RecPrac r : rec) {
//			System.out.println("가로길이는 : " + r.getWidth());
//			System.out.println("세로길이는 : " + r.getHeight());
//			System.out.println("넓이는 : " + r.area());
//			System.out.println("----------------------");
//		
//		}
//		//static 출력
//		System.out.println("사각형의 개수는 : " + RecPrac.getCount());
//		
//		int mul = MathMultiply.square(6);
//		System.out.println(mul);
//		s.close();
	}

}
