import React from 'react';
import { ObjectInfoSection } from './ObjectInfoSection';
import { ObjectDetailSection } from './ObjectDetailSection';
import styled from 'styled-components';

const WorkOfArtsContainer = styled.main`
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	background-color: beige;
`;


export const WorkOfArtsLayout = () => {
    return (
        <WorkOfArtsContainer>
            <ObjectInfoSection />
            <ObjectDetailSection />
		</WorkOfArtsContainer>
    );
};
