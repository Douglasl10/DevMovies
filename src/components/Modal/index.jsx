import { useEffect, useState } from "react";
import { Container, Background } from "./styles";
import { getMovieVideos } from "../../services/getData";


function Modal({ movieId, setModal }) {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        async function getMovieVideos() {
            setMovie(await getMovieVideos(movieId))
        }

    }, [])

    return (
        <Background onClick={() => setModal(false)}>
            {movie && (
                <Container>
                    <iframe src={`https://www.youtube.com/embed/${movie[0]?.key}`}
                        title="Youtube video player"
                        height={"500px"}
                        width={"100%"}
                    >

                    </iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal;