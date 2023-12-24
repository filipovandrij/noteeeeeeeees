import "./GameForm.css";

type Props = {};

const GameForm = (props: Props) => {
  return (
    <div className="game-form">
      <h3>Налаштування гри</h3>
      <div className="timer-container">
        <h4>Таймер</h4>
        <div className="input-value">
          <input type="radio" name="status_timer" id="off" value="off" />
          <label htmlFor="off">Вимкн.</label>

          <input type="radio" name="status_timer" id="direct" value="direct" />
          <label htmlFor="direct">Прямий відлік</label>

          <input
            type="radio"
            name="status_timer"
            id="Indirect"
            value="Indirect"
          />
          <label htmlFor="Indirect">Непрямий відлік</label>
          <input type="number" id="minutes" name="minutes" min="0" max="59" />
          <label htmlFor="minutes">m</label>

          <input type="number" id="seconds" name="seconds" min="0" max="59" />
          <label htmlFor="seconds">s</label>
        </div>
      </div>
      <div className="repeat-container">
        <h4>Повторення карток</h4>
        <div className="input-value">
          <input type="radio" name="check-replay" id="replay" value="replay" />
          <label htmlFor="oreplayff">
            Повторювата поки всі відповіді будуть правильні
          </label>

          <input
            type="radio"
            name="check-replay"
            id="one-time"
            value="one-time"
          />
          <label htmlFor="one-time">Кожну картку лише по одному разу</label>
        </div>
      </div>
      <div>
        <h4 id="taskTransitionLabel">Автоматичний перехід між завданнями</h4>
        <div className="input-value">
          <input type="checkbox" id="taskTransitionCheckbox" />
          <label
            htmlFor="taskTransitionCheckbox"
            aria-labelledby="taskTransitionLabel"
          ></label>
        </div>
      </div>
      <div>
        <h4 id="shuffleTasksLabel">Перемішати порядок завдань</h4>
        <div className="input-value">
          <input type="checkbox" id="shuffleTasksCheckbox" />
          <label
            htmlFor="shuffleTasksCheckbox"
            aria-labelledby="shuffleTasksLabel"
          ></label>
        </div>
      </div>
      <div>
        <h4 id="showCorrectAnswerLabel">Показати правильну відповідь</h4>

        <div className="input-value">
          <input type="checkbox" id="showCorrectAnswerCheckbox" />
          <label
            htmlFor="showCorrectAnswerCheckbox"
            aria-labelledby="showCorrectAnswerLabel"
          ></label>
        </div>
      </div>
      <div>
        <h4>Дедлайн</h4>
        <div className="input-value">
          <input type="radio" name="dead-line" id="is-no" value="is-no" />
          <label htmlFor="is-no">Немає</label>

          <input type="radio" name="dead-line" id="is" value="is" />
          <label htmlFor="dateTimeInput">До:</label>
          <input
            type="datetime-local"
            id="dateTimeInput"
            name="dateTimeInput"
          />
        </div>
      </div>
      <div>
        <h4>Кількість спроб для кожного учасника</h4>

        <div className="input-value">
          <input type="number" id="attempt" name="attempt" min="0" max="30" />
        </div>
      </div>
      <div>
        <h4>Показувати лідебродам всім учасникам</h4>
        <div className="input-value">
          <input type="radio" name="show-all" id="yes" value="yes" />
          <label htmlFor="yes">Так</label>

          <input type="radio" name="show-all" id="no" value="no" />
          <label htmlFor="dateTimeInput">Ні</label>
        </div>
      </div>
    </div>
  );
};

export default GameForm;
