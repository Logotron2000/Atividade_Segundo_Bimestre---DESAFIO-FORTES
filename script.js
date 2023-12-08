function saudacao() {
    const agora = new Date();
    const hora = agora.getHours();
  
    let mensagem;
  
    if (hora >= 5 && hora < 12) {
      mensagem = 'Bom dia!';
    } else if (hora >= 12 && hora < 18) {
      mensagem = 'Boa tarde!';
    } else {
      mensagem = 'Boa noite!';
    }
  
    document.getElementById('saudacao').innerText = mensagem;
  }
  saudacao();

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

  function calcularPreco() {
    const valorRefeicao = parseFloat(document.getElementById('valor-refe').value);
    const quantiaRefeicoes = parseInt(document.getElementById('quantia-refe').value);
    
    const precoTotal = valorRefeicao * quantiaRefeicoes;
    
    const resultadoDiv = document.getElementById('resultado');
    const p = document.createElement('p');
    p.textContent = `O preço total das refeições é: R$ ${precoTotal.toFixed(2)}`;
    
    resultadoDiv.innerHTML = '';
    resultadoDiv.appendChild(p);
}


  document.getElementById('edit').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
  });
  document.getElementById('cancelar').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });
  document.getElementById('salvar').addEventListener('click', function() {
    var novoTexto = document.getElementById('novoTexto').value;
    document.getElementById('texto').innerText = novoTexto;
    document.getElementById('popup').style.display = 'none';
  });
