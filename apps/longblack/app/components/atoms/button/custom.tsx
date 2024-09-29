import { flexSet, boxSet, colorSet, fontSet } from '@styles/mixin';
import { IAtomsCustomButtonProps } from '@interfaces/props';
import { ICustomButtonContentBox } from '@interfaces/attribute';
import styled from '@emotion/styled';

export default function customButton({
  color,
  text,
  onClickFunction,
}: IAtomsCustomButtonProps) {
  /** default render */
  return (
    <StyledWrapper>
      <StyledContentBox $color={color} onClick={onClickFunction}>
        <p>{text}</p>
      </StyledContentBox>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.button`
  position: relative;
`;

const StyledContentBox = styled.div<ICustomButtonContentBox>`
  ${flexSet('center', 'center', 'row')};
  ${boxSet('auto', 'auto', '50px')};
  ${props => colorSet('white', props.$color)};
  padding: 15px 20px;
  cursor: pointer;
  & > p {
    ${fontSet(16, 500, 20)};
  }
`;
