import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
import ShortBio from '../components/ShortBio';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' /> 
                <ShortBio></ShortBio>
            {/*<DisplayList />*/}
        </Container>
    );
    };

export default HomePage;