// Métodos
    const animal = {
        nome: "bob",
        latir: function () {
            console.log("au au");
        }
    };
    console.log(animal.latir());

    animal.latir();

// Aprofundando em métodos
    const pessoa = {
        nome: "Nahtanm",
        getNome: function () {
            return this.nome;
        },

        setNome: function (nome) {
            this.nome = nome;
        }
    };

    console.log(pessoa.getNome());

    pessoa.setNome("Nahtanm carvalho Santos");

    console.log(pessoa.getNome());

// Prototype
    const text = "abc";

    console.log(Object.getPrototypeOf(text));

// Mais sobre prototype
    const pai = {
        a: "b"
    };

    console.log(Object.getPrototypeOf(pai));

    const filho = Object.create(pai);

    console.log(filho);

    console.log(filho.a);

//  Classes basicas
    const cachorro = {
        raca: null
    };

    const pastorAlemao = Object.create(cachorro);

    pastorAlemao.raca = "Pastor alemão"

    console.log(pastorAlemao.raca);

// Classes baseadas em funções construtoras
    function criarCachorro(nome, raca){
        const cachorro = Object.create({});

        cachorro.nome = nome;
        cachorro.raca = raca;

        return cachorro;
    }

    const bob = criarCachorro("Bob", "Bulldog");
    console.log(bob);

// Funções como classes
    function Cachorro(nome, raca){
        this.nome = nome
        this.raca = raca
    }

    const husky = new Cachorro("Ozzy", "Husky");
    console.log(husky);

// Métodos na função construtora
    Cachorro.prototype.uivar = function(){
        console.log("Auuuu!");
    }

    husky.uivar();

// Classes ES6
    class CachorroClasse{
        constructor(nome, raca){
            this.nome = nome;
            this.raca = raca;
        }
    }

    const jeff = new Cachorro("Jeff", "Labrador");

    console.log(jeff);

// Mais sobre Classes
    class Caminhao{
        constructor(eixos, cor){
            this.eixos = eixos;
            this.cor = cor;
        }

        descreverCaminhao(){
            console.log(`Este caminão tem ${this.eixos} eixos e é da cor ${this.cor}`);
        }

    }

    const caminhao = new Caminhao(10, "Branco");

    caminhao.descreverCaminhao();

// Override
    class Humano{
        constructor(nome, idade){
            this.nome = nome;
            this.idade = idade;
        }
    }

    const nahtanm = new Humano("Nahtanm", 23);

    console.log(nahtanm);

    Humano.prototype.idade = "Não definida";

    console.log(nahtanm.idade);

    nahtanm.idade = 24;

    console.log(nahtanm.idade);

// Symbol em Classes
    class Aviao{
        constructor(marca, turbinas){
            this.marca = marca;
            this.turbinas = turbinas;
        }
    }

    const asas = Symbol();
    const pilotos = Symbol();

    Aviao.prototype[asas] = 2;
    Aviao.prototype[pilotos] = 3;

    const boing = new Aviao("Boeing", 10);

    console.log(boing);

    console.log(boing[asas]);
    console.log(boing[pilotos]);

// Getters setters
    class Post{
        constructor(titulo, descricao, tags){
            this.titulo = titulo;
            this.descricao = descricao;
            this.tags = tags;
        }

       get getTitulo(){
        return `Você está lendo: ${this.titulo}`;
       }
       
       set setTags(tags){
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays;
       }

    }

    const meuPost = new Post("Poster", "Programação");

    console.log(meuPost);

    meuPost.setTags = "Programação, java, css";

    console.log(meuPost.tags);

// Herança
    class Mamifero{
        constructor(patas) {
            this.patas = patas;
        }
    }   

    class Lobo extends Mamifero{
        constructor(patas, nome){
            super(patas,patas);
            this.nome = nome;
        }
    }

    const shark = new Lobo(4, "Lobinho");

    console.log(shark);

// Instanceof
    console.log(shark instanceof Lobo);
    console.log(Lobo instanceof Mamifero);
