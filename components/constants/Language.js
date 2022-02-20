import React, { useState } from 'react';
import Link from 'next/link';

const Language = () => {
    const [language, setLanguage] = useState("false");

    function switchLanguage() {
        setLanguage(!language);
        document.documentElement.setAttribute('lang', 'en');
        if (language === false) {
            document.documentElement.setAttribute('lang', 'no');
        }
        if (language === true) {
            document.documentElement.setAttribute('lang', 'en');
        }
    };

    return (
        <>
            <Link className='language-toggle' href={language ? '/english' : '/norsk'}>
                <button
                    accessKey="l"
                    title={language ? "English" : "Norsk bokmål"}
                    type="button"
                    value={language ? "Change to English" : "Bytt til norsk bokmål"}
                    className={language ? "english" : "norsk"}
                    onClick={switchLanguage}
                >
                <img src={language ? './UK-flag.svg' : './NO-flag.svg' } alt=''/>
                </button>
            </Link>
        </>
    )
}

export default Language;