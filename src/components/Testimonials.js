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

const Testimonials = () => {
    //const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container>
            <Row>
            <div class="slideshow-container">

   
            <div class="mySlides">
                <p><br></br></p>
                <q>Erin has been amazing during her time here at VCRC and I could not recommend anyone more highly. Based on her success and impact here at VCRC, she is deserving of any position that she is applying for. From day one her level of engagement and communication was at a level that we did not experience with our previous volunteer. Our website has since become an amazing hub of information and resources. During this pandemic, Erin has helped us make it possible for community members to be able to connect to available resources. At the same time Erin has offered recommendations for improvements and connected us with new connection point.</q>
                <p class="author">- Jose Rizo-Program Director</p>
            </div>

            <div class="mySlides">
                <p><br></br></p>
                <q>Erin volunteered for a project I managed with our organization's website. Her professionalism was a key asset in refining our approach to the work our website needed done, and has been a major factor in our efforts to update and upgrade our presentation of our work to the world. Her knowledge and skill with plugins proved crucial in managing our update process. She assisted me in navigating the depths of security for our site in the time of a global pandemic when security needs and opportunities were changing faster than the rest of us could keep up with. Erin was the tip of the spear keeping our site and information safe and working properly. I highly recommend Erin for any Wordpress needs you or your organization may be facing.</q>
                <p class="author">- Kathy Engle-Dulac-Manager, Administration, and Tech Team Strategist</p>
            </div>



            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>


            <div class="dot-container">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
            </div>
            </Row>
        </Container>
    );
};

export default Testimonials;