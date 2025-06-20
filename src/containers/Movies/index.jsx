import Button from "../../components/Button";
import Modal from "../../components/Modal";

import Slider from "../../components/Slider";
import { getMovies, getTopMovies, getTopPeople } from "../../services/getData";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerButtons, Info, Poster } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Movies() {
    const [movie, setMovie] = useState([]);
    const [topMovie, setTopMovie] = useState([]);
    const [topPeople, setTopPeople] = useState([]);
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopPeople(),
            ])
                .then(([movie, topMovie,topPeople]) => {
                    setMovie(movie);
                    setTopMovie(topMovie);
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
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>Assistir ao Filme</Button>
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
            {topPeople && <Slider info={topPeople} title="Top Pessoas" />}
        </>
    )
}

export default Movies;