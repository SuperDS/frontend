import { useEffect } from 'react';
import { Header, NormalWrapper, PageWrapper } from '../components';
import MainContents from '../components/Main/MainContents';
import setMetaTags from '../hooks/setMetaTags';
// 주소, basic svg, hover svg

function MainPage() {
  useEffect(() => {
    setMetaTags({
      title: 'Onit',
      description: '안녕하세요! 온잇입니다.',
      imageUrl: '../asset/logo.svg',
    });
    return () => {
      setMetaTags({});
    };
  });
  return (
    <PageWrapper>
      <NormalWrapper>
        <Header pageType='main' />
        <MainContents />
      </NormalWrapper>
    </PageWrapper>
  );
}

export default MainPage;
