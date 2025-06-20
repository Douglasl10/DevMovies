import { getImages } from "../../utils/getImages";
import { Container, Title } from "./styles.";

function Credits({ similar }) {

    return (
        <>
            <Title>
                Creditos
            </Title>
            if(similar){
              similar && (  <Container>
                    {
                        similar.slice(0, 5).map((artist) => {
                            <div key={artist.id}>
                                <img src={getImages(artist.profile_path)} alt={artist.name} />
                                <p>{artist.original_name}</p>
                            </div>
                        })
                    }
                </Container>
            )} else{
                <p>Não há creditos para esse filme</p>
            }
        </>
    )
}

export default Credits;