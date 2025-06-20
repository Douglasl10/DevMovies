import Button from "../../components/Button";
import Modal from "../../components/Modal";

import Slider from "../../components/Slider";
import { getMovies, getTopMovies, getTopPeople, getTopSeries, getPopularSeries } from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerButtons, Info, Poster } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    const [movie, setMovie] = useState([]);
    const [topMovie, setTopMovie] = useState([]);
    const [topSeries, setTopSeries] = useState([]);
    const [popularSeries, setPopularSeries] = useState([]);
    const [topPeople, setTopPeople] = useState([]);
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeople()
            ])
                .then(([movie, topMovie, topSeries, popularSeries, topPeople]) => {
                    setMovie(movie);
                    setTopMovie(topMovie);
                    setTopSeries(topSeries);
                    setPopularSeries(popularSeries);
                    setTopPeople(topPeople);
                })
                .catch(error => {
                    console.log(error);
                });

        }
        getAllData();

    }, []);

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {modal && <Modal movieId={movie.id} setModal={setModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button red={false} onClick={() => setModal(true)}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt={movie.title} />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovie && <Slider info={topMovie} title="Top Filmes" />}
            {topSeries && <Slider info={topSeries} title="Top Séries" />}
            {popularSeries && <Slider info={popularSeries} title="Séries Populares" />}
            {topPeople && <Slider info={topPeople} title="Pessoas Populares" />}
        </>
    )
}

export default Home;