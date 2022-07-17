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
    singlePages: [],
    isPresentation: {},
  };
  console.log(pagesData);
  return (
    <PageWrapper>
      <NormalWrapper>
        <MultiHeader />
        <SinglePage theme='MultiPage' />
      </NormalWrapper>
    </PageWrapper>
  );
}

export default MultiPage;
