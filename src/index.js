import React from 'react';
import { render } from 'react-dom';
import SkillChart from './components/skill-chart';
import './index.css';

render(
  <SkillChart />,
  document.querySelector('.root')
);
