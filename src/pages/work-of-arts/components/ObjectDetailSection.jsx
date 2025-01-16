import React from 'react';
import styled from 'styled-components';

const DetailSection = styled.section`
    display: flex;
    background-color: #f9f9f9;
`;

export const ObjectDetailSection = () => {
    return (
        <section>
            <div className='arts_pic_wrap'>
                <div className='art_pic_box'>
                    <img src='' alt='' />
                </div>

                <div className='art_simple_info'>
                    <h2 className='art_title'></h2>

                    <div className='art_info_box'>
                        <strong className='info_title'>Maker</strong>
                        <p className='info_value'></p>
                    </div>

                    <div className='art_info_box'>
                        <strong className='info_title'>Production date</strong>
                        <p className='info_value'></p>
                    </div>
                </div>
            </div>
        </section>
    );
};
