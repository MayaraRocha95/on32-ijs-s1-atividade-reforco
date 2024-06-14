import { MaterialDeLeitura } from "./materialdeleitura";


class Livro implements MaterialDeLeitura {
    titulo: string;
    autor: string;
    numeroDePaginas: number;

    constructor(titulo: string, autor: string, numeroDePaginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
    }
    exibirDetalhes(): void {
        console.log(`Livro: ${this.titulo}, Autor: ${this.autor},Número de Páginas: ${this.numeroDePaginas}`);
    }
}

class Revista implements MaterialDeLeitura {
    titulo: string;
    autor: string;
    edicao: string;

    constructor(titulo: string, autor: string, edicao: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.edicao = edicao;
    }
    exibirDetalhes(): void {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor},Data de Publicação: ${this.edicao}`);
    }
}

class Artigo implements MaterialDeLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;

    constructor(titulo: string, autor: string, dataPublicacao: Date) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }
    exibirDetalhes(): void {
        console.log(`Artigo: ${this.titulo}, Autor: ${this.autor},Link: ${this.dataPublicacao.toLocaleDateString('pt-BR')}`);

    }
}
const livro = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1000);
const revista = new Revista('Super Interessante', 'Abril', 'Edição 123');
const artigo = new Artigo('Como programar em TypeScript', 'Eu mesmo', new Date(2021, 11, 1));

livro.exibirDetalhes();
revista.exibirDetalhes();
artigo.exibirDetalhes();
