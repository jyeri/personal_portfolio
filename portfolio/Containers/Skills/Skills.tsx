import React from 'react';
import { useSkills } from './useSkills';
import SkillsView from '../../Presentational/SkillsView';

const Skills: React.FunctionComponent = () => {
  const { responsive } = useSkills();

  return <SkillsView responsive={responsive} />;
};

export default Skills;