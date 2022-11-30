import React, { useState } from 'react';
import logo1 from './ball-1.png';
import './App.css';

import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.js'

function NonMagic() {
  let answers = ["Ask magic ball..", "Hmm, let me second..", "What can i do for you?", "Don't ask a question you're not ready to hear the answer to"];
  
  return (
    <p className='uk-animation-fade'>{answers[Math.floor(Math.random() * answers.length)]}</p>
  )
}
function Magic() {
  let answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];


  // let answers = ["Это точно.", "Это точно так.", "Без сомнения.", "Да, определенно.", "Вы можете положиться на это.", "Как я вижу, да.", "Скорее всего.", "Перспективы хорошие.", "Да.", "Признаки указывают на да.", "Ответ туманный, попробуйте еще раз. ", "Спросите позже.", "Лучше не говорить вам сейчас.", "Не могу предсказать сейчас.", "Сосредоточьтесь и спросите снова.", "Не рассчитывайте на это.", "Мой ответ - нет.", "Мои источники говорят, что нет.", "Перспективы не очень хорошие.", "Очень сомнительно."];

  

  return (
    <p className='uk-animation-fade'>{answers[Math.floor(Math.random() * answers.length)]}</p>
  )
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        {count === 0 ? <NonMagic /> : <Magic /> }
        <div className='uk-width-1-3 uk-text-muted uk-text-meta'>
          <p>Ask a question, out loud or in your mind, and click on the button. If, however, you want to write the question, you can do it here:</p>
        </div>
        <div className='uk-flex'>
          <input className='uk-input uk-button-secondary uk-text-muted uk-text-meta' type="text" name="" placeholder='You can ask anything..'/>
          <input className='uk-button uk-button-primary' type="button" value="Ask" onClick={() => setCount(count + 1)}/>
        </div>
      </main>
    </div>
  );
}

export default App;
