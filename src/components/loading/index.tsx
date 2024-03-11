import ContentLoader from "react-content-loader";

export const Sceleton = () => (
  <ContentLoader
    speed={1.5}
    width={296}
    height={176}
    viewBox="0 0 296 176"
    backgroundColor="#eae2e2"
    foregroundColor="#FFFFFF"
  >
    <rect x="7" y="8" rx="0" ry="0" width="296" height="160" />
  </ContentLoader>
);
