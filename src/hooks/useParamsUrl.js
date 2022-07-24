import { useParams } from 'react-router-dom';

export function useGetCode() {
  const { code } = useParams();
  return code;
}

export function useGetEmail() {
  const { email } = useParams();
  return email;
}

export function useGetPersonalUrl() {
  const { personalUrl } = useParams();
  return personalUrl;
}

export function useGetPublishingUrl() {
  const { publishingUrl } = useParams();
  return publishingUrl;
}

export function useGetPageUrl() {
  const { pageUrl } = useParams();
  return pageUrl;
}
