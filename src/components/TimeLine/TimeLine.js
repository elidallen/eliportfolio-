import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';


const Timeline = () => {
  // Your timeline logic here
  // You can use the state and effect hooks to control the carousel behavior and data.

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am a developer from the state of Maryland and I am excited about creating stunning websites.
        My expertise lies in translating designs into fully functional websites.
        My goal is to craft visually appealing, user-friendly websites that provide a seamless browsing experience.
      </SectionText>
      <SectionText>
        In my leisure time, I enjoy lifting weights, running, and going out to experience new things.
      </SectionText>
      {/* Render your timeline/carousel components here */}
    </Section>
  );
};

export default Timeline;