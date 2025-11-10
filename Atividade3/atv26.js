// 26 - Crie uma função chamada "converterMorse" que recebe uma string em código Morse como
// parâmetro e retorna a mesma string em letras.
// console.log(converterMorse(".- -... -.-.")); // Exemplo de saída: "abc"
// console.log(converterMorse("--. --- --- -.. -.. --- --. .-.. ..- --. .... --- --.")); // Exemplo de saída: "good morning"

function converterMorse(codigoMorse) {
  const dicionarioMorse = {
    ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e",
    "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j",
    "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o",
    ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t",
    "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y",
    "--..": "z", " ": " "
  };

  let letrasMorse = codigoMorse.split(" ");
  let textoConvertido = "";

  for (let i = 0; i < letrasMorse.length; i++) {
    let codigo = letrasMorse[i];
    if (dicionarioMorse[codigo] !== undefined) {
      textoConvertido = textoConvertido + dicionarioMorse[codigo];
    } else if (codigo === "") {
      textoConvertido = textoConvertido + " ";
    }
  }
  return textoConvertido;
}

console.log("Q26 (abc):", converterMorse(".- -... -.-."));
console.log("Q26 (exemplo usuário):", converterMorse("--. --- --- -.. -.. --- --. .-.. ..- --. .... --- --."));
console.log("Q26 (com espaço):", converterMorse("--. --- --- -..  -- --- .-. -. .. -. --."));