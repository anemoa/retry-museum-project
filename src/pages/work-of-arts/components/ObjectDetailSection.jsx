import React from 'react';
import styled from 'styled-components';

const ObjDetailSection = styled.section`
    display: flex;
    background-color: #f9f9f9;
`;

const ObjInfoBox = styled.div`
    width: 50%;
    padding-right: 2rem;
    text-align: left;
`;

const ObjSubInfoBox = styled.div`
    width: 50%;
    padding: 0 2rem;
    border-left: 1px solid #e8e8e8;
`;

const ContentRender = ({ content }) => {
    switch (content.type) {
        case 'link':
            // return <Link to={`/artists/${content.text}`}>{content.text}</Link>
            return <a href=''>{content.text}</a>;
        case 'text':
            return <p>{content.text}</p>;
        case 'links':
            return (
                <ul>
                    {content.items.map((link, i) => (
                        <li key={i}>
                            <a href={link.url}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
};

export const ObjectDetailSection = () => {
    const artSubInfo = [
        {
            title: 'Artist',
            content: {
                type: 'link',
                to: '/period',
                text: `작가이름`,
            },
        },
        {
            title: 'My shortlist',
            content: {
                type: 'text',
                text: 'Add Favorite List',
            },
        },
        {
            title: 'Object type',
            content: {
                type: 'text',
                text: `소재가 무엇인지`,
            },
        },
        {
            title: 'Share',
            content: {
                type: 'links',
                items: [
                    { url: 'https://www.naver.com', name: 'naver' },
                    { url: 'https://www.google.com', name: 'google' },
                    { url: 'https://www.insta.com', name: 'insta' },
                ],
            },
        },
    ];

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

            <ObjSubInfoBox>
                {artSubInfo.map((ele, idx) => {
                    return (
                        <div>
                            <p>{ele.title}</p>
                            <ContentRender content={ele.content} />
                        </div>
                    );
                })}
            </ObjSubInfoBox>
        </ObjDetailSection>
    );
};
