// mixins.ts
import {
  TAlignItems,
  TFlexDirection,
  TFontWeight,
  TJustifyContent,
} from '@interfaces/alias';
import { css } from '@emotion/react';

// flex Set
export const flexSet = (
  justifyContent: TJustifyContent,
  alignItems: TAlignItems,
  flexDirection: TFlexDirection,
) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
`;

// box Set
export const boxSet = (
  width: string,
  height: string,
  borderRadius?: string,
) => css`
  width: ${width};
  height: ${height};
  ${borderRadius ? `border-radius: ${borderRadius};` : ''}
`;

// font Set
export const fontSet = (
  fontSize: number = 14,
  fontWeight: TFontWeight = 400,
  lineHeight: number = 20,
) => css`
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  line-height: ${lineHeight}px;
`;

// color Set
export const colorSet = (color: string, background?: string) => css`
  color: ${color};
  ${background ? `background-color: ${background};` : ''}
`;

// background Set
export const backgroundSet = (url: string, size: string = 'cover') => css`
  background-image: url(${url});
  background-size: ${size};
  background-repeat: no-repeat;
  background-position: center center;
`;

// shadow Set
export const shadowSet = () => css`
  box-shadow:
    0 0 2px 0 rgba(145, 158, 171, 0.06),
    0 12px 24px -4px rgba(145, 158, 171, 0.06);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
