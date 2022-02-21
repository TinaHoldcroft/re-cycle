export default function Step1(props) {

    if (props.currentStep !== 1) { return null }

    return (
        <>
            <fieldset className='choose-languange'>
                <legend>Choose language</legend>
                <div>
                    <input className='sr-only' onClick={props.onClick} onChange={props.handleChange} type='radio' id='norsk' name='language' value='norsk' checked={props.language === 'norsk'} />
                    <label htmlFor='norsk'>
                        <span className='sr-only'>velg norsk </span>
                        <img src="./NO-flag.svg" alt='' />
                    </label>
                </div>
                <div>
                    <input  className='sr-only' onClick={props.onClick} onChange={props.handleChange} type='radio' id='english' name='language' value='english' checked={props.language === 'english'} />
                    <label htmlFor='english'>
                        <span className='sr-only'>choose english</span>
                        <img src="./UK-flag.svg" alt='' />
                    </label>
                </div>
            </fieldset>
        </>
    );
}