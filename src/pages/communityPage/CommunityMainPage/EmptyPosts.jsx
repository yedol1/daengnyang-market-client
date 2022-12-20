import React from 'react';
import styled from 'styled-components';
import { EMPTY_POST_IMAGE } from '../../../styles/CommonImages';

const EmptyPosts = ({ type }) => {
  return (
    <EmptyContents>
      <EmptyImage src={EMPTY_POST_IMAGE} alt='' />
      <EmptyText>아직 {type === 'follower' ? '팔로워가' : '팔로우한 사용자가'} 없어요.</EmptyText>
    </EmptyContents>
  );
};

export default EmptyPosts;

const EmptyContents = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyImage = styled.img`
  width: 160px;
  height: 160px;
  margin: 0 auto 2rem;
`;

const EmptyText = styled.strong`
  font-size: var(--fs-md);
  color: var(--sub-text-color);
`;
