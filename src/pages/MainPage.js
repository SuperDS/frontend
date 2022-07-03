import {
  Header,
  NormalWrapper,
  PageWrapper,
  YoutubeVideo,
} from '../components';
import MainContents from '../components/Main/MainContents';
import YoutubeWrapper from '../components/Wrapper/YoutubeWrapper';
// 주소, basic svg, hover svg

function MainPage() {
  return (
    <PageWrapper>
      <NormalWrapper>
        <Header pageType='main' />
        <MainContents />
        <YoutubeWrapper>
          <YoutubeVideo embedId='HED9JQWI_M8' />
        </YoutubeWrapper>
      </NormalWrapper>
    </PageWrapper>
  );
}

export default MainPage;
