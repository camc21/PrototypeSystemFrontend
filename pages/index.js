import React from 'react';

import Link from 'next/link'

function Index (props) {
    return (
        <>
            <h1>HOME PAGE</h1>

            <Link href="/anime">
                <a>Anime</a>
            </Link>
        </>
    )
}

export default(Index)