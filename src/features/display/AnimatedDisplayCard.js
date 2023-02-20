import { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({ item }) => {
    const {image, name, description } = item;
    const {toggle, setToggle} = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0, 
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    useEffect(() => {
        setToggle(true);
    }, []);
    
    return (
        <Card>
            <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
        </Card>
    );
};

export default AnimatedDisplayCard;