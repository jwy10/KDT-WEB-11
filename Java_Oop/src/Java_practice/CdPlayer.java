package Java_practice;

public class CdPlayer implements Music{

	private String title;
	
	@Override
	public void play() {
		System.out.println("MP3 플레이어에서 아이유 꽃갈피 음악을 재생합니다");
		
	}

	@Override
	public void stop() {
		System.out.println("MP3 플레이어에서 아이유 꽃갈피 음악을 정지합니다");
		
	}
	
	
}
