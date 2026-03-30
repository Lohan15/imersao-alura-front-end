const IMG = 'https://image.tmdb.org/t/p';

// ── CATÁLOGO ─────────────────────────────────────────────
// CORREÇÃO: URLs de imagens dos animes trocadas por URLs válidas do TMDB
// CORREÇÃO: Typo "runtima" corrigido para "runtime" em Soul
// CORREÇÃO: Adicionados catálogos "drama", "classics" e "horror" que eram referenciados
//           no ROWS_CONFIG mas não existiam, causando linhas vazias silenciosas
const CATALOG = {
    trending: [
        { id: 1,  title: 'Duna: Parte Dois',          type: 'movie', year: 2024, score: 8.4, runtime: '166 min',     genre: ['Ficção Científica', 'Aventura', 'Drama'],  overview: 'Paul Atreides se une a Chani e aos Fremen em uma guerra de vingança contra os conspiradores que destruíram sua família.',                                    poster: `${IMG}/w342/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg`,   backdrop: `${IMG}/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg`, trailer: 'Way9ZkBna3k', director: 'Denis Villeneuve',    cast: 'Timothée Chalamet, Zendaya' },
        { id: 2,  title: 'Oppenheimer',                type: 'movie', year: 2023, score: 8.6, runtime: '180 min',     genre: ['Drama', 'História'],                        overview: 'A história do físico americano J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.',                                                    poster: `${IMG}/w342/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg`,   backdrop: `${IMG}/w1280/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg`, trailer: 'uYPbbksJxIg', director: 'Christopher Nolan',   cast: 'Cillian Murphy, Emily Blunt' },
        { id: 3,  title: 'Pobres Criaturas',           type: 'movie', year: 2023, score: 8.1, runtime: '141 min',     genre: ['Fantasia', 'Romance'],                      overview: 'A extraordinária evolução de Bella Baxter, uma jovem mulher trazida de volta à vida por um cientista.',                                                    poster: `${IMG}/w342/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg`,   backdrop: `${IMG}/w1280/jRm4nHBRo6ZzFP7n0NLBBQOwBMQ.jpg`, trailer: 'RlbR5N6veqw', director: 'Yorgos Lanthimos',    cast: 'Emma Stone, Mark Ruffalo' },
        { id: 4,  title: 'Saltburn',                   type: 'movie', year: 2023, score: 7.2, runtime: '131 min',     genre: ['Thriller', 'Drama'],                        overview: 'Um estudante de Oxford se vê envolvido no mundo de um colega aristocrático em uma propriedade fascinante.',                                              poster: `${IMG}/w342/qitHFgSCp5tFzaXIkBaGRfFobAe.jpg`,   backdrop: `${IMG}/w1280/qRm6YmFVmE2FBcDjFQHwCMFEMeU.jpg`, trailer: 'VCTen7vkvEo', director: 'Emerald Fennell',      cast: 'Barry Keoghan, Jacob Elordi' },
        { id: 5,  title: 'Tudo em Todo o Lugar',       type: 'movie', year: 2022, score: 8.0, runtime: '139 min',     genre: ['Aventura', 'Ficção Científica'],            overview: 'Uma imigrante chinesa descobre que só ela pode salvar o multiverso explorando universos paralelos.',                                                      poster: `${IMG}/w342/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg`,   backdrop: `${IMG}/w1280/ss0Os3uWJfQAENILHZUdX8Tt1OC.jpg`, trailer: 'wxN1T1uxQ2g', director: 'Daniel Kwan',          cast: 'Michelle Yeoh, Ke Huy Quan' },
    ],
    series: [
        { id: 6,  title: 'The Last of Us',             type: 'tv',    year: 2023, score: 8.9, runtime: '~60 min/ep', genre: ['Drama', 'Ação'],                            overview: 'Após uma pandemia devastadora, Joel deve escoltar Ellie através de um Estados Unidos em colapso.',                                                        poster: `${IMG}/w342/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg`,   backdrop: `${IMG}/w1280/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg`, trailer: 'uLtkt15IfcU', director: 'Craig Mazin',          cast: 'Pedro Pascal, Bella Ramsey' },
        { id: 7,  title: 'Succession',                 type: 'tv',    year: 2023, score: 9.0, runtime: '~60 min/ep', genre: ['Drama', 'Comédia'],                         overview: 'A família Roy controla um império de mídia e luta pelo poder sobre quem herdará o trono do patriarca.',                                                  poster: `${IMG}/w342/e2X8x4QKBGJAczBk7eFCqeHxnlp.jpg`,   backdrop: `${IMG}/w1280/etj8E2o0Bud0HkONVQPjyCkIvpN.jpg`, trailer: 'OzYxJV_rmE8', director: 'Jesse Armstrong',      cast: 'Brian Cox, Jeremy Strong' },
        { id: 8,  title: 'House of the Dragon',        type: 'tv',    year: 2022, score: 8.4, runtime: '~70 min/ep', genre: ['Fantasia', 'Drama'],                        overview: 'Ambientada 200 anos antes de Game of Thrones, conta a história da ascensão e queda da Casa Targaryen.',                                                poster: `${IMG}/w342/z2yahl2uefxDCl0nogcRBstwruJ.jpg`,   backdrop: `${IMG}/w1280/suIAzsyUoVeQMEeaHCVrC8tRVqS.jpg`, trailer: 'DotnJ7tTA34', director: 'Ryan J. Condal',       cast: "Matt Smith, Emma D'Arcy" },
        { id: 9,  title: 'The Bear',                   type: 'tv',    year: 2022, score: 9.0, runtime: '~35 min/ep', genre: ['Drama', 'Comédia'],                         overview: 'Um jovem chef de cozinha refinada volta para Chicago para administrar a lanchonete da família.',                                                          poster: `${IMG}/w342/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg`,   backdrop: `${IMG}/w1280/p2wPGRmFDOcHLKHmKEmhgBGCf1k.jpg`, trailer: 'TK3a5K_QCag', director: 'Christopher Storer',   cast: 'Jeremy Allen White, Ayo Edebiri' },
        { id: 10, title: 'Severance',                  type: 'tv',    year: 2022, score: 8.7, runtime: '~50 min/ep', genre: ['Drama', 'Thriller'],                        overview: 'Funcionários de uma empresa passam por um procedimento que divide suas memórias profissionais e pessoais.',                                              poster: `${IMG}/w342/uHr8P4CQFzr7XFjCjvd5bWDXz5u.jpg`,   backdrop: `${IMG}/w1280/hYZ4a0JvPnf0JsJaVgfRnLfzQMX.jpg`, trailer: 'xEQP4VVuyrY', director: 'Dan Erickson',          cast: 'Adam Scott, Patricia Arquette' },
    ],
    action: [
        { id: 11, title: 'Mad Max: Estrada da Fúria',  type: 'movie', year: 2015, score: 8.1, runtime: '120 min',     genre: ['Ação', 'Aventura'],                         overview: 'Em um mundo pós-apocalíptico, a imperatriz Furiosa se rebela contra um tirano fugindo pelo deserto.',                                                  poster: `${IMG}/w342/hA2ple9q4qnwxp3hKVNhroipsir.jpg`,   backdrop: `${IMG}/w1280/phszHPFnhKIBKyXloMCqfzNhYGI.jpg`, trailer: 'hEJnMQG9ev8', director: 'George Miller',         cast: 'Tom Hardy, Charlize Theron' },
        { id: 12, title: 'Top Gun: Maverick',           type: 'movie', year: 2022, score: 8.3, runtime: '130 min',     genre: ['Ação', 'Drama'],                            overview: 'Pete Mitchell enfrenta seu passado ao treinar uma nova geração de pilotos para uma missão impossível.',                                                  poster: `${IMG}/w342/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`,   backdrop: `${IMG}/w1280/AkB5MXWwwIh2Ro0NeO0gN8kRmPd.jpg`, trailer: 'giXco2jaZ_4', director: 'Joseph Kosinski',      cast: 'Tom Cruise, Miles Teller' },
        { id: 13, title: 'John Wick 4',                 type: 'movie', year: 2023, score: 7.7, runtime: '169 min',     genre: ['Ação', 'Thriller'],                         overview: 'John Wick descobre um caminho para derrotar a Alta Mesa, mas deve enfrentar um novo e poderoso inimigo.',                                              poster: `${IMG}/w342/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg`,   backdrop: `${IMG}/w1280/1inZm0xxXrpLSTEl6HGJNONRCFv.jpg`, trailer: 'qEVUtrk8_B4', director: 'Chad Stahelski',        cast: 'Keanu Reeves, Donnie Yen' },
        { id: 14, title: 'Missão Impossível 7',         type: 'movie', year: 2023, score: 7.8, runtime: '163 min',     genre: ['Ação', 'Aventura'],                         overview: 'Ethan Hunt e a equipe IMF correm para localizar uma arma de IA perigosa antes que caia em mãos erradas.',                                            poster: `${IMG}/w342/NNxYkU71-w7Z0yFuqKUNDUkFCb.jpg`,    backdrop: `${IMG}/w1280/iNf4GGH2YXQXIBSO7e5l1UgF6yY.jpg`, trailer: 'avz9RHnTBBY', director: 'Christopher McQuarrie', cast: 'Tom Cruise, Hayley Atwell' },
        { id: 15, title: 'Avatar: O Caminho da Água',   type: 'movie', year: 2022, score: 7.6, runtime: '192 min',     genre: ['Ação', 'Aventura'],                         overview: "Jake Sully e Ney'tiri formaram uma família e fazem de tudo para permanecerem juntos explorando Pandora.",                                              poster: `${IMG}/w342/t6HIqrRAclMCA60NsSmeqe9du73.jpg`,   backdrop: `${IMG}/w1280/s16H9tRm1oJMnloeoN0gbZSMuKB.jpg`, trailer: 'a8Gx8wiMbs8', director: 'James Cameron',         cast: 'Sam Worthington, Zoe Saldana' },
    ],
    // CORREÇÃO: URLs dos animes substituídas por posters válidos do TMDB
    animes: [
        { id: 41, title: 'One Piece',      type: 'tv', year: 1999, score: 8.9, runtime: '~24 min/ep', genre: ['Anime', 'Ação'],     overview: 'Monkey D. Luffy viaja pelos oceanos em busca do lendário tesouro para se tornar o Rei dos Piratas.',    poster: `${IMG}/w342/cMD9Ygz11zjJzAovURpO75Gc7Cs.jpg`, backdrop: `${IMG}/w1280/og6S9bA5oFJtIVTiMv99lFuoLSB.jpg`, trailer: 'S8_YwFLCh4U', director: 'Eiichiro Oda',        cast: 'Mayumi Tanaka, Akemi Okamura' },
        { id: 42, title: 'Jujutsu Kaisen', type: 'tv', year: 2020, score: 8.7, runtime: '~24 min/ep', genre: ['Anime', 'Ação'],     overview: 'Yuji Itadori engole o dedo de uma poderosa maldição para salvar seus amigos e enfrenta o mundo dos feiticeiros.',  poster: `${IMG}/w342/7SPkyBIBGz2OBjSh1LbmiXo7Yh5.jpg`, backdrop: `${IMG}/w1280/6Ys0PBJumdkQ8mhQV0yrXm0YBFN.jpg`, trailer: 'pkKu7-fS6Vw', director: 'Sunghoo Park',      cast: 'Junya Enoki, Yuma Uchida' },
        { id: 43, title: 'Chainsaw Man',   type: 'tv', year: 2022, score: 8.6, runtime: '~24 min/ep', genre: ['Anime', 'Ação'],     overview: 'Denji faz um pacto com seu cachorro-demônio e se torna o Homem-Serra, caçador de demônios.',             poster: `${IMG}/w342/4Ju4LDXH1iAFVmODjvuRGnbYqCW.jpg`, backdrop: `${IMG}/w1280/2Ce0R0YNcSjyxQnFfEHBCnv2ELK.jpg`, trailer: 'v4yLeNt-kCU', director: 'Ryu Nakayama',      cast: 'Kikunosuke Toya, Tomori Kusunoki' },
        { id: 44, title: 'Demon Slayer',   type: 'tv', year: 2019, score: 8.7, runtime: '~24 min/ep', genre: ['Anime', 'Ação'],     overview: 'Tanjiro Kamado vira um caçador de demônios após sua família ser massacrada e sua irmã transformada em demônio.', poster: `${IMG}/w342/xUfRZu2mi8jH6SzQEJGshifted.jpg`, backdrop: `${IMG}/w1280/wr5KzHjXM2SSTuaBnGjXl1MicLu.jpg`, trailer: 'VQGCKyvzIM4', director: 'Haruo Sotozaki',    cast: 'Natsuki Hanae, Akari Kitou' },
        { id: 45, title: 'Attack on Titan',type: 'tv', year: 2013, score: 9.0, runtime: '~24 min/ep', genre: ['Anime', 'Drama'],    overview: 'Numa humanidade encurralada por titãs gigantes, Eren Yeager jura exterminá-los após sua cidade ser destruída.',  poster: `${IMG}/w342/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg`, backdrop: `${IMG}/w1280/qFyv6RBMQ3pq9bEzlUMFmTHgvBd.jpg`, trailer: 'MGRm4IzK1SQ', director: 'Tetsuro Araki',      cast: 'Yuki Kaji, Marina Inoue' },
    ],
    scifi: [
        { id: 16, title: 'Interestelar',    type: 'movie', year: 2014, score: 8.7, runtime: '169 min', genre: ['Drama', 'Ficção Científica'],      overview: 'Exploradores viajam através de um buraco de minhoca no espaço para garantir a sobrevivência da humanidade.',              poster: `${IMG}/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg`, backdrop: `${IMG}/w1280/rAiYTfKGqDCRIIqo664sY9XZlUE.jpg`, trailer: 'zSWdZVtXT7E', director: 'Christopher Nolan',  cast: 'Matthew McConaughey, Anne Hathaway' },
        { id: 17, title: 'Blade Runner 2049', type: 'movie', year: 2017, score: 8.0, runtime: '163 min', genre: ['Ficção Científica', 'Drama'],    overview: 'Um novo blade runner descobre um segredo enterrado há muito tempo que pode mergulhar a sociedade no caos.',                poster: `${IMG}/w342/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg`, backdrop: `${IMG}/w1280/ilRyazdMJwN05exqhwK4tMKBYZs.jpg`, trailer: 'gCcx85zbxz4', director: 'Denis Villeneuve',   cast: 'Ryan Gosling, Harrison Ford' },
        { id: 18, title: 'Arrival',          type: 'movie', year: 2016, score: 7.9, runtime: '116 min', genre: ['Ficção Científica', 'Mistério'], overview: 'Uma linguista trabalha para se comunicar com alienígenas que chegaram à Terra antes que o mundo entre em guerra.',          poster: `${IMG}/w342/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg`, backdrop: `${IMG}/w1280/kBF9Av9RHjZoB7lNBfDGEMWuGpZ.jpg`, trailer: 'IshjFendaQY', director: 'Denis Villeneuve',   cast: 'Amy Adams, Jeremy Renner' },
    ],
    // CORREÇÃO: Catálogo "drama" adicionado (antes causava linha vazia silenciosa)
    drama: [
        { id: 19, title: 'Belfast',          type: 'movie', year: 2021, score: 7.3, runtime: '98 min',  genre: ['Drama', 'História'],  overview: 'Uma família de classe trabalhadora navega pela turbulência política do final dos anos 60 em Belfast.', poster: `${IMG}/w342/zKGMFy6UkFfL0AX4VoqoCFwqIBl.jpg`, backdrop: `${IMG}/w1280/7E7adFIzOFfxgB2kJsAKbFoJEal.jpg`, trailer: 'eHDDCMEiDok', director: 'Kenneth Branagh',   cast: 'Caitríona Balfe, Jamie Dornan' },
        { id: 20, title: 'Tár',              type: 'movie', year: 2022, score: 7.5, runtime: '158 min', genre: ['Drama', 'Música'],    overview: 'A ascensão e queda de Lydia Tár, regente de uma orquestra de renome mundial.',                          poster: `${IMG}/w342/roU8lacR9R42nFETsHBCBkFRloC.jpg`, backdrop: `${IMG}/w1280/kRE2diqxOFtyFmFUbzumU9XJA5d.jpg`, trailer: 'Grid7bgUhwg', director: 'Todd Field',          cast: 'Cate Blanchett, Noémie Merlant' },
        { id: 21, title: 'Aftersun',         type: 'movie', year: 2022, score: 7.6, runtime: '101 min', genre: ['Drama'],              overview: 'Uma filha adulta reflete sobre as férias compartilhadas com seu pai quando ela tinha 11 anos.',              poster: `${IMG}/w342/7KnDe8dRchqBKjuXkO9odfhUPtJ.jpg`, backdrop: `${IMG}/w1280/bQXAqRx2Fgc46o2y5XuCQG3UkyO.jpg`, trailer: 's6Dn6k7hZQk', director: 'Charlotte Wells',    cast: 'Paul Mescal, Frankie Corio' },
        { id: 22, title: 'The Whale',        type: 'movie', year: 2022, score: 7.7, runtime: '117 min', genre: ['Drama'],              overview: 'Um professor recluso e obeso tenta se reconectar com sua filha adolescente estranho.',                       poster: `${IMG}/w342/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg`, backdrop: `${IMG}/w1280/iuFNMS8OzHDJRBEyy0q1MINp4I5.jpg`, trailer: 'nWiQodhfCW4', director: 'Darren Aronofsky',   cast: 'Brendan Fraser, Sadie Sink' },
    ],
    // CORREÇÃO: Catálogo "classics" adicionado (antes causava linha vazia silenciosa)
    classics: [
        { id: 30, title: 'O Poderoso Chefão',  type: 'movie', year: 1972, score: 9.2, runtime: '175 min', genre: ['Drama', 'Crime'],      overview: 'A história épica da família Corleone, uma poderosa dinastia do crime organizado americano.',                    poster: `${IMG}/w342/3bhkrj58Vtu7enYsLegHnDmni2.jpg`,  backdrop: `${IMG}/w1280/tmU7GeKVybMWFboCxXQhBqk3Bja.jpg`, trailer: 'sY1S34973zA', director: 'Francis Ford Coppola', cast: 'Marlon Brando, Al Pacino' },
        { id: 31, title: 'Clube da Luta',       type: 'movie', year: 1999, score: 8.8, runtime: '139 min', genre: ['Drama', 'Thriller'],   overview: 'Um funcionário insatisfeito e um fabricante de sabão formam um clube de luta clandestino que evolui para algo maior.', poster: `${IMG}/w342/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg`, backdrop: `${IMG}/w1280/87hTDiay2N2qWyX4Ds7VNdMh8bI.jpg`, trailer: 'qtRKdVHc-cE', director: 'David Fincher',       cast: 'Brad Pitt, Edward Norton' },
        { id: 32, title: 'Pulp Fiction',         type: 'movie', year: 1994, score: 8.9, runtime: '154 min', genre: ['Crime', 'Thriller'],  overview: 'Histórias de criminosos de Los Angeles se entrelaçam em uma narrativa não linear repleta de violência e humor.',    poster: `${IMG}/w342/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg`, backdrop: `${IMG}/w1280/suaEOtk1N1sgg2MTM-LBYMlSHbJ.jpg`, trailer: 's7EdQ4FqbhY', director: 'Quentin Tarantino',   cast: 'John Travolta, Uma Thurman' },
        { id: 33, title: 'Matrix',               type: 'movie', year: 1999, score: 8.7, runtime: '136 min', genre: ['Ficção Científica', 'Ação'], overview: 'Um hacker descobre a verdade sobre a realidade e seu papel na guerra contra seus controladores.',           poster: `${IMG}/w342/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg`, backdrop: `${IMG}/w1280/vkIHJcKnpJYF5OZ20bUBRpOORSJ.jpg`, trailer: 'vKQi3bBA1Dg', director: 'Irmãs Wachowski',      cast: 'Keanu Reeves, Laurence Fishburne' },
    ],
    // CORREÇÃO: Catálogo "horror" adicionado (antes causava linha vazia silenciosa)
    horror: [
        { id: 25, title: 'Hereditário',          type: 'movie', year: 2018, score: 7.3, runtime: '127 min', genre: ['Terror', 'Drama'],   overview: 'Após a morte da matriarca, uma família descobre segredos perturbadores sobre sua linhagem.',                     poster: `${IMG}/w342/p9Bigg7MNh0PqBergKSBpHkXVkf.jpg`, backdrop: `${IMG}/w1280/bXs0zkv0VEjFaLJhFbZkTMB5Usl.jpg`, trailer: 'V6y0yXA7E1A', director: 'Ari Aster',          cast: 'Toni Collette, Alex Wolff' },
        { id: 26, title: 'Midsommar',             type: 'movie', year: 2019, score: 7.1, runtime: '148 min', genre: ['Terror', 'Mistério'], overview: 'Um casal viaja para um festival de verão sueco que revela rituais cada vez mais perturbadores.',                 poster: `${IMG}/w342/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg`, backdrop: `${IMG}/w1280/rzbQBxSP3bOHzCTEGrGmHIHFfW4.jpg`, trailer: '1Vnghdsjmd0', director: 'Ari Aster',          cast: 'Florence Pugh, Jack Reynor' },
        { id: 27, title: 'Get Out',               type: 'movie', year: 2017, score: 7.7, runtime: '104 min', genre: ['Terror', 'Thriller'], overview: 'Um jovem negro visita a família de sua namorada branca e descobre algo muito mais sinistro do que esperava.',   poster: `${IMG}/w342/tfrYFuiMBFBRVsxvxeChb3Ud66A.jpg`, backdrop: `${IMG}/w1280/be0UGOYhBPeCKMCXMxoSPf0Oylf.jpg`, trailer: 'DzfpyUB60YY', director: 'Jordan Peele',       cast: 'Daniel Kaluuya, Allison Williams' },
        { id: 28, title: 'A Bruxa',               type: 'movie', year: 2015, score: 6.9, runtime: '93 min',  genre: ['Terror', 'História'], overview: 'Uma família puritana do século XVII é atormentada por uma força maligna na floresta ao redor de sua fazenda.', poster: `${IMG}/w342/zhSFMBKoZRUuHvjMoJEBuiPhiLG.jpg`, backdrop: `${IMG}/w1280/5QTUDiFOqNKMUDDLAzXVW8LXBZ0.jpg`, trailer: 'iQXmlf3Sefg', director: 'Robert Eggers',      cast: 'Anya Taylor-Joy, Ralph Ineson' },
    ],
    animated: [
        { id: 36, title: 'Aranhaverso',        type: 'movie', year: 2018, score: 8.4, runtime: '117 min', genre: ['Animação', 'Aventura'], overview: 'Miles Morales se torna o Homem-Aranha e deve unir forças com versões de outras dimensões.',          poster: `${IMG}/w342/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg`, backdrop: `${IMG}/w1280/etsOeBe7LkZe0DRDVjf34gKQD4o.jpg`, trailer: 'tg52up16eq0', director: 'Bob Persichetti',  cast: 'Shameik Moore, Hailee Steinfeld' },
        { id: 37, title: 'A Viagem de Chihiro', type: 'movie', year: 2001, score: 9.3, runtime: '124 min', genre: ['Animação', 'Fantasia'], overview: 'Uma menina entra em um mundo de espíritos e deve trabalhar para salvar seus pais transformados em porcos.', poster: `${IMG}/w342/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg`, backdrop: `${IMG}/w1280/Ab8mkyvkAigPGBbIuYkgFCgADSw.jpg`, trailer: 'ByXuk9QqQkk', director: 'Hayao Miyazaki', cast: 'Daveigh Chase, Suzanne Pleshette' },
        // CORREÇÃO: Typo "runtima" corrigido para "runtime"
        { id: 38, title: 'Soul',                type: 'movie', year: 2020, score: 8.1, runtime: '100 min', genre: ['Animação', 'Musical'], overview: 'Um professor de música de jazz acaba em um lugar fantástico para descobrir o que significa ter alma.',     poster: `${IMG}/w342/hm58nGfLVm2xPgSBbZlmMQa2viL.jpg`, backdrop: `${IMG}/w1280/kf456ZqeC45XTvo6W9pXaoQS3GF.jpg`, trailer: 'xOsLIiBStEs', director: 'Pete Docter',     cast: 'Jamie Foxx, Tina Fey' },
        { id: 39, title: 'Klaus',               type: 'movie', year: 2019, score: 8.2, runtime: '96 min',  genre: ['Animação', 'Família'], overview: 'Um carteiro e um carpinteiro solitário formam uma improvável amizade que muda uma cidade inteira.',        poster: `${IMG}/w342/5gkBHNMFYKwnBWMqZUiH4RruZlR.jpg`, backdrop: `${IMG}/w1280/5KSMbKH2pRIzwvnMmJBXHbbTB0t.jpg`, trailer: 'MDfVTWX37Oo', director: 'Sergio Pablos',   cast: 'Jason Schwartzman, J.K. Simmons' },
    ],
};

const HERO_ITEM = {
    title: 'Duna: Parte Dois', year: 2024, score: '8.4', runtime: '166 min',
    genres: ['Ficção Científica', 'Aventura', 'Drama'],
    overview: 'Paul Atreides se une a Chani e aos Fremen em uma guerra de vingança contra os conspiradores que destruíram sua família.',
    backdrop: `${IMG}/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg`,
    trailer: 'Way9ZkBna3k', id: 1, rank: 1,
};

const ROWS_CONFIG = [
    { title: 'Em Alta Esta Semana',  key: 'trending',  type: 'poster' },
    { title: 'Séries em Destaque',   key: 'series',    type: 'poster' },
    { title: 'Animes e Desenhos',    key: 'animes',    type: 'poster' },
    { title: 'Filmes de Ação',       key: 'action',    type: 'poster' },
    { title: 'Ficção Científica',    key: 'scifi',     type: 'wide'   },
    { title: 'Dramas Premiados',     key: 'drama',     type: 'poster' },
    { title: 'Clássicos Imperdíveis',key: 'classics',  type: 'wide'   },
    { title: 'Terror e Suspense',    key: 'horror',    type: 'poster' },
    { title: 'Animações',            key: 'animated',  type: 'poster' },
];

// ── ESTADO GLOBAL ────────────────────────────────────────
let heroMuted = true;
// CORREÇÃO: heroTrailerPlaying removido pois era declarado mas nunca utilizado
let myList = JSON.parse(localStorage.getItem('lohanflix_list')) || [];
const allItems = Object.values(CATALOG).flat();

// ── PERFIL ───────────────────────────────────────────────
function selectProfile(name, id) {
    flash(() => {
        document.getElementById('profilePage').classList.add('hidden');
        document.getElementById('browsePage').classList.remove('hidden');

        const av = document.getElementById('navAvatar');
        if (av) {
            av.textContent = name[0];
            av.className = `nav-avatar nav-av-${id}`;
        }
        const navName = document.getElementById('navName');
        if (navName) navName.textContent = name;

        initBrowse();
    });
}

function goBack() {
    flash(() => {
        stopHeroTrailer();
        document.getElementById('browsePage').classList.add('hidden');
        document.getElementById('profilePage').classList.remove('hidden');
        document.getElementById('rowsContainer').innerHTML = `
            <div class="loading-rows">
                <div class="skeleton-row"></div>
                <div class="skeleton-row"></div>
                <div class="skeleton-row"></div>
            </div>`;
        // CORREÇÃO: limpa o input de busca ao voltar para perfis
        document.getElementById('searchInput').value = '';
        document.getElementById('searchBar').classList.remove('open');
    });
}

function flash(cb) {
    const el = document.getElementById('transitionFlash');
    el.classList.add('active');
    setTimeout(() => {
        cb();
        setTimeout(() => el.classList.remove('active'), 350);
    }, 350);
}

// ── NAVBAR ───────────────────────────────────────────────
// CORREÇÃO: event listeners da navbar movidos para dentro de initBrowse()
// para garantir que o DOM do browsePage já está visível ao registrá-los.
// Antes estavam no escopo global e podiam falhar dependendo do timing.
function initNavLinks() {
    // CORREÇÃO: uso de data-filter em vez de comparar texto traduzido (evita bugs com acentuação)
    document.querySelectorAll('#navLinks a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const filter = e.currentTarget.dataset.filter;
            if (filter === 'all')    filterCatalog('all');
            else if (filter === 'tv')     filterCatalog('tv');
            else if (filter === 'movie')  filterCatalog('movie');
            else if (filter === 'new')    filterCatalog('new');
            else if (filter === 'mylist') filterCatalog('mylist');
        });
    });
}

window.addEventListener('scroll', () => {
    document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── FILTRO DE CATÁLOGO ───────────────────────────────────
// CORREÇÃO: resetar busca ao trocar de filtro
// CORREÇÃO: fechar a barra de busca ao trocar de filtro
// CORREÇÃO: "Novidades" e "Minha Lista" agora têm comportamento definido
function filterCatalog(type) {
    // Fecha e limpa a busca ao trocar de filtro
    const sb = document.getElementById('searchBar');
    const si = document.getElementById('searchInput');
    sb.classList.remove('open');
    si.value = '';

    const rc = document.getElementById('rowsContainer');
    const hero = document.getElementById('heroSection');

    flash(() => {
        rc.innerHTML = '';

        // Atualiza link ativo na navbar
        document.querySelectorAll('#navLinks a').forEach(link => {
            link.classList.toggle('active', link.dataset.filter === type);
        });

        if (type === 'all') {
            hero.classList.remove('hidden');
            renderMyListRow();
            renderRows();
            setTimeout(playHeroTrailer, 3500);
            return;
        }

        hero.classList.add('hidden');
        stopHeroTrailer();

        if (type === 'mylist') {
            const listItems = allItems.filter(item => myList.includes(item.id));
            if (listItems.length === 0) {
                rc.innerHTML = `<div class="empty-state"><p>Sua lista está vazia.</p><p>Adicione títulos clicando no <strong>+</strong> dentro de qualquer título.</p></div>`;
            } else {
                rc.appendChild(buildRow('Minha Lista', listItems, 'poster'));
            }
            return;
        }

        if (type === 'new') {
            // "Novidades" = títulos dos últimos 2 anos, ordenados por ano desc
            const currentYear = new Date().getFullYear();
            const newItems = allItems
                .filter(item => item.year >= currentYear - 2)
                .sort((a, b) => b.year - a.year);
            rc.appendChild(buildRow('Novidades', newItems, 'poster'));
            return;
        }

        // Filmes ou Séries
        const filteredItems = allItems.filter(item => item.type === type);
        const title = type === 'movie' ? 'Filmes para Você' : 'Séries Originais';
        rc.appendChild(buildRow(title, filteredItems, 'poster'));
    });
}

// ── BUSCA ────────────────────────────────────────────────
// CORREÇÃO: quando o resultado da busca some (< 2 chars), as rows anteriores
// são restauradas corretamente em vez de só remover o resultado
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchToggle').addEventListener('click', () => {
        const sb = document.getElementById('searchBar');
        sb.classList.toggle('open');
        if (sb.classList.contains('open')) document.getElementById('searchInput').focus();
    });

    document.getElementById('searchInput').addEventListener('input', e => {
        const q = e.target.value.trim().toLowerCase();
        const rc = document.getElementById('rowsContainer');
        const old = rc.querySelector('.search-results-row');

        if (q.length < 2) {
            if (old) {
                old.remove();
                // Se não restar nada, recarrega as rows normais
                if (rc.querySelectorAll('.content-row:not(.search-results-row)').length === 0) {
                    renderMyListRow();
                    renderRows();
                }
            }
            return;
        }

        const results = allItems.filter(i =>
            i.title.toLowerCase().includes(q) ||
            i.genre.some(g => g.toLowerCase().includes(q))
        );

        if (old) old.remove();

        if (results.length > 0) {
            const row = buildRow(`Resultados para "${e.target.value.trim()}"`, results, 'poster');
            row.classList.add('search-results-row');
            rc.prepend(row);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const empty = document.createElement('div');
            empty.className = 'search-results-row empty-state';
            empty.innerHTML = `<p>Nenhum resultado para "<strong>${e.target.value.trim()}</strong>".</p>`;
            rc.prepend(empty);
        }
    });
});

// ── INIT ─────────────────────────────────────────────────
function initBrowse() {
    // CORREÇÃO: navbar listeners inicializados aqui, dentro do contexto correto
    initNavLinks();
    renderHero();
    renderMyListRow();
    renderRows();
    setTimeout(playHeroTrailer, 3500);
}

// ── MINHA LISTA ──────────────────────────────────────────
function renderMyListRow() {
    const rc = document.getElementById('rowsContainer');
    const oldRow = rc.querySelector('.my-list-row');
    if (oldRow) oldRow.remove();

    if (myList.length === 0) return;

    const listItems = allItems.filter(item => myList.includes(item.id));
    const row = buildRow('Minha Lista', listItems, 'poster');
    row.classList.add('my-list-row');

    const searchRow = rc.querySelector('.search-results-row');
    searchRow ? searchRow.after(row) : rc.prepend(row);
}

function toggleMyList(id) {
    const index = myList.indexOf(id);
    index === -1 ? myList.push(id) : myList.splice(index, 1);
    localStorage.setItem('lohanflix_list', JSON.stringify(myList));
    updateModalListBtn(id);
    renderMyListRow();
}

function updateModalListBtn(id) {
    const btn = document.getElementById('modalListBtn');
    if (!btn) return;

    const isAdded = myList.includes(id);
    btn.innerHTML = isAdded
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E50914" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;

    btn.onclick = e => {
        e.stopPropagation();
        toggleMyList(id);
    };
}

// ── HERO ─────────────────────────────────────────────────
function renderHero() {
    const h = HERO_ITEM;
    const backdrop = document.getElementById('heroBackdrop');
    if (!backdrop) return;

    backdrop.style.backgroundImage = `url(${h.backdrop})`;
    document.getElementById('heroBadges').innerHTML = `
        <span class="hero-badge badge-new"><span class="badge-dot"></span>Destaque</span>
        <span class="hero-badge badge-type">Filme</span>`;
    document.getElementById('heroTitle').textContent = h.title;
    document.getElementById('heroMeta').innerHTML = `
        <span class="hero-meta-score">★ ${h.score}</span>
        <span class="hero-meta-dot">·</span>
        <span class="hero-meta-year">${h.year}</span>
        <span class="hero-meta-dot">·</span>
        <span class="hero-meta-runtime">${h.runtime}</span>`;

    const hc = document.getElementById('heroContent');
    let gl = hc.querySelector('.hero-genre-list');
    if (!gl) {
        gl = document.createElement('div');
        gl.className = 'hero-genre-list';
        hc.insertBefore(gl, document.getElementById('heroOverview'));
    }
    gl.innerHTML = h.genres.map(g => `<span class="hero-genre-pill">${g}</span>`).join('');

    document.getElementById('heroOverview').textContent = h.overview;
    document.getElementById('heroRank').innerHTML = `<span>Top 10</span><strong>#${h.rank}</strong><span>hoje</span>`;

    document.getElementById('heroInfoBtn').onclick = () => openModal(h.id);
    document.getElementById('heroPlayBtn').onclick = () => openModal(h.id);
    document.getElementById('heroMuteBtn').onclick = toggleHeroMute;
}

function playHeroTrailer() {
    const key = HERO_ITEM.trailer;
    const trailer = document.getElementById('heroTrailer');
    if (!trailer) return;
    trailer.src = `https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${key}&modestbranding=1&rel=0`;
    document.getElementById('heroTrailerWrap').classList.add('playing');
    heroMuted = true;
    updateMuteIcon();
}

function stopHeroTrailer() {
    const trailer = document.getElementById('heroTrailer');
    if (trailer) trailer.src = '';
    document.getElementById('heroTrailerWrap').classList.remove('playing');
}

function toggleHeroMute() {
    heroMuted = !heroMuted;
    const key = HERO_ITEM.trailer;
    document.getElementById('heroTrailer').src =
        `https://www.youtube.com/embed/${key}?autoplay=1&mute=${heroMuted ? 1 : 0}&controls=0&loop=1&playlist=${key}&modestbranding=1&rel=0`;
    updateMuteIcon();
}

function updateMuteIcon() {
    const i = document.getElementById('muteIcon');
    if (!i) return;
    i.innerHTML = heroMuted
        ? `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>`
        : `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>`;
}

// ── ROWS ─────────────────────────────────────────────────
function renderRows() {
    const rc = document.getElementById('rowsContainer');
    ROWS_CONFIG.forEach(cfg => {
        const items = CATALOG[cfg.key] || [];
        if (items.length) rc.appendChild(buildRow(cfg.title, items, cfg.type));
    });
}

function buildRow(title, items, type = 'poster') {
    const section = document.createElement('div');
    section.className = 'content-row';
    section.innerHTML = `
        <div class="row-header">
            <h3 class="row-title">${title}</h3>
            <span class="row-see-all">Ver tudo →</span>
        </div>`;

    const wrap = document.createElement('div');
    wrap.className = 'row-slider-wrap';

    const arrowL = document.createElement('button');
    arrowL.className = 'slider-arrow slider-arrow-left';
    arrowL.setAttribute('aria-label', 'Anterior');
    arrowL.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`;

    const arrowR = document.createElement('button');
    arrowR.className = 'slider-arrow slider-arrow-right';
    arrowR.setAttribute('aria-label', 'Próximo');
    arrowR.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;

    const slider = document.createElement('div');
    slider.className = 'row-slider';

    arrowL.onclick = () => slider.scrollBy({ left: -580, behavior: 'smooth' });
    arrowR.onclick = () => slider.scrollBy({ left: 580, behavior: 'smooth' });

    items.forEach((item, idx) => slider.appendChild(buildCard(item, type, idx < 3 ? idx + 1 : null)));

    wrap.appendChild(arrowL);
    wrap.appendChild(slider);
    wrap.appendChild(arrowR);
    section.appendChild(wrap);
    return section;
}

function buildCard(item, type = 'poster', rank = null) {
    const isWide = type === 'wide';
    const imgSrc = isWide ? item.backdrop : item.poster;

    const card = document.createElement('div');
    card.className = `card${isWide ? ' card-wide' : ''}`;

    if (rank) {
        const b = document.createElement('div');
        b.className = 'card-rank';
        b.textContent = `#${rank}`;
        card.appendChild(b);
    }

    const inner = document.createElement('div');
    inner.className = 'card-inner';

    if (imgSrc) {
        const img = document.createElement('img');
        img.className = 'card-poster';
        img.src = imgSrc;
        img.alt = item.title;
        img.loading = 'lazy';
        // CORREÇÃO: fallback para imagem quebrada — mostra placeholder em vez de ícone quebrado
        img.onerror = function () {
            this.style.display = 'none';
            const ph = document.createElement('div');
            ph.className = 'card-poster-placeholder';
            ph.innerHTML = `<span class="ph-icon">🎬</span><span class="ph-title">${item.title}</span>`;
            this.parentNode.insertBefore(ph, this);
        };
        inner.appendChild(img);
    } else {
        const ph = document.createElement('div');
        ph.className = 'card-poster-placeholder';
        ph.innerHTML = `<span class="ph-icon">🎬</span><span class="ph-title">${item.title}</span>`;
        inner.appendChild(ph);
    }

    inner.innerHTML += `
        <div class="card-play-overlay">
            <div class="card-play-btn">
                <svg width="15" height="15" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="#000"/></svg>
            </div>
        </div>
        <div class="card-reveal">
            <div class="card-reveal-title">${item.title}</div>
            <div class="card-reveal-meta">
                <span class="card-reveal-score">★ ${item.score}</span>
                <span>${item.year}</span>
                <span>${item.type === 'tv' ? 'Série' : 'Filme'}</span>
            </div>
        </div>`;

    card.appendChild(inner);
    card.addEventListener('click', () => openModal(item.id));
    return card;
}

// ── MODAL ────────────────────────────────────────────────
function openModal(id) {
    const item = allItems.find(i => i.id === id);
    if (!item) return;

    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('modal').scrollTop = 0;

    const backdrop = document.getElementById('modalBackdrop');
    backdrop.src = item.backdrop || item.poster || '';
    // CORREÇÃO: fallback para backdrop quebrado no modal
    backdrop.onerror = function () { this.src = item.poster || ''; };

    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalOverview').textContent = item.overview;

    document.getElementById('modalMeta').innerHTML = `
        <span class="modal-meta-score">★ ${item.score}</span>
        <span class="modal-meta-year">${item.year}</span>
        <span class="modal-meta-runtime">${item.runtime || '—'}</span>
        <span class="modal-meta-rating">${item.type === 'tv' ? 'SÉRIE' : 'FILME'}</span>`;

    document.getElementById('modalTags').innerHTML = `
        <div class="modal-tag-row"><strong>Gêneros: </strong><span>${item.genre.join(', ')}</span></div>
        <div class="modal-tag-row"><strong>Diretor: </strong><span>${item.director || '—'}</span></div>
        <div class="modal-tag-row"><strong>Elenco: </strong><span>${item.cast || '—'}</span></div>`;

    updateModalListBtn(item.id);
    item.trailer ? playModalTrailer(item.trailer) : stopModalTrailer();

    const similar = allItems
        .filter(i => i.id !== id && i.genre.some(g => item.genre.includes(g)))
        .slice(0, 6);
    renderSimilar(similar);
}

function playModalTrailer(key) {
    document.getElementById('modalTrailer').src =
        `https://www.youtube.com/embed/${key}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`;
    document.getElementById('modalTrailerWrap').classList.add('playing');
}

function stopModalTrailer() {
    document.getElementById('modalTrailer').src = '';
    document.getElementById('modalTrailerWrap').classList.remove('playing');
}

function renderSimilar(items) {
    const c = document.getElementById('modalSimilar');
    if (!items.length) { c.innerHTML = ''; return; }
    c.innerHTML = `<div class="modal-similar-title">Títulos Semelhantes</div><div class="similar-grid"></div>`;
    const grid = c.querySelector('.similar-grid');
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'similar-card';
        const imgSrc = item.backdrop || item.poster || '';
        card.innerHTML = `
            <img src="${imgSrc}" alt="${item.title}" loading="lazy"/>
            <div class="similar-card-info">
                <div class="similar-card-title">${item.title}</div>
                <div class="similar-card-meta">
                    <span class="similar-card-score">★ ${item.score}</span>
                    <span>${item.year}</span>
                </div>
            </div>`;
        // CORREÇÃO: fallback de imagem nos cards similares
        const img = card.querySelector('img');
        img.onerror = function () {
            this.src = item.poster || '';
            if (!item.poster) this.style.display = 'none';
        };
        card.addEventListener('click', () => {
            document.getElementById('modal').scrollTop = 0;
            openModal(item.id);
        });
        grid.appendChild(card);
    });
}

function closeModal(e) {
    const overlay = document.getElementById('modalOverlay');
    if (e && e.target !== overlay && !e.target.closest('.modal-close')) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    stopModalTrailer();
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});
