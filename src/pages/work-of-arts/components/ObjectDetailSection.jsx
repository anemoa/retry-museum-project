import React from 'react';
import styled from 'styled-components';

const ObjDetailSection = styled.section`
    display: flex;
    background-color: #f9f9f9;
`;

export const ObjectDetailSection = () => {
    return (
        <ObjDetailSection>
            <div className='arts_pic_wrap'>
                <div className='art_pic_box'>
                    <img src='' alt='' />
                </div>

                <div className='art_simple_info'>
                    <h2 className='art_title'>ㅇㅇㅇ</h2>

                    <div className='art_info_box'>
                        <strong className='info_title'>Maker</strong>
                        <p className='info_value'>ㄴㄴㄴ</p>
                    </div>

                    <div className='art_info_box'>
                        <strong className='info_title'>Production date</strong>
                        <p className='info_value'>ㅇㅇㄴㄴ</p>
                    </div>
                </div>
            </div>
        </ObjDetailSection>
    );
};
