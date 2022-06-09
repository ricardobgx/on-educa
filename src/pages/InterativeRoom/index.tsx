import React from 'react';
import { SmallMaterialIcon } from '../../components/App/Icons/MaterialIcons/components';
import {
  MediumMaterialIconOutlined,
  SmallMaterialIconOutlined,
} from '../../components/App/Icons/MaterialIcons/MaterialIconsOutlined';
import PeopleCard from '../../components/App/PeopleCard';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
  DEFAULT_TEACHING_TYPE,
} from '../../static/defaultEntitiesValues';
import {
  InterativeRoomBox,
  InterativeRoomQuestionAndChat,
  InterativeRoomQuestion,
  InterativeRoomQuestionHeader,
  InterativeRoomQuestionHeaderHeader,
  InterativeRoomQuestionHeaderTitle,
  InterativeRoomQuestionContent,
  InterativeRoomHeaderAndParticipants,
  InterativeRoomHeader,
  InterativeRoomHeaderOwner,
  InterativeRoomHeaderActions,
  StartInterativeRoomButton,
  InterativeRoomDetailsButton,
  CloseInterativeRoomButton,
  InterativeRoomParticipants,
  InterativeRoomParticipantsTitle,
  InterativeRoomParticipantsList,
  InterativeRoomHeaderOwnerName,
  InterativeRoomParticipant,
  AddParticipantButton,
  AddParticipantButtonLabel,
  InterativeRoomChat,
  InterativeRoomChatTitle,
  InterativeRoomChatMessages,
  InterativeRoomChatMessage,
  InterativeRoomChatMessageOwnerPicture,
  InterativeRoomChatMessageContent,
  InterativeRoomChatNewMessage,
  InterativeRoomChatNewMessageInput,
  InterativeRoomChatSendMessageButton,
  InterativeRoomMessageSendDate,
} from './styles';

const InterativeRoom: React.FC = () => {
  return (
    <InterativeRoomBox>
      <InterativeRoomQuestionAndChat>
        <InterativeRoomQuestion className="with-shadow bd-rd-20">
          <InterativeRoomQuestionHeader>
            <InterativeRoomQuestionHeaderHeader>
              <SmallMaterialIconOutlined icon="help" color="" />
              <InterativeRoomQuestionHeaderTitle>
                Pergunta
              </InterativeRoomQuestionHeaderTitle>
            </InterativeRoomQuestionHeaderHeader>
            <SmallMaterialIconOutlined icon="edit" color="" />
          </InterativeRoomQuestionHeader>
          <InterativeRoomQuestionContent>
            Considerando que um homem gasta todos os dias cerca de R$ xx,xx para
            ir da casa até o trabalho em dias normais, em dias de chuva ele pode
            demorar até o dobro do tempo para fazer o mesmo trajeto, quanto ele
            gastará de combustível nos dias chuvosos?
          </InterativeRoomQuestionContent>
        </InterativeRoomQuestion>
        <InterativeRoomChat className="with-shadow bd-rd-20">
          <InterativeRoomChatTitle>Chat</InterativeRoomChatTitle>
          <InterativeRoomChatMessages>
            <InterativeRoomChatMessage className="with-shadow bd-rd-20">
              <InterativeRoomChatMessageOwnerPicture src="http://192.168.10.25:8080/uploads/1654458346074-user%20(1).webp" />
              <InterativeRoomChatMessageContent>
                Animados para começar?
              </InterativeRoomChatMessageContent>
              <InterativeRoomMessageSendDate>
                10h45
              </InterativeRoomMessageSendDate>
            </InterativeRoomChatMessage>
            <InterativeRoomChatMessage className="with-shadow bd-rd-20">
              <InterativeRoomChatMessageOwnerPicture src="http://192.168.10.25:8080/uploads/1654458346074-user%20(1).webp" />
              <InterativeRoomChatMessageContent>
                Sim!!
              </InterativeRoomChatMessageContent>
              <InterativeRoomMessageSendDate>
                10h46
              </InterativeRoomMessageSendDate>
            </InterativeRoomChatMessage>
          </InterativeRoomChatMessages>
          <InterativeRoomChatNewMessage>
            <InterativeRoomChatNewMessageInput className="bd-rd-20" />
            <InterativeRoomChatSendMessageButton className="block-shadow-button main-action bd-rd-20">
              <SmallMaterialIconOutlined icon="send" color="" />
            </InterativeRoomChatSendMessageButton>
          </InterativeRoomChatNewMessage>
        </InterativeRoomChat>
      </InterativeRoomQuestionAndChat>
      <InterativeRoomHeaderAndParticipants>
        <InterativeRoomHeader>
          <InterativeRoomHeaderOwner className="with-shadow bd-rd-30">
            <InterativeRoomHeaderOwnerName>
              Sala de André
            </InterativeRoomHeaderOwnerName>
          </InterativeRoomHeaderOwner>
          <InterativeRoomHeaderActions>
            <StartInterativeRoomButton className="block-shadow-button main-action bd-rd-30">
              <MediumMaterialIconOutlined icon="play_arrow" color="" />
            </StartInterativeRoomButton>
            <InterativeRoomDetailsButton className="block-shadow-button secondary-action bd-rd-30">
              <MediumMaterialIconOutlined icon="info" color="" />
            </InterativeRoomDetailsButton>
            <CloseInterativeRoomButton className="block-shadow-button danger-action bd-rd-30">
              <MediumMaterialIconOutlined icon="delete" color="" />
            </CloseInterativeRoomButton>
          </InterativeRoomHeaderActions>
        </InterativeRoomHeader>
        <InterativeRoomParticipants className="with-shadow bd-rd-20">
          <InterativeRoomParticipantsTitle>
            Participantes
          </InterativeRoomParticipantsTitle>
          <InterativeRoomParticipantsList>
            <InterativeRoomParticipant
              to="csaca-cs55-1a6eev"
              className="block-shadow-button secondary-action bd-rd-15"
            >
              <PeopleCard
                people={{
                  ...DEFAULT_PEOPLE,
                  name: 'Ana Beatriz',
                  profilePicture: {
                    path: 'http://192.168.10.25:8080/uploads/1654458346074-user%20(1).webp',
                    id: '',
                  },
                }}
                showScore={false}
                student={{
                  ...DEFAULT_STUDENT,
                  schoolGrade: {
                    id: 'casas-119919-cascsa-5615',
                    index: 1,
                    subjects: [],
                    teachingType: DEFAULT_TEACHING_TYPE,
                  },
                }}
                teacher={DEFAULT_TEACHER}
                abbreviateName
                smartphoneNameLength={20}
              />
            </InterativeRoomParticipant>
            <InterativeRoomParticipant
              to="csaca-cs55-1a6eev"
              className="block-shadow-button secondary-action bd-rd-15"
            >
              <PeopleCard
                people={{
                  ...DEFAULT_PEOPLE,
                  name: 'Bruno Cavalcante',
                  profilePicture: {
                    path: 'http://192.168.10.25:8080/uploads/1654458346074-user%20(1).webp',
                    id: '',
                  },
                }}
                showScore={false}
                student={{
                  ...DEFAULT_STUDENT,
                  schoolGrade: {
                    id: 'casas-119919-cascsa-5615',
                    index: 1,
                    subjects: [],
                    teachingType: DEFAULT_TEACHING_TYPE,
                  },
                }}
                teacher={DEFAULT_TEACHER}
                abbreviateName
                smartphoneNameLength={20}
              />
            </InterativeRoomParticipant>
            <InterativeRoomParticipant
              to="csaca-cs55-1a6eev"
              className="block-shadow-button secondary-action bd-rd-15"
            >
              <PeopleCard
                people={{
                  ...DEFAULT_PEOPLE,
                  name: 'Carlos Dantas',
                  profilePicture: {
                    path: 'http://192.168.10.25:8080/uploads/1654458346074-user%20(1).webp',
                    id: '',
                  },
                }}
                showScore={false}
                student={{
                  ...DEFAULT_STUDENT,
                  schoolGrade: {
                    id: 'casas-119919-cascsa-5615',
                    index: 1,
                    subjects: [],
                    teachingType: DEFAULT_TEACHING_TYPE,
                  },
                }}
                teacher={DEFAULT_TEACHER}
                abbreviateName
                smartphoneNameLength={20}
              />
            </InterativeRoomParticipant>
            <InterativeRoomParticipant
              to="csaca-cs55-1a6eev"
              className="block-shadow-button secondary-action bd-rd-15"
            >
              <PeopleCard
                people={{
                  ...DEFAULT_PEOPLE,
                  name: 'Ana Beatriz',
                  profilePicture: {
                    path: 'http://192.168.10.25:8080/uploads/1654458346074-user%20(1).webp',
                    id: '',
                  },
                }}
                showScore={false}
                student={{
                  ...DEFAULT_STUDENT,
                  schoolGrade: {
                    id: 'casas-119919-cascsa-5615',
                    index: 1,
                    subjects: [],
                    teachingType: DEFAULT_TEACHING_TYPE,
                  },
                }}
                teacher={DEFAULT_TEACHER}
                abbreviateName
                smartphoneNameLength={20}
              />
            </InterativeRoomParticipant>
            <InterativeRoomParticipant
              to="csaca-cs55-1a6eev"
              className="block-shadow-button secondary-action bd-rd-15"
            >
              <PeopleCard
                people={{
                  ...DEFAULT_PEOPLE,
                  name: 'Ana Beatriz',
                  profilePicture: {
                    path: 'http://192.168.10.25:8080/uploads/1654458346074-user%20(1).webp',
                    id: '',
                  },
                }}
                showScore={false}
                student={{
                  ...DEFAULT_STUDENT,
                  schoolGrade: {
                    id: 'casas-119919-cascsa-5615',
                    index: 1,
                    subjects: [],
                    teachingType: DEFAULT_TEACHING_TYPE,
                  },
                }}
                teacher={DEFAULT_TEACHER}
                abbreviateName
                smartphoneNameLength={20}
              />
            </InterativeRoomParticipant>
          </InterativeRoomParticipantsList>
          <AddParticipantButton className="block-shadow-button main-action bd-rd-20">
            <SmallMaterialIconOutlined icon="person_add" color="" />
            <AddParticipantButtonLabel>Adicionar</AddParticipantButtonLabel>
          </AddParticipantButton>
        </InterativeRoomParticipants>
      </InterativeRoomHeaderAndParticipants>
    </InterativeRoomBox>
  );
};

export default InterativeRoom;
