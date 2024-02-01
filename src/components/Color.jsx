import { Col } from 'react-bootstrap';

const Color = () => {
    return (
        <Col lg="3">
            <div className='text-center'>
                <h3 className='fs-4'>Nombre del color</h3>
                <div className='color'></div>
            </div>
        </Col>
    );
};

export default Color;