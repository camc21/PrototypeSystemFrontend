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
                        <Link href="/user-entity">
                            <a>Usuários</a>
                        </Link>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src="/icons/identity.svg" alt='access-profile' style={{ height: 53, width: 36 , display: "inline", marginRight: "10px"}} />
                        <Link href="/access-profile">    
                            <a>Perfil de Acesso</a>
                        </Link>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <img src="/icons/map.svg" alt='map' style={{ height: 53, width: 36 , display: "inline", marginRight: "10px"}} />
                        <Link href="/map">
                            <a>Mapa</a>
                        </Link>
                    </Col> 
                </Row>

                <Row>
                    <Col>
                    <img src="/icons/people.svg" alt='access-profile' style={{ height: 53, width: 36 , display: "inline", marginRight: "10px"}} />
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