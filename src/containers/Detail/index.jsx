import { useEffect, useState } from "react";
import { Background, ContainerMovies, Container, Cover, Info } from "./styles";
import { getMovieCredits, getMovieSimilar, getMovieVideos, getMovieById } from "../../services/getData";
import { useParams } from "react-router-dom";
import { getImages } from "../../utils/getImages";
import SpanGenerous from "../../components/SpanGenerous";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";
function Detail() {
    const [movie, setMovie] = useState([]);
    const [videos, setVideos] = useState([]);
    const [credits, setCredits] = useState([]);
    const [similar, setSimilar] = useState([]);
    const { id } = useParams();

    useEffect(() => {


        async function getAllData() {

            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),
            ])
                .then(([movie, videos, similar, credits]) => {

                    setMovie(movie);
                    setVideos(videos);
                    setCredits(credits);
                    setSimilar(similar);

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
                <>
                    <Background img={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} alt={movie.title} />
                        </Cover>
                        <Info>
                            <h2>
                                {movie.title}
                            </h2>
                            <SpanGenerous genres={movie.genres} />

                            <p>
                                {movie.overview}
                            </p>
                            <div>
                                <Credits credits={movie.similar} />
                            </div>
                        </Info>
                    </Container>
                    <ContainerMovies>
                        {videos && videos.map((video) => (
                            <div key={video.id}>
                                <h4>
                                    {video.name}
                                </h4>
                                <iframe
                                    width="100%"
                                    height="500px"
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title="YouTube video player"
                                ></iframe>
                            </div>
                        ))}
                    </ContainerMovies>
                    {credits && (
                        <Slider title={"Filmes Similares"} info={credits} />
                    )}
                </>
            )}

        </>
    );
}

export default Detail;