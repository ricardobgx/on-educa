/* eslint-disable react/no-array-index-key */

import React from 'react';
import { handleLeagueColors } from '../../../utils/league';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import { LeagueBox, LeagueLevels } from './styles';

const League: React.FC<ILeagueProps> = (props) => {
  const { type, level } = props;

  const leagueColors = handleLeagueColors(type);

  const { backgroundColors, borderColor } = leagueColors;

  return (
    <LeagueBox backgroundColors={backgroundColors} borderColor={borderColor}>
      <LeagueLevels className={`level${level}`}>
        {Array.from({ length: level }).map((_, index) => (
          <SmallMaterialIconOutlined key={index} icon="expand_less" color="" />
        ))}
      </LeagueLevels>
    </LeagueBox>
  );
};

export default League;
