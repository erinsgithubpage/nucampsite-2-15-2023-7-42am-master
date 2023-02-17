import { Col } from 'reactstrap';
import { Partnr } from './components/Partner';
import selectAllPartners from './features/PartnersList';


const PartnersList = () => {
    const partners = selectAllPartners();
    return (
       <Col className='mt-4'>
       
       {partners.map((partner) => {
            return (
                <Div 
                md='5' 
                className='d-flex mb-5' 
                key={partner.id}
                >
                    <Partner  partner={partner} />
                </Div>
                    );
                })}
       </Col>
    );
  }

export default PartnersList;