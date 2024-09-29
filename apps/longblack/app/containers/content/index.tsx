import { useCallback } from 'react';
import { flexSet, boxSet, colorSet } from '@styles/mixin';
import { useNavigate } from '@remix-run/react';
import styled from '@emotion/styled';
import { CONTENT_PAGE } from '@constants/data/content';
import AtomsCustomTitle from '@components/atoms/title/custom';
import AtomsCustomButton from '@components/atoms/button/custom';

export default function contentContainer() {
  // hooks
  const navigate = useNavigate();
  // variable
  const bodyContent = CONTENT_PAGE.content.body;
  const bodyDescription = CONTENT_PAGE.content.description;
  const buttonContent = CONTENT_PAGE.content.button;

  /* functions */
  const onClickRouteToMain = useCallback(() => {
    navigate('/');
  }, []);

  /* default render */
  return (
    <StyledWrapper>
      <StyledContentBox>
        <AtomsCustomTitle title={bodyContent} description={bodyDescription} />
        <AtomsCustomButton
          text={buttonContent.text}
          color={buttonContent.color}
          onClickFunction={onClickRouteToMain}
        />
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${() => flexSet('center', 'center', 'row')};
  ${() => boxSet('100%', '100vh')};
  ${() => colorSet('black', '#ffd0d0')};
`;

const StyledContentBox = styled.div`
  ${() => flexSet('center', 'center', 'column')};
  gap: 25px;
`;
