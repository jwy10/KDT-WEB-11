package Java_interface;

public class Main {

	public static void main(String[] args) {
//		LolGame game = new LolGame();
//		FifaGame game = new FifaGame();
//		game.up();
//		game.down();
//		game.left();
//		game.right();
//		game.spacebar();
//		GameConsole.staticPrint();
		
		//다형성
		GameConsole game1 = new LolGame();
		GameConsole game2 = new FifaGame();
		
		//게임 콘솔을 배열을 사용하여 다형성
		GameConsole[] games = {game1,game2};
		for( GameConsole game: games) {
			game.up();
			game.down();
			game.left();
			game.right();
			game.spacebar();
		}
		
	}

}
