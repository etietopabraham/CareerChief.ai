import styled from 'styled-components';

export const InputStyles = styled('div')<{
  width?: string;
  height?: string;
}>`
  input {
    display: block;
    width: ${({ width }) => (width ? width : '400px')};
    height: ${({ height }) => (height ? height : '57px')};
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background: #f6f6f6;
    margin-bottom: 10px;
    padding: 1rem;

    &::placeholder {
      color: #999ea1;
      font-size: 14px;
    }
  }
  label {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #151515;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 700px) {
    input {
      width: 100%;
    }
  }
`;
