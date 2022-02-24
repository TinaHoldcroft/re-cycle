import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [language, setLanguage] = useState("false");

    function switchToEN() {
        setLanguage(!language);
        document.documentElement.setAttribute('lang', 'en');
    };

    function switchToNo() {
        setLanguage(!language);
        document.documentElement.setAttribute('lang', 'no');
    };
    
    if (language === 'no') {
        return console.log('no')
    }

    return (
        <>
            <button
                accessKey="l"
                title={language ? "English" : "Norsk bokmål"}
                type="button"
                value={language ? "Change to English" : "Bytt til norsk bokmål"}
                className={language ? "english" : "norsk"}
                onClick={language ? switchToEN : switchToNo}
            >
                <img src={language ? './UK-flag.svg' : './NO-flag.svg'} alt='' />
            </button>


            <nav>
                <Link href='/'>
                    {/*make norwegian version of logo */}
                    <img title={language ? 'direct link to homepage' : 'directelink til forside'} src='./logo.svg' alt='' />
                </Link>
                <ul>
                    <li>{language ? 'Home' : 'Hjem'}</li>
                    <li>{language ? 'Tours' : 'Turer'}</li>
                    <li>{language ? 'About' : 'Om'}</li>
                    <li>{language ? 'Contact' : 'Kontakt'}</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;