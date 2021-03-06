import styled from 'styled-components';

const Overlay = styled.div`
   position: ${({ position }) => position || 'fixed'};
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: #fff;
   z-index: 1200;
`;

export default Overlay;