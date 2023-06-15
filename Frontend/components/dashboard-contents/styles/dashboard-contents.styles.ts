import styled from 'styled-components';

type contentStyleProps = {
  isCollapsed?: boolean;
};

export const ContentWrapper = styled.div<contentStyleProps>`
  margin-left: ${({ isCollapsed }) => (isCollapsed ? '5rem' : '13rem')};
  transition: all 0.3s ease;
  background: #fff;
  min-height: 100vh;
  animation: fadeIn 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 992px) {
    margin-left: 0;
  }
`;
