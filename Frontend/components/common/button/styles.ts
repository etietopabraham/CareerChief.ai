import styled from 'styled-components';
import { convertHexToRGBA } from '@/utils/libs';

export const ButtonStyles = styled('button')<{
  textColor?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  disabled?: boolean;
  border?: string;
}>`
  color: ${({ textColor }) => (textColor ? textColor : '#F6F6F6')};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '40px')};
  background-color: ${({ bgColor, disabled }) =>
    disabled ? `${convertHexToRGBA(bgColor, 0.5)}` : bgColor};
  border: ${({ border }) => (border ? border : 'none')};
  border-radius: 14px;
  font-weight: 400;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? `not-allowed` : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  white-space: nowrap;
  padding: 0.5rem;
`;


export const Center = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;