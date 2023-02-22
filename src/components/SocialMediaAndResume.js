import { 
    /*Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,*/
    Container,
    Row
} from 'reactstrap';
import React from 'react';

const SocialMediaAndResume = () => {
    //const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container>
            <Row>
            <div class="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100081191235958" target="blank"><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/erinswebdesign" target="blank"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/web-design-services-online/about/?viewAsMember=true" target="blank"><i class="fa fa-linkedin"></i></a>
                </div>
                <div class="cv">
                    <span class="about-button">
                        <a class="main-btn" href="https://erinh30.sg-host.com/WordPress-2.pdf" target="blank" download>Download CV - now</a>
                    </span>
                </div>
            </Row>
        </Container>
    );
};

export default SocialMediaAndResume;