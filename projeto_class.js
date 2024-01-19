class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataque = this.obterAtaque();
        const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }

    obterAtaque() {
        switch (this.tipo) {
            case "mago":
                return "magia";
            case "guerreiro":
                return "espada";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
            default:
                return "ataque desconhecido";
        }
    }
}

// Exemplo de uso:
const heroi1 = new Heroi("Herói1", 25, "mago");
const heroi2 = new Heroi("Herói2", 30, "guerreiro");

heroi1.atacar();  // Saída esperada: "O mago atacou usando magia"
