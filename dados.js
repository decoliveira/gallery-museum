let dados = [
    {
        nome: "Mona Lisa",
        artista: "Leonardo da Vinci",
        imagem: "img/Mona Lisa.jpg",
        descricao: "Retrato icônico de uma mulher com um sorriso enigmático, considerado uma das obras mais famosas do mundo.",
        tag: "retrato, sorriso",
        localizacao: "Museu do Louvre, Paris",
        estilo: "Renascimento",
        link: {
            site: "https://www.louvre.fr/en/oeuvre-notices/mona-lisa",
            wikipedia: "https://pt.wikipedia.org/wiki/Mona_Lisa"
        }
    },
    {
        nome: "A Noite Estrelada",
        artista: "Vincent van Gogh",
        imagem: "img/Noite Estrelada.jpg",
        descricao: "Pintura de uma noite estrelada com redemoinhos de luz, refletindo o estilo único de Van Gogh.",
        tag: "paisagem, estrelas",
        localizacao: "Museu de Arte Moderna, Nova York",
        estilo: "Pós-Impressionismo",
        link: {
            site: "https://www.moma.org/collection/works/79802",
            wikipedia: "https://pt.wikipedia.org/wiki/A_Noite_Estrelada"
        }
    },
    {
        nome: "David",
        artista: "Michelangelo",
        imagem: "img/david.jpeg",
        descricao: "Escultura em mármore representando o herói bíblico David, uma obra-prima da arte renascentista.",
        tag: "escultura, mármore",
        localizacao: "Galeria da Academia, Florença",
        estilo: "Renascimento",
        link: {
            site: "https://www.accademia.org/explore-museum/artworks/michelangelos-david/",
            wikipedia: "https://pt.wikipedia.org/wiki/David_(Michelangelo)"
        }
    },
    {
        nome: "O Grito",
        artista: "Edvard Munch",
        imagem: "img/ogrito.jpeg",
        descricao: "Pintura expressiva mostrando uma figura em agonia, simbolizando a ansiedade e o desespero humanos.",
        tag: "expressão, agonia",
        localizacao: "Galeria Nacional, Oslo",
        estilo: "Expressionismo",
        link: {
            site: "https://www.nasjonalmuseet.no/en/collection/object/NG.M.01685",
            wikipedia: "https://pt.wikipedia.org/wiki/O_Grito"
        }
    },
    {
        nome: "Guernica",
        artista: "Pablo Picasso",
        imagem: "img/guernica.jpg",
        descricao: "Mural que retrata os horrores da guerra, com figuras distorcidas e uma paleta monocromática.",
        tag: "guerra, distorção",
        localizacao: "Museu Reina Sofia, Madrid",
        estilo: "Cubismo",
        link: {
            site: "https://www.museoreinasofia.es/en/collection/artwork/guernica",
            wikipedia: "https://pt.wikipedia.org/wiki/Guernica_(quadro)"
        }
    },
    {
        nome: "A Persistência da Memória",
        artista: "Salvador Dalí",
        imagem: "img/apersistenciadamemoria.jpg",
        descricao: "Pintura surrealista com relógios derretendo, explorando a fluidez do tempo.",
        tag: "surrealismo, tempo",
        localizacao: "Museu de Arte Moderna, Nova York",
        estilo: "Surrealismo",
        link: {
            site: "https://www.moma.org/collection/works/79018",
            wikipedia: "https://pt.wikipedia.org/wiki/A_Persist%C3%AAncia_da_Mem%C3%B3ria"
        }
    },
    {
        nome: "O Nascimento de Vênus",
        artista: "Sandro Botticelli",
        imagem: "img/O nascimento de venus.jpg",
        descricao: "Pintura que representa o nascimento da deusa Vênus, um ícone do Renascimento italiano.",
        tag: "mitologia, renascimento",
        localizacao: "Galeria Uffizi, Florença",
        estilo: "Renascimento",
        link: {
            site: "https://www.uffizi.it/en/artworks/the-birth-of-venus",
            wikipedia: "https://pt.wikipedia.org/wiki/O_Nascimento_de_V%C3%AAnus"
        }
    },
    {
        nome: "A Escola de Atenas",
        artista: "Rafael",
        imagem: "img/aescoladeatenas.jpeg",
        descricao: "Fresco que retrata os grandes filósofos da Grécia Antiga em uma composição harmoniosa.",
        tag: "filosofia, renascimento",
        localizacao: "Museus Vaticanos, Cidade do Vaticano",
        estilo: "Renascimento",
        link: {
            site: "https://www.museivaticani.va/content/museivaticani/en.html",
            wikipedia: "https://pt.wikipedia.org/wiki/A_Escola_de_Atenas"
        }
    },
    {
        nome: "A Liberdade Guiando o Povo",
        artista: "Eugène Delacroix",
        imagem: "img/aliberdadeguiandoopovo.jpg",
        descricao: "Pintura que simboliza a Revolução Francesa e a luta pela liberdade.",
        tag: "revolução, liberdade",
        localizacao: "Museu do Louvre, Paris",
        estilo: "Romantismo",
        link: {
            site: "https://www.louvre.fr/en/oeuvre-notices/liberty-leading-the-people",
            wikipedia: "https://pt.wikipedia.org/wiki/A_Liberdade_Guiando_o_Povo"
        }
    },
    {
        nome: "O Jardim das Delícias Terrenas",
        artista: "Hieronymus Bosch",
        imagem: "img/jardim das delicias.jpg",
        descricao: "Tríptico que explora temas de pecado e moralidade com imagens fantásticas e alegóricas.",
        tag: "religião, alegoria",
        localizacao: "Museu do Prado, Madrid",
        estilo: "Renascimento",
        link: {
            site: "https://www.museodelprado.es/en/the-collection/art-work/the-garden-of-earthly-delights/19b74906-69a2-4b30-bd8d-6e7d7a179bfb",
            wikipedia: "https://pt.wikipedia.org/wiki/O_Jardim_das_Del%C3%ADcias_Terrenas"
        }
    },
    {
        nome: "O Casamento Arnolfini",
        artista: "Jan van Eyck",
        imagem: "img/The_Arnolfini_portrait_(1434).jpg",
        descricao: "Pintura que representa um casal em uma cerimônia de casamento, destacando o detalhamento e simbolismo da arte flamenga.",
        tag: "retratos, simbolismo",
        localizacao: "Galeria Nacional, Londres",
        estilo: "Gótico",
        link: {
            site: "https://www.nationalgallery.org.uk/paintings/jan-van-eyck-the-arnolfini-portrait",
            wikipedia: "https://pt.wikipedia.org/wiki/O_Casal_Arnolfini"
        }
    },
    {
        nome: "A Última Ceia",
        artista: "Leonardo da Vinci",
        imagem: "img/aultimaceia.jpg",
        descricao: "Fresco que retrata a última refeição de Jesus com seus discípulos, um marco da arte renascentista.",
        tag: "religião, renascimento",
        localizacao: "Convento de Santa Maria delle Grazie, Milão",
        estilo: "Renascimento",
        link: {
            site: "https://www.cenacolovinciano.org/",
            wikipedia: "https://pt.wikipedia.org/wiki/A_%C3%9Altima_Ceia"
        }
    },
    {
        nome: "O Beijo",
        artista: "Gustav Klimt",
        imagem: "img/O beijo.jpg",
        descricao: "Pintura que captura um momento íntimo com uma estética ornamentada e dourada, característica do Art Nouveau.",
        tag: "romance, art-nouveau",
        localizacao: "Galeria Österreichische, Viena",
        estilo: "Art Nouveau",
        link: {
            site: "https://www.kunsthauswien.at/en/exhibitions/the-kiss-by-gustav-klimt/",
            wikipedia: "https://pt.wikipedia.org/wiki/O_beijo_(Gustav_Klimt)"
        }
    },
    {
        nome: "A Morte de Sardanápalo",
        artista: "Eugène Delacroix",
        imagem: "img/A Morte de Sardanápalo.jpg",
        descricao: "Pintura dramática que retrata o suicídio do rei Assírio Sardanápalo e a destruição de seu palácio.",
        tag: "história, dramático",
        localizacao: "Museu do Louvre, Paris",
        estilo: "Romantismo",
        link: {
            site: "https://www.louvre.fr/en/oeuvre-notices/the-death-of-sardanapalus",
            wikipedia: "https://pt.wikipedia.org/wiki/Sardan%C3%A1palo"
        }
    },
    {
        nome: "A Grande Onda de Kanagawa",
        artista: "Katsushika Hokusai",
        imagem: "img/A Grande Onda de Kanagawa.jpg",
        descricao: "Impressão em madeira que mostra uma enorme onda ameaçando três barcos, um exemplo icônico da arte ukiyo-e.",
        tag: "paisagem, ukiyo-e",
        localizacao: "Museu Britânico, Londres",
        estilo: "Ukiyo-e",
        link: {
            site: "https://www.britishmuseum.org/collection/object/E_Oc-1891-1205-1",
            wikipedia: "https://pt.wikipedia.org/wiki/A_Grande_Onda_de_Kanagawa"
        }
    },
    {
        nome: "A Dança",
        artista: "Henri Matisse",
        imagem: "img/A Dança.jpg",
        descricao: "Pintura vibrante que retrata uma dança em círculo, com cores fortes e formas simplificadas.",
        tag: "dança, modernismo",
        localizacao: "Museu da Arte Moderna, Nova York",
        estilo: "Fauvismo",
        link: {
            site: "https://www.moma.org/collection/works/79018",
            wikipedia: "https://pt.wikipedia.org/wiki/La_Danse_(Matisse)"
        }
    },
    {
        nome: "A Coroação de Napoleão",
        artista: "Jacques-Louis David",
        imagem: "img/A Coroação de Napoleão.jpeg",
        descricao: "Pintura monumental que representa a cerimônia de coroação de Napoleão Bonaparte como imperador da França.",
        tag: "história, neoclassicismo",
        localizacao: "Museu do Louvre, Paris",
        estilo: "Neoclassicismo",
        link: {
            site: "https://www.louvre.fr/en/oeuvre-notices/the-coronation-of-napoleon",
            wikipedia: "https://pt.wikipedia.org/wiki/A_Coroa%C3%A7%C3%A3o_de_Napole%C3%A3o"
        }
    },
    {
        nome: "A Ronda Noturna",
        artista: "Rembrandt",
        imagem: "img/A Ronda Noturna.jpg",
        descricao: "Pintura que retrata um grupo de guardas cívicos em uma cena noturna iluminada dramaticamente.",
        tag: "retratos, barroco",
        localizacao: "Rijksmuseum, Amsterdã",
        estilo: "Barroco",
        link: {
            site: "https://www.rijksmuseum.nl/en/collection/SK-C-5",
            wikipedia: "https://pt.wikipedia.org/wiki/A_Ronda_Noturna"
        }
    },
    {
        nome: "A Menina com Brinco de Pérola",
        artista: "Johannes Vermeer",
        imagem: "img/A Menina com Brinco de Pérola.jpeg",
        descricao: "Retrato de uma jovem mulher com um brinco de pérola, conhecida por seu brilho e profundidade emocional.",
        tag: "retratos, barroco",
        localizacao: "Mauritshuis, Haia",
        estilo: "Barroco",
        link: {
            site: "https://www.mauritshuis.nl/en/explore/the-collection/artworks/girl-with-a-pearl-earring/",
            wikipedia: "https://pt.wikipedia.org/wiki/Meisje_met_de_parel"
        }
    },
    {
        nome: "O Lavrador de Café",
        artista: "Jean-François Millet",
        imagem: "img/O Lavrador de Café.jpeg",
        descricao: "Pintura que mostra um trabalhador rural em um campo de café, representando a vida agrícola com um realismo tocante.",
        tag: "vida rural, realismo",
        localizacao: "Museu d'Orsay, Paris",
        estilo: "Realismo",
        link: {
            site: "https://www.musee-orsay.fr/en/collections/works-in-focus/painting/commentaire_id/la-glaneuse-460.html",
            wikipedia: "https://pt.wikipedia.org/wiki/O_Lavrador_de_Caf%C3%A9"
        }
    }
];
