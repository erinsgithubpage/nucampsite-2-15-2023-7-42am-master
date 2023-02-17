import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
import ShortBio from '../components/ShortBio';
import SocialMediaAndResume from '../components/SocialMediaAndResume';
//import Testimonials from '../components/Testimonials';

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home' /> 
                <ShortBio></ShortBio>
            {/*<DisplayList />*/}
            <SocialMediaAndResume />
            {/*<Testimonials />*/}
        </Container>
    );
    };

export default HomePage;