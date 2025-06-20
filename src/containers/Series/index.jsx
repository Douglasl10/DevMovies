import Button from "../../components/Button";
import Modal from "../../components/Modal";

import Slider from "../../components/Slider";
import { getTopSeries, getPopularSeries } from "../../services/getData";
import { getImages } from "../../utils/getImages";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Background, Container, ContainerButtons, Info, Poster } from "./styles";

function Series() {
    const [topSeries, setTopSeries] = useState([]);
    const [popularSeries, setPopularSeries] = useState([]);
    const highlight = topSeries[0];
    console.log(highlight);

    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getPopularSeries(),
                getTopSeries(),
            ])
                .then(([topSeries, popularSeries]) => {
                    setTopSeries(topSeries);
                    setPopularSeries(popularSeries);
                })
                .catch(error => {
                    console.log(error);
                });

        }
        getAllData();

    }, []);

    return (
        <>
            {highlight && (
                <Background img={getImages(highlight.backdrop_path)}>
                    {modal && <Modal movieId={highlight.id} setModal={setModal} />}
                    <Container>
                        <Info>
                            <h1>{highlight.name}</h1>
                            <p>{highlight.popularity}</p>
                            <ContainerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhe/${highlight.id}`)}>Assistir Serie</Button>
                                <Button red={false} onClick={() => setModal(true)}>Conferir o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(highlight.poster_path)} alt={highlight.title} />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topSeries && <Slider info={topSeries} title="Top Series" />}
            {popularSeries && <Slider info={popularSeries} title="Popular Series" />}
        </>
    )
}

export default Series;