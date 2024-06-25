import { Button } from '@headlessui/react';
import React from 'react';
import styled from 'styled-components';

interface DonationMeterProps {
  goal: number;
  total: number;  
}

interface StyledSpanProps {
  background: string;
  height?: string;
}

interface StyledDivProps {
  background: string;
  borderRadius?: string;
  top?: string;
  right?: string;
  width?: string;
  height?: string;
  position?: string;
  zIndex?: string;
}

const DonationMeterContainer = styled.div`
  font-family: Helvetica;
  margin-left: 30px;
`;

const Goal = styled.strong`
  font-size: 24px;
  position: flex;
`;

const GoalAmount = styled.strong`
  font-size: 30px;
`;

const Glass = styled.span<StyledDivProps>`
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius || '100px 100px 0 0'};
  display: block;
  height: ${(props) => props.height || '300px'};
  margin: 0 35px 10px;
  padding: 5px;
  position: ${(props) => props.position || 'relative'};
  width: ${(props) => props.width || '20px'};
`;

const Total = styled.strong`
  font-size: 24px;
  position: flex;
  right: 35px;

`;

const Amount = styled.span<StyledSpanProps>`
  background: ${(props) => props.background};
  border-radius: 100px;
  display: block;
  width: 20px;
  position: absolute;
  right:0px;
  bottom: 5px;
  height: ${(props) => props.height};
`;

const Bulb = styled.div<StyledDivProps>`
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius || '100px'};
  display: block;
  height: ${(props) => props.height || '50px'};
  margin: 0 35px 10px;
  padding: 0px;
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || '-20px'};
  right: ${(props) => props.right || '15px'};
  width: ${(props) => props.width || '50px'};
`;

const RedCircle = styled.span<StyledDivProps>`
  background: ${(props) => props.background};
  border-radius: 100px;
  display: block;
  positon: relative;
  height: ${(props) => props.height || '50px'};
  width: ${(props) => props.width || '50px'};
`;

const Filler = styled.span<StyledDivProps>`
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius || '100px 100px 0 0'};
  display: block;
  height: ${(props) => props.height || '30px'};
  width: ${(props) => props.width || '20px'};
  position: ${(props) => props.position || 'relative'};
  top: ${(props) => props.top || '-65px'};
  right: ${(props) => props.right || '-15px'};
`;

const TickMark = styled.div<StyledDivProps>`
  background: ${(props) => props.background || '#000000'};
  height: 2px; 
  width: 10px; 
  position: absolute;
  top: calc(${(props) => props.top || '0%'} - 1px);
  right: 75%; 
  transform: translateX(50%); 
  z-index:1;
`;



const DonationMeter: React.FC<DonationMeterProps> = ({ goal, total }) => {
  const fillPercentage = total/goal * 100;
  const height = `${fillPercentage}%`;
  return (
    <div className="flex flex-row">
  <div className="flex flex-col justify-center items-center w-1/2">
    <div id="left" className="relative text-center text-black dark:text-white">
      <div>     
         <Total>${total}</Total>
      </div>
      <div className="text-gray-400">
       <Goal>raised of ${goal} goal</Goal>
      </div>
      <Button style={{ background: '#8080D7' }} className="w-full rounded mb-5 mt-5 py-2 px-4 text-sm text-white">
        Donate Now
      </Button>
      <Button style={{ background: '#A7A7FE' }} className="w-full rounded py-2 px-4 text-sm text-white">
        Share
      </Button>
    </div>
  </div>

  <div className="flex flex-col w-1/2">
    <DonationMeterContainer className="flex flex-col donation-meter items-center">
      <Glass background="#e5e5e5">
        <TickMark top="10%" background="#000000" />
        <TickMark top="20%" background="#000000" />
        <TickMark top="30%" background="#000000" />
        <TickMark top="40%" background="#000000" />
        <TickMark top="50%" background="#000000" />
        <TickMark top="60%" background="#000000" />
        <TickMark top="70%" background="#000000" />
        <TickMark top="80%" background="#000000" />
        <TickMark top="90%" background="#000000" />
        
        <Amount background="#8080D7" height={height} />
      </Glass>

      <Bulb background="#e5e5e5" height="50px" top="-20px" right="0px" width="50px">
        <RedCircle background="#8080D7" />
        <Filler background="#8080D7" height="30px" width="20px" top="-65px" right="-15px">
          <span></span>
        </Filler>
      </Bulb>
    </DonationMeterContainer>
  </div>
</div>

  );
};

export default DonationMeter;
