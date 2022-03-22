import Link from 'next/link';

function BTN(props) {

    return (
        <Link passHref href={props.link} >
            <a className='btn' target={props.target} title={props.txt}>
                <span>{props.txt}</span>
            </a>
        </Link>
    );
}

export default BTN;