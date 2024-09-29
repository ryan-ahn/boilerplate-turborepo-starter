import { flexSet, boxSet, fontSet } from '@styles/mixin';
import { IAtomsCustomTitleProps } from '@interfaces/props';
import styled from '@emotion/styled';

export default function customTitle({
  title,
  description,
}: IAtomsCustomTitleProps) {
  /** default render */
  return (
    <StyledWrapper>
      <StyledContentBox>
        <h4>{title}</h4>
        <p>{description}</p>
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledContentBox = styled.div`
  ${flexSet('center', 'center', 'column')};
  ${boxSet('auto', 'auto', '50px')};
  gap: 10px;
  & > h4 {
    ${fontSet(50, 500, 60)};
    text-align: center;
    white-space: pre-wrap;
  }
  & > p {
    ${fontSet(20, 100, 24)};
  }
`;
