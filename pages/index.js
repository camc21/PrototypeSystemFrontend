import React from 'react';
import { Container, Row, Col} from 'reactstrap';

import Link from 'next/link'

function Index (props) {

    return (
        <>
           <Container>
                <Row>
                    <Col>
                    <img src="/icons/users.svg" alt='users' style={{ height: 53, width: 36 , display: "inline", marginRight: "10px"}} />
                        <Link href="/userEntity">
                            <a>Usuários</a>
                        </Link>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src="/icons/accessProfile.svg" alt='access-profile' style={{ height: 53, width: 36 , display: "inline", marginRight: "10px"}} />
                        <Link href="/accessProfile">    
                            <a>Perfil de Acesso</a>
                        </Link>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                    <img src="/icons/anime.svg" alt='access-profile' style={{ height: 53, width: 36 , display: "inline", marginRight: "10px"}} />
                        <Link href="/anime">
                            <a>Anime</a>
                        </Link>
                    </Col> 
                </Row>
            
           </Container>

           

            
        </>
    )
}

export default(Index)