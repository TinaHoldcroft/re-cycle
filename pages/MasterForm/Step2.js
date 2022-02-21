export default function Step2(props) {

    if (props.currentStep !== 2) { return null }

    if (props.language === 'norsk') {
        return (
            <>
        
                <header>
                    <img
                        style={{ width: '80vw' }}
                        src='./vintage-bicycle.jpg'
                        alt=''
                    />
                </header>
                <h1>Opplev Oslo med Re-Cycle</h1>
            </>
        );
    }

    if (props.language === 'english') {
        return (
            <>
                <header>
                    <img
                        style={{ width: '80vw' }}
                        src='./vintage-bicycle.jpg'
                        alt=''
                    />
                </header>
                <h1>Experience Oslo with Re-Cycle</h1>
                <p>Re-Cycle offers different bike tours throughout the year. Our city bike tours are a great way to discover the city of Oslo in an fun and eco-friendly way!</p>
            </>
        );
    }
}