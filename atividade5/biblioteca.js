let catalogo = [];
let proximoId = 1;

function adicionarLivro(titulo, autor, ano, genero) {
    const tituloExistente = catalogo.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
    if (tituloExistente) {
        console.log(`Erro: O livro "${titulo}" já existe no catálogo.`);
        return null;
    }
    
    const novoLivro = {
        id: proximoId,
        titulo: titulo,
        autor: autor,
        ano: ano,
        genero: genero,
        disponivel: true
    };
    catalogo.push(novoLivro);
    proximoId++;
    return novoLivro;
}

function listarLivros() {
    return catalogo;
}

function buscarLivroPorTitulo(titulo) {
    const livroEncontrado = catalogo.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
    return livroEncontrado || null;
}

function editarLivro(id, novosDados) {
    const livro = catalogo.find(l => l.id === id);
    if (!livro) {
        return null;
    }
    if (novosDados.titulo) {
        livro.titulo = novosDados.titulo;
    }
    if (novosDados.autor) {
        livro.autor = novosDados.autor;
    }
    if (novosDados.ano) {
        livro.ano = novosDados.ano;
    }
    if (novosDados.genero) {
        livro.genero = novosDados.genero;
    }
    return livro;
}

function alterarDisponibilidade(id) {
    const livro = catalogo.find(l => l.id === id);
    if (livro) {
        livro.disponivel = !livro.disponivel;
        return livro;
    }
    return null;
}

function removerLivro(id) {
    const index = catalogo.findIndex(l => l.id === id);
    if (index !== -1) {
        catalogo.splice(index, 1);
        return true;
    }
    return false;
}

function listarLivrosDisponiveis() {
    return catalogo.filter(livro => livro.disponivel);
}

function buscarLivroPorAutor(autor) {
    return catalogo.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
}

function listarLivrosPorGenero(genero) {
    return catalogo.filter(l => l.genero.toLowerCase() === genero.toLowerCase());
}

function ordenarLivrosPorAno(ordem = 'crescente') {
    const copia = [...catalogo];
    if (ordem === 'decrescente') {
        return copia.sort((a, b) => b.ano - a.ano);
    } else {
        return copia.sort((a, b) => a.ano - b.ano);
    }
}

module.exports = {
    adicionarLivro,
    listarLivros,
    buscarLivroPorTitulo,
    editarLivro,
    alterarDisponibilidade,
    removerLivro,
    listarLivrosDisponiveis,
    buscarLivroPorAutor,
    listarLivrosPorGenero,
    ordenarLivrosPorAno
};