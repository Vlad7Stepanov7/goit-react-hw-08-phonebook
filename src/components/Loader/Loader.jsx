import { Spinner } from './Loader.styled';
import { Puff } from 'react-loader-spinner';


const Loader = () => {
    return (
        <Spinner>
            <Puff
            color="#1976d2"
            height="40"
            width="40"
             />
        </Spinner>
    );
}

export default Loader;