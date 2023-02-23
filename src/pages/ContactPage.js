import SubHeader from '../components/SubHeader';
import { Container } from 'reactstrap';
import Mailchimp from '../components/Mailchimp';


/*const ContactPage = () => {
    return (
    <div>Contact Page</div>;
    )
};*/

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact' /> 
              <div>
                <Mailchimp></Mailchimp>
                </div>  
            {/*<DisplayList />*/}
            
            {/*<Testimonials />*/}
        </Container>
    );
    };


export default ContactPage;