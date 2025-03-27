// Класс для управления играми в терминале
export class TerminalGames {
  constructor() {
    // Инициализация игр
    this.games = {
      guess: new GuessNumberGame(),
    };
  }
  
  // Получение списка доступных игр
  getAvailableGames() {
    return Object.keys(this.games);
  }
  
  // Получение игры по имени
  getGame(gameName) {
    return this.games[gameName.toLowerCase()];
  }
  
  // Провеяет, существует ли игра с таким именем
  hasGame(gameName) {
    return !!this.games[gameName.toLowerCase()];
  }
}

// Базовый класс для всех игр
class TerminalGame {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.isActive = false;
    this.isConfirmStart = false;
  }
  
  // Начало игры
  start() {
    this.isActive = true;
    return this.getIntroMessage();
  }
  
  // Завершение игры
  end() {
    this.isActive = false;
    this.reset();
    return this.getEndMessage();
  }
  
  // Сброс состояния игры
  reset() {
    this.isActive = false;
    this.isConfirmStart = false;
  }
  
  // Получить сообщение о начале игры
  getIntroMessage() {
    return ["Игра началась!"];
  }
  
  // Получить сообщение о завершении игры
  getEndMessage() {
    return ["Игра завершена!"];
  }
  
  // Обработка команды/ввода игрока
  handleCommand(command) {
    if (!this.isActive) return null;
    return ["Команда не распознана."];
  }
  
  // Проверка команды выхода из игры
  isExitCommand(command) {
    const exitCommands = ["EXIT", "QUIT", "CANCEL", "ВЫХОД", "ВЫЙТИ", "ОТМЕНА"];
    return exitCommands.includes(command.toUpperCase().trim());
  }
}

// Игра "Угадай число"
class GuessNumberGame extends TerminalGame {
  constructor() {
    super("guess", "Угадай число от 1 до 100");
    this.min = 1;
    this.max = 100;
    this.targetNumber = null;
    this.attempts = 0;
    this.maxAttempts = 10;
    this.previousGuesses = [];
  }
  
  // Начало игры
  start() {
    this.isActive = true;
    this.isConfirmStart = false;
    this.targetNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.attempts = 0;
    this.previousGuesses = [];
    return this.getIntroMessage();
  }
  
  // Сброс игры
  reset() {
    super.reset();
    this.targetNumber = null;
    this.attempts = 0;
    this.previousGuesses = [];
  }
  
  // Получить вступительное сообщение
  getIntroMessage() {
    return [
      "=== ИГРА: УГАДАЙ ЧИСЛО ===",
      "",
      "Я загадал число от " + this.min + " до " + this.max + ".",
      "У вас есть " + this.maxAttempts + " попыток, чтобы угадать его.",
      "Введите число и я скажу, больше оно или меньше загаданного.",
      "",
      "В любой момент вы можете выйти из игры, набрав EXIT или ВЫХОД.",
      "",
      "Введите число:"
    ];
  }
  
  // Получить сообщение о завершении игры
  getEndMessage() {
    return [
      "=== ИГРА ЗАВЕРШЕНА ===",
      "",
      "Спасибо за игру! Возвращаемся в терминал.",
      "Для запуска игры снова используйте команду GUESS."
    ];
  }
  
  // Обработка ввода пользователя
  handleCommand(command) {
    // Проверка команды выхода
    if (this.isExitCommand(command)) {
      this.isActive = false;
      return [
        "Выход из игры...",
        "Загаданное число было: " + this.targetNumber,
        "Спасибо за игру!"
      ];
    }
    
    // Подтверждение начала игры
    if (!this.isConfirmStart && ["Y", "YES", "ДА", "Д", "START", "СТАРТ", "НАЧАТЬ"].includes(command.toUpperCase().trim())) {
      this.isConfirmStart = true;
      return this.getIntroMessage();
    }
    
    // Отмена подтверждения начала игры
    if (!this.isConfirmStart && ["N", "NO", "НЕТ", "Н", "CANCEL", "ОТМЕНА"].includes(command.toUpperCase().trim())) {
      this.isActive = false;
      return ["Игра отменена. Возвращаемся в терминал."];
    }
    
    // Проверка ввода пользователя
    const userGuess = parseInt(command.trim());
    
    // Проверка на валидность ввода
    if (isNaN(userGuess)) {
      return [
        "Некорректный ввод. Введите число от " + this.min + " до " + this.max + ".",
        "Для выхода из игры наберите EXIT."
      ];
    }
    
    // Проверка на диапазон
    if (userGuess < this.min || userGuess > this.max) {
      return [
        "Число должно быть в диапазоне от " + this.min + " до " + this.max + ".",
        "Для выхода из игры наберите EXIT."
      ];
    }
    
    // Увеличиваем счетчик попыток и добавляем попытку в историю
    this.attempts++;
    this.previousGuesses.push(userGuess);
    
    // Проверка на победу
    if (userGuess === this.targetNumber) {
      const result = [
        "=== ПОЗДРАВЛЯЕМ! ВЫ УГАДАЛИ! ===",
        "",
        "Загаданное число: " + this.targetNumber,
        "Количество попыток: " + this.attempts,
        "",
        "История ваших попыток: " + this.previousGuesses.join(", "),
        "",
        "Хотите сыграть еще раз? (да/нет)"
      ];
      this.isConfirmStart = false; // Ожидаем подтверждения для новой игры
      this.targetNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      this.attempts = 0;
      this.previousGuesses = [];
      return result;
    }
    
    // Проверка на исчерпание попыток
    if (this.attempts >= this.maxAttempts) {
      const result = [
        "=== ИГРА ОКОНЧЕНА ===",
        "",
        "У вас закончились попытки!",
        "Загаданное число было: " + this.targetNumber,
        "",
        "История ваших попыток: " + this.previousGuesses.join(", "),
        "",
        "Хотите сыграть еще раз? (да/нет)"
      ];
      this.isConfirmStart = false; // Ожидаем подтверждения для новой игры
      this.targetNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      this.attempts = 0;
      this.previousGuesses = [];
      return result;
    }
    
    // Подсказка для пользователя
    const hint = userGuess < this.targetNumber ? "больше" : "меньше";
    return [
      "Загаданное число " + hint + " чем " + userGuess + ".",
      "Попытка " + this.attempts + " из " + this.maxAttempts + ".",
      "",
      "История ваших попыток: " + this.previousGuesses.join(", "),
      "",
      "Введите следующее число:"
    ];
  }
} 