<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style-index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Low Games</title>
</head>

<body>
    <header>

        <nav class="navbar navbar-dark " style="background-color: #3c3154;">

            <div class="container-fluid">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src="../img/logo.png" alt="" width="40" class="d-inline-block align-text-top">
                        Low Games
                    </a>
                </div>
            </div>

        </nav>

    </header>
    <main>

        <section class="destaque">
            <!-- Vai ficar um carrosel de destaques -->
            <div class="container-carrosel">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../img/fh5.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Forza Horizon 5</h5>
                                <p>Destaque da semana com forza horizon 5.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../img/gtav.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Gta 5</h5>
                                <p>Gta depois de anos do seu lançamento ainda vende.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../img/minecraft.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Minecraft</h5>
                                <p>Nova verçao do jogo adiciona varios itens.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
        <div class="container">
        <!-- vai listar os jogos cadastrados-->
            <section class="jogos">
                <h3>Jogos Disponiveis:</h3>
                <ul type="none">
                    <% listaJogos.forEach(function(item, index){%>
                        <li>
                            <img src=../img/<%= item.foto_jogo %> alt="">
                            <h1 class="cool-link"><a class="link" href="/jogo/<%=item.id_jogo %>/<%=item.nome_jogo%>"><%= item.nome_jogo %></a></h1>
                            <p> <%= item.resumo_jogo %></p>
                            <h2>Nota:</h2>
                            <div class="notas" > <%= item.nota_jogo %> </div>
                            
                        </li>
                    <%});%>
                </ul>

            </section>

        </div>

    </main>
    <footer>
        <p>site feito por jairzin</p>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
        </script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous">
        </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous">
        </script>

</body>

</html>
