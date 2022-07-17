import React from 'react';
import { NormalWrapper, PageWrapper } from '../components';
import MultiHeader from '../components/MultiPage/MultiHeader';
import SinglePage from './SinglePage';

function MultiPage() {
  const pagesData = {
    title: '사용자 정의 제목',
    url: 'heom',
    thumbnail: 'www.url',
    user_seq: 12345,
    singlePages: ['image', 'video', 'info', '하이', '바밤바'],
    isPresentation: {},
  };
  return (
    <PageWrapper>
      <NormalWrapper>
        <MultiHeader pagesData={pagesData} />
        <SinglePage theme='MultiPage' />
      </NormalWrapper>
    </PageWrapper>
  );
}

export default MultiPage;
