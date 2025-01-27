import React from 'react';
import styled from 'styled-components';

const ObjInfoSection = styled.section`
    display: flex;
    background-color: #eee;
`;

const ObjImageBox = styled.div`
    width: 50%;
    max-width: 750px;

	img{
		width: 100%;
	}
`;


const ObjArtInfoBox = styled.div`
    width: 50%;
    padding: 1rem 1.5625rem;
	text-align: left;

	h2{
		color: limegreen;
	}
`;

const ObjArtInfoElement = styled.div`
	margin-top: 1.5rem;

	strong{
		font-size: 26px;
		font-weight: bold;
	}

	p{
		margin-top: 5px;
		font-size: 16px;
		color: red;
	}
`;

export const ObjectInfoSection = () => {
    return (
        <ObjInfoSection>
            <ObjImageBox>
                <img src='' alt='' />
            </ObjImageBox>

            <ObjArtInfoBox>
                <h2>title</h2>

                <ObjArtInfoElement>
                    <strong>Maker</strong>
                    <p>artist</p>
                </ObjArtInfoElement>

                <ObjArtInfoElement>
                    <strong>Production date</strong>
                    <p>date</p>
                </ObjArtInfoElement>
            </ObjArtInfoBox>
        </ObjInfoSection>
    );
};
