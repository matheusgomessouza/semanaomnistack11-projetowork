import React from 'react';

//Colocar '()' se o HTML tiver mais de uma linha
//Colocar '{}' ao colocar conteúdo javaScript dentro do HTML
export default function Header({children}) {
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

