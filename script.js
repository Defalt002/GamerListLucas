function adicionarJogo(tipo) {
    let nomeJogo;
    let lista;

    if (tipo === 'zerado') {
        nomeJogo = document.getElementById('nome-jogo-zerado').value;
        lista = document.getElementById('lista-zerados');
        document.getElementById('nome-jogo-zerado').value = ''; // Limpa o campo após adicionar
    } else if (tipo === 'andamento') {
        nomeJogo = document.getElementById('nome-jogo-andamento').value;
        lista = document.getElementById('lista-andamento');
        document.getElementById('nome-jogo-andamento').value = ''; // Limpa o campo após adicionar
    } else if (tipo === 'jogado') {
        nomeJogo = document.getElementById('nome-jogo-jogado').value;
        lista = document.getElementById('lista-jogados');
        document.getElementById('nome-jogo-jogado').value = ''; // Limpa o campo após adicionar
    }

    // Verifica se o nome do jogo não está vazio
    if (nomeJogo.trim()) {
        const li = document.createElement('li');
        li.textContent = nomeJogo;

        // Cria o botão de remover
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.className = 'remove-button';
        removeButton.onclick = function() {
            lista.removeChild(li); // Remove o item da lista
        };

        li.appendChild(removeButton); // Adiciona o botão ao item da lista
        lista.appendChild(li); // Adiciona o item da lista à lista
    } else {
        alert('Por favor, insira o nome do jogo.');
    }
}