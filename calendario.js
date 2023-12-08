document.addEventListener("DOMContentLoaded", function() {
  const calendar = document.getElementById('calendario');
  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const diasMes = Array.from({ length: 31 }, (_, i) => i + 1);
  const urls = [
      'dom.html', 
      'seg.html',
      'ter.html', 
      'qua.html', 
      'qui.html', 
      'sex.html', 
      'sab.html', 
      'dom.html',
      'seg.html',
      'ter.html',
      'qua.html', 
      'qui.html',
      'sex.html',
      'sab.html',
      'dom.html',
      'seg.html',
      'ter.html',
      'qua.html',
      'qui.html',
      'sex.html',
      'sab.html',
      'dom.html',
      'seg.html',
      'ter.html',
      'qua.html', 
      'qui.html', 
      'sex.html',
      'sab.html',
      'dom.html', 
      'seg.html',
      'ter.html', 
      'sab.html',
      'dom.html', 
      'seg.html', 
      'ter.html', 
      'qua.html', 
      'qui.html'
  ];

  for (let i = 0; i < diasSemana.length; i++) {
      const dayOfWeek = document.createElement('a');
      dayOfWeek.classList.add('day');
      dayOfWeek.textContent = diasSemana[i];
      dayOfWeek.href = urls[i];
      calendar.appendChild(dayOfWeek);
  }

  for (let i = 0; i < diasMes.length; i++) {
      const dayOfMonth = document.createElement('a');
      dayOfMonth.classList.add('day');
      dayOfMonth.textContent = diasMes[i];
      dayOfMonth.href = urls[i];
      calendar.appendChild(dayOfMonth);
  }
});

  function pegardiasemana(){
    const dias = [ 'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaAtual = new Date();
    const diaDaSemana = diaAtual.getDay();
    const nomediasemana = dias[diaDaSemana];
    const elementoDiaSemana = document.getElementById('saudacao-dia');
    elementoDiaSemana.textContent = `Hoje é ${nomediasemana}`;
    if (nomediasemana === 'Domingo') {
      document.getElementById('domingo').style.display = 'table';
  } else if (nomediasemana === 'Segunda-feira'){
    document.getElementById('segunda').style.display = 'table';
  }
  else if (nomediasemana === 'Terça-feira'){
    document.getElementById('terca').style.display = 'table';
  }
  else if (nomediasemana === 'Quarta-feira'){
    document.getElementById('quarta').style.display = 'table';
  }
  else if (nomediasemana === 'Quinta-feira'){
    document.getElementById('quinta').style.display = 'table';
  }
  else if (nomediasemana === 'Sexta-feira'){
    document.getElementById('sexta').style.display = 'table';
  }
  else if (nomediasemana === 'Sábado'){
    document.getElementById('sabado').style.display = 'table';
  }
  }
  pegardiasemana();

  function pegardiasemana(){
    const dias = [ 'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaAtual = new Date();
    const diaDaSemana = diaAtual.getDay();
    const nomediasemana = dias[diaDaSemana];
    const elementoDiaSemana = document.getElementById('saudacao-dia');
    elementoDiaSemana.textContent = `Hoje é ${nomediasemana}`;
    if (nomediasemana === 'Domingo') {
      document.getElementById('domingo').style.display = 'table';
  } else if (nomediasemana === 'Segunda-feira'){
    document.getElementById('segunda').style.display = 'table';
  }
  else if (nomediasemana === 'Terça-feira'){
    document.getElementById('terca').style.display = 'table';
  }
  else if (nomediasemana === 'Quarta-feira'){
    document.getElementById('quarta').style.display = 'table';
  }
  else if (nomediasemana === 'Quinta-feira'){
    document.getElementById('quinta').style.display = 'table';
  }
  else if (nomediasemana === 'Sexta-feira'){
    document.getElementById('sexta').style.display = 'table';
  }
  else if (nomediasemana === 'Sábado'){
    document.getElementById('sabado').style.display = 'table';
  }
  }
  pegardiasemana();