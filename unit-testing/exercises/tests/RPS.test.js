const rps = require('../RPS.js');


describe('Rock, Paper, Scissors', function() {
    test('should return TIE! when both players choose rock', function() {
      expect(rps.whoWon('rock', 'rock')).toBe('TIE!');
    });
  
    test('should return TIE! when both players choose paper', function() {
      expect(rps.whoWon('paper', 'paper')).toBe('TIE!');
    });
  
    test('should return TIE! when both players choose scissors', function() {
      expect(rps.whoWon('scissors', 'scissors')).toBe('TIE!');
    });
  
    test('should return Player 2 wins! when player1 chooses rock and player2 chooses paper', function() {
      expect(rps.whoWon('rock', 'paper')).toBe('Player 2 wins!');
    });
  
    test('should return Player 2 wins! when player1 chooses paper and player2 chooses scissors', function() {
      expect(rps.whoWon('paper', 'scissors')).toBe('Player 2 wins!');
    });
  
    test('should return Player 2 wins! when player1 chooses scissors and player2 chooses rock', function() {
      expect(rps.whoWon('scissors', 'rock')).toBe('Player 2 wins!');
    });
  
    test('should return Player 1 wins! when player1 chooses rock and player2 chooses scissors', function() {
      expect(rps.whoWon('rock', 'scissors')).toBe('Player 1 wins!');
    });
  
    test('should return Player 1 wins! when player1 chooses paper and player2 chooses rock', function() {
      expect(rps.whoWon('paper', 'rock')).toBe('Player 1 wins!');
    });
  
    test('should return Player 1 wins! when player1 chooses scissors and player2 chooses paper', function() {
      expect(rps.whoWon('scissors', 'paper')).toBe('Player 1 wins!');
    });
  
    // Bonus Mission: Handle invalid inputs
    test('should return Invalid input when an invalid option is passed', function() {
      expect(rps.whoWon('rock', 'invalid')).toBe('Invalid input');
      expect(rps.whoWon('invalid', 'paper')).toBe('Invalid input');
      expect(rps.whoWon('invalid', 'invalid')).toBe('Invalid input');
    });
  });