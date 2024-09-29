import { useCallback } from 'react';
import { flexSet, boxSet, colorSet } from '@styles/mixin';
import { useNavigate } from '@remix-run/react';
import styled from '@emotion/styled';
import { CONTENT_PAGE } from '@constants/data/content';
import AtomsCustomTitle from '@components/atoms/title/custom';
import AtomsCustomButton from '@components/atoms/button/custom';

export default function mainContainer() {
  // hooks
  const navigate = useNavigate();
  // variable
  const bodyContent = CONTENT_PAGE.main.body;
  const descriptionContent = CONTENT_PAGE.main.description;
  const buttonContent = CONTENT_PAGE.main.button;

  /** functions */
  const onClickRouteToContent = useCallback(() => {
    navigate('/content');
  }, []);

  /** default render */
  return (
    <StyledWrapper>
      <StyledContentBox>
        <AtomsCustomTitle
          title={bodyContent}
          description={descriptionContent}
        />
        <AtomsCustomButton
          text={buttonContent.text}
          color={buttonContent.color}
          onClickFunction={onClickRouteToContent}
        />
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ${flexSet('center', 'center', 'row')};
  ${boxSet('100%', '100vh')};
  ${colorSet('black', '#fffed3')};
`;

const StyledContentBox = styled.div`
  ${flexSet('center', 'center', 'column')};
  gap: 25px;
`;
