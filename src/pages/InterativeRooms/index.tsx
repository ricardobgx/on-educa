import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import { SuppliesBox } from '../../components/App/Supplies/styles';
import InterativeRoomCard from '../../components/InterativeRooms/InterativeRoomCard';
import InterativeRoomsActions from '../../components/InterativeRooms/InterativeRoomsActions';
import {
  Page,
  PageBoxColumn,
} from '../../global/styles/components/pageComponents';
import { InterativeRoomsBox, InterativeRoomsList } from './styles';

const InterativeRooms: React.FC = () => {
  return (
    <Page>
      <PageBoxColumn>
        <SectionLabel label="Salas interativas" backLink="/" />
        <SuppliesBox>
          <InterativeRoomsBox>
            <InterativeRoomsActions />
            <InterativeRoomsList className="supplies-list">
              <InterativeRoomCard
                index={0}
                code="FSC684"
                peopleName="André"
                participantsNumber={30}
                timeForResponse={10}
                maxGroupParticipants={4}
                status={0}
              />
              <InterativeRoomCard
                index={1}
                code="F6DE12"
                peopleName="Beatriz"
                participantsNumber={22}
                timeForResponse={10}
                maxGroupParticipants={2}
                status={1}
              />
              <InterativeRoomCard
                index={2}
                code="6A6DE1"
                peopleName="Carlos"
                participantsNumber={50}
                timeForResponse={15}
                maxGroupParticipants={5}
                status={1}
              />
            </InterativeRoomsList>
          </InterativeRoomsBox>
        </SuppliesBox>
      </PageBoxColumn>
    </Page>
  );
};

export default InterativeRooms;
