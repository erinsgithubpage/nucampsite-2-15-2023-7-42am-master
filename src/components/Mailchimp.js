import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
    Container,
    Row
} from 'reactstrap';
import React from 'react';

const Mailchimp = () => {
    //const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container>
            <Row>
                
                <iframe src="https://us17.list-manage.com/contact-form?u=f8fdc01c52f5b57818822cc31&form_id=0e322813ec1458c7fbe6cd9a118bbf50" height='1050px'></iframe>

            </Row>
        </Container>
    );
};

export default Mailchimp;