import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol } from '@coreui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name, img, desc, price, author} = product
    return (
        <div>
            <CCol xs>
                <CCard>
                <CCardImage orientation="top" src={img} />
                <CCardBody>
                    <CCardTitle>{name}</CCardTitle>
                    <CCardText>
                    {desc}
                    </CCardText>
                    <h5>৳{price}</h5>
                    <h5>{author}</h5>
                    <Link to={`/buynow/${_id}`} className="text-white btn btn-primary">Buy now</Link>
                </CCardBody>
              
                </CCard>
            </CCol>
        </div>
    );
};

export default Product;