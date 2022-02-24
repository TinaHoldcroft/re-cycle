export default function Step2(props) {

    if (props.currentStep !== 2) { return null }

    if (props.language === 'norsk') {
        return (
            <div className={"steps step__" + props.currentStep}>
                <header>
                    <img
                        style={{ width: '100%' }}
                        src='./vintage-bicycle.jpg'
                        alt=''
                    />
                </header>
                <article>
                    <h1>Opplev Oslo med Re-Cycle</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas fringilla phasellus faucibus scelerisque. Magna sit amet purus gravida quis blandit turpis cursus in. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Enim sit amet venenatis urna cursus eget. Imperdiet massa tincidunt nunc pulvinar sapien. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Semper quis lectus nulla at volutpat diam ut. Amet consectetur adipiscing elit pellentesque habitant morbi.</p>
                </article>
            </div>
        );
    }

    if (props.language === 'english') {
        return (
            <div className={"steps step__" + props.currentStep}>
                <header>
                    <img
                        style={{ width: '100%' }}
                        src='./vintage-bicycle.jpg'
                        alt=''
                    />
                </header>
                <article>
                    <h1>Experience Oslo with Re-Cycle</h1>
                    <p>Re-Cycle offers different bike tours throughout the year. Our city bike tours are a great way to discover the city of Oslo in an fun and eco-friendly way!</p>
                </article>
            </div>
        );
    }
}