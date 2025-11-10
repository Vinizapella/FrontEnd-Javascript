const biblioteca = require('./biblioteca.js');

console.log("--- 1. Adicionando Livros ---");
biblioteca.adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia");
biblioteca.adicionarLivro("1984", "George Orwell", 1949, "Ficção Científica");
biblioteca.adicionarLivro("Dom Quixote", "Miguel de Cervantes", 1605, "Clássico");
biblioteca.adicionarLivro("O Hobbit", "J.R.R. Tolkien", 1937, "Fantasia");

console.log("\n--- Tentando adicionar livro duplicado ---");
biblioteca.adicionarLivro("1984", "George Orwell", 1949, "Ficção Científica");

console.log("\n--- 2. Listando Todos os Livros ---");
console.log(biblioteca.listarLivros());

console.log("\n--- 3. Buscando Livro por Título (1984) ---");
console.log(biblioteca.buscarLivroPorTitulo("1984"));

console.log("\n--- 4. Editando Livro (ID 1) ---");
biblioteca.editarLivro(1, { titulo: "O Senhor dos Anéis: A Sociedade do Anel" });
console.log(biblioteca.buscarLivroPorTitulo("O Senhor dos Anéis: A Sociedade do Anel"));

console.log("\n--- 5. Alterando Disponibilidade (ID 2) ---");
console.log("Antes:", biblioteca.buscarLivroPorTitulo("1984"));
biblioteca.alterarDisponibilidade(2);
console.log("Depois:", biblioteca.buscarLivroPorTitulo("1984"));

console.log("\n--- 6. Removendo Livro (ID 3) ---");
console.log("Removido:", biblioteca.removerLivro(3));
console.log("Catálogo após remoção:");
console.log(biblioteca.listarLivros());

console.log("\n--- (Bônus) Listando Livros Disponíveis ---");
console.log(biblioteca.listarLivrosDisponiveis());

console.log("\n--- (Bônus) Buscando por Autor (Tolkien) ---");
console.log(biblioteca.buscarLivroPorAutor("tolkien"));

console.log("\n--- (Bônus) Listando por Gênero (Fantasia) ---");
console.log(biblioteca.listarLivrosPorGenero("fantasia"));

console.log("\n--- (Bônus) Ordenando por Ano (Decrescente) ---");
console.log(biblioteca.ordenarLivrosPorAno('decrescente'));

console.log("\n--- (Bônus) Ordenando por Ano (Crescente) ---");
console.log(biblioteca.ordenarLivrosPorAno('crescente'));