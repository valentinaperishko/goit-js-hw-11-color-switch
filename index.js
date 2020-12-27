const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const startBtn = document.querySelector('[data-action="start"]');
  const stopBtn = document.querySelector('[data-action="stop"]');
  const body = document.querySelector('body');

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  let setInt;

  startBtn.addEventListener("click", (num) => {
    setInt = setInterval(() => {
        num = randomIntegerFromInterval(0, colors.length - 1);
        body.style.backgroundColor = colors[num];
    }, 1000);
  startBtn.classList.toggle('nonactive'); 
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', true);
  });

  stopBtn.addEventListener("click", () => {
  stopBtn.classList.toggle('nonactive');
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);  
  body.style.backgroundColor = '';  
  clearInterval(setInt);
    
  });

