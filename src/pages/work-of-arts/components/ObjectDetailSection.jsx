import React from 'react';
import styled from 'styled-components';

const ObjDetailSection = styled.section`
    display: flex;
    background-color: #f9f9f9;
`;

const ObjInfoBox = styled.div`
    width: 50%;
    padding-right: 2rem;
`;

export const ObjectDetailSection = () => {
    const artsDetail = [
        {
            title: 'Measurements',
            content: `작품 크기 자리`,
        },
        {
            title: 'Place',
            content: `우선 만든 나라 자리`,
        },
        {
            title: 'Description',
            content: `우선 설명 자리`,
        },
    ];
    return (
        <ObjDetailSection>
            <ObjInfoBox>
                {artsDetail.map((art, idx) => (
                    <div key={idx} className='sub_info_box'>
                        <strong className='sub_info_title'>{art.title}</strong>
                        <p className='sub_info_value'>{art.content}</p>
                    </div>
                ))}
            </ObjInfoBox>
        </ObjDetailSection>
    );
};
