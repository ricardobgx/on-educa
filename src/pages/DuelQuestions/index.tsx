import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { IQuestion } from '../../interfaces/Question';
import { ActionCreators, State } from '../../store';
import { Page } from '../components';
import DuelQuestion from '../../components/DuelQuestions/DuelQuestion';
import DuelStatus from '../../components/DuelQuestions/DuelStatus';
import { DuelQuestionsBox, PageBox } from './styles';
import { IDuel } from '../../interfaces/Duel';
import { IAnsweredQuestion } from '../../interfaces/AnsweredQuestion';

const questionsTest: IQuestion[] = [
  {
    id: '1',
    description:
      '(Enem/2017) Após a Declaração Universal dos Direitos Humanos pela ONU, em 1948, a Unesco publicou estudos de cientistas de todo o mundo que desqualificaram as doutrinas racistas e demonstraram a unidade do gênero humano. Desde então, a maioria dos próprios cientistas europeus passou a reconhecer o caráter discriminatório da pretensa superioridade racial do homem branco e a condenar as aberrações cometidas em seu nome.\n\nSILVEIRA, R. Os selvagens e a massa: papel do racismo científico na montagem da hegemonia ocidental. Afro-Ásia, n. 23, 1999 (adaptado).\n\nA posição assumida pela Unesco, a partir de 1948, foi motivada por acontecimentos então recentes, dentre os quais se destacava o(a)',
    alternatives: [
      {
        id: '1',
        description:
          'a) ataque feito pelos japoneses à base militar americana de Pearl Harbor.',
      },
      {
        id: '2',
        description:
          'b) desencadeamento da Guerra Fria e de novas rivalidades entre nações.',
      },
      {
        id: '3',
        description:
          'c) morte de milhões de soldados nos combates da Segunda Guerra Mundial.',
      },
      {
        id: '4',
        description:
          'd) execução de judeus e eslavos presos em guetos e campos de concentração nazistas.',
      },
      {
        id: '5',
        description:
          'e) lançamento de bombas atômicas em Hiroshima e Nagasaki pelas forças norte-americanas.',
      },
    ],
    rightAlternativeId: '1',
    selectedAlternativeId: '',
  },
  {
    id: '2',
    description:
      '(Enem/2018) Após a Declaração Universal dos Direitos Humanos pela ONU, em 1948, a Unesco publicou estudos de cientistas de todo o mundo que desqualificaram as doutrinas racistas e demonstraram a unidade do gênero humano. Desde então, a maioria dos próprios cientistas europeus passou a reconhecer o caráter discriminatório da pretensa superioridade racial do homem branco e a condenar as aberrações cometidas em seu nome.\n\nSILVEIRA, R. Os selvagens e a massa: papel do racismo científico na montagem da hegemonia ocidental. Afro-Ásia, n. 23, 1999 (adaptado).\n\nA posição assumida pela Unesco, a partir de 1948, foi motivada por acontecimentos então recentes, dentre os quais se destacava o(a)',
    alternatives: [
      {
        id: '1',
        description:
          'a) ataque feito pelos japoneses à base militar americana de Pearl Harbor.',
      },
      {
        id: '2',
        description:
          'b) desencadeamento da Guerra Fria e de novas rivalidades entre nações.',
      },
      {
        id: '3',
        description:
          'c) morte de milhões de soldados nos combates da Segunda Guerra Mundial.',
      },
      {
        id: '4',
        description:
          'd) execução de judeus e eslavos presos em guetos e campos de concentração nazistas.',
      },
      {
        id: '5',
        description:
          'e) lançamento de bombas atômicas em Hiroshima e Nagasaki pelas forças norte-americanas.',
      },
    ],
    rightAlternativeId: '2',
    selectedAlternativeId: '',
  },
  {
    id: '3',
    description:
      '(Enem/2019) Após a Declaração Universal dos Direitos Humanos pela ONU, em 1948, a Unesco publicou estudos de cientistas de todo o mundo que desqualificaram as doutrinas racistas e demonstraram a unidade do gênero humano. Desde então, a maioria dos próprios cientistas europeus passou a reconhecer o caráter discriminatório da pretensa superioridade racial do homem branco e a condenar as aberrações cometidas em seu nome.\n\nSILVEIRA, R. Os selvagens e a massa: papel do racismo científico na montagem da hegemonia ocidental. Afro-Ásia, n. 23, 1999 (adaptado).\n\nA posição assumida pela Unesco, a partir de 1948, foi motivada por acontecimentos então recentes, dentre os quais se destacava o(a)',
    alternatives: [
      {
        id: '1',
        description:
          'a) ataque feito pelos japoneses à base militar americana de Pearl Harbor.',
      },
      {
        id: '2',
        description:
          'b) desencadeamento da Guerra Fria e de novas rivalidades entre nações.',
      },
      {
        id: '3',
        description:
          'c) morte de milhões de soldados nos combates da Segunda Guerra Mundial.',
      },
      {
        id: '4',
        description:
          'd) execução de judeus e eslavos presos em guetos e campos de concentração nazistas.',
      },
      {
        id: '5',
        description:
          'e) lançamento de bombas atômicas em Hiroshima e Nagasaki pelas forças norte-americanas.',
      },
    ],
    rightAlternativeId: '3',
    selectedAlternativeId: '',
  },
  {
    id: '4',
    description:
      '(Enem/2020) Após a Declaração Universal dos Direitos Humanos pela ONU, em 1948, a Unesco publicou estudos de cientistas de todo o mundo que desqualificaram as doutrinas racistas e demonstraram a unidade do gênero humano. Desde então, a maioria dos próprios cientistas europeus passou a reconhecer o caráter discriminatório da pretensa superioridade racial do homem branco e a condenar as aberrações cometidas em seu nome.\n\nSILVEIRA, R. Os selvagens e a massa: papel do racismo científico na montagem da hegemonia ocidental. Afro-Ásia, n. 23, 1999 (adaptado).\n\nA posição assumida pela Unesco, a partir de 1948, foi motivada por acontecimentos então recentes, dentre os quais se destacava o(a)',
    alternatives: [
      {
        id: '1',
        description:
          'a) ataque feito pelos japoneses à base militar americana de Pearl Harbor.',
      },
      {
        id: '2',
        description:
          'b) desencadeamento da Guerra Fria e de novas rivalidades entre nações.',
      },
      {
        id: '3',
        description:
          'c) morte de milhões de soldados nos combates da Segunda Guerra Mundial.',
      },
      {
        id: '4',
        description:
          'd) execução de judeus e eslavos presos em guetos e campos de concentração nazistas.',
      },
      {
        id: '5',
        description:
          'e) lançamento de bombas atômicas em Hiroshima e Nagasaki pelas forças norte-americanas.',
      },
    ],
    rightAlternativeId: '4',
    selectedAlternativeId: '',
  },
  {
    id: '5',
    description:
      '(Enem/2021) Após a Declaração Universal dos Direitos Humanos pela ONU, em 1948, a Unesco publicou estudos de cientistas de todo o mundo que desqualificaram as doutrinas racistas e demonstraram a unidade do gênero humano. Desde então, a maioria dos próprios cientistas europeus passou a reconhecer o caráter discriminatório da pretensa superioridade racial do homem branco e a condenar as aberrações cometidas em seu nome.\n\nSILVEIRA, R. Os selvagens e a massa: papel do racismo científico na montagem da hegemonia ocidental. Afro-Ásia, n. 23, 1999 (adaptado).\n\nA posição assumida pela Unesco, a partir de 1948, foi motivada por acontecimentos então recentes, dentre os quais se destacava o(a)',
    alternatives: [
      {
        id: '1',
        description:
          'a) ataque feito pelos japoneses à base militar americana de Pearl Harbor.',
      },
      {
        id: '2',
        description:
          'b) desencadeamento da Guerra Fria e de novas rivalidades entre nações.',
      },
      {
        id: '3',
        description:
          'c) morte de milhões de soldados nos combates da Segunda Guerra Mundial.',
      },
      {
        id: '4',
        description:
          'd) execução de judeus e eslavos presos em guetos e campos de concentração nazistas.',
      },
      {
        id: '5',
        description:
          'e) lançamento de bombas atômicas em Hiroshima e Nagasaki pelas forças norte-americanas.',
      },
    ],
    rightAlternativeId: '5',
    selectedAlternativeId: '',
  },
];

const duelTest: IDuel = {
  id: '1',
  teams: [],
  questions: questionsTest,
};

const DEFAULT_QUESTION: IAnsweredQuestion = {
  id: '',
  description: '',
  alternatives: [],
  rightAlternativeId: '',
  selectedAlternativeId: '',
};

const DuelQuestions = (): JSX.Element => {
  /* Local State */

  const [question, setQuestion] = useState(DEFAULT_QUESTION);

  /* Global State */

  // Dispatch

  const dispatch = useDispatch();

  // Actions

  const { loadDuel, answerDuelQuestion: answerQuestion } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  // State

  const duel = useSelector((store: State) => store.duel);

  /* Number functions */

  // Random int number from interval

  const randIntFromInterval = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  /* Questions functions */

  // Sort duel question

  const sortDuelQuestion = (duelQuestions: IQuestion[]): void => {
    const noAnsweredQuestions = duelQuestions.filter(
      (duelQuestion) => duelQuestion.selectedAlternativeId === '',
    );

    const randQuestionIndex = randIntFromInterval(
      0,
      noAnsweredQuestions.length - 1,
    );

    setQuestion(noAnsweredQuestions[randQuestionIndex]);
  };

  // Number of Answered Questions

  const answeredQuestionsNumber = (duelQuestions: IQuestion[]): number => {
    return duelQuestions.filter((duelQuestion: IAnsweredQuestion) => {
      return duelQuestion.selectedAlternativeId !== '';
    }).length;
  };

  // Answer Question

  const answerDuelQuestion = (
    duelQuestions: IQuestion[],
    duelQuestionId: string,
    selectedAlternativeId: string,
  ): void => {
    const newQuestions = duelQuestions.map((duelQuestion) => {
      const newQuestion = { ...duelQuestion };
      if (duelQuestionId === duelQuestion.id)
        newQuestion.selectedAlternativeId = selectedAlternativeId;
      return newQuestion;
    });

    answerQuestion(newQuestions);

    if (answeredQuestionsNumber(newQuestions) < newQuestions.length)
      sortDuelQuestion(newQuestions);
    else setQuestion(DEFAULT_QUESTION);
    // setDuelQuestionsCompleted(true);
  };

  /* ComponentMount operations */

  useEffect((): any => {
    loadDuel(duelTest);
    sortDuelQuestion(questionsTest);
  }, []);

  /* Global State */

  // Questions

  const { questions } = duel;

  return (
    <Page>
      <PageBox>
        <DuelQuestionsBox>
          <DuelStatus
            answeredQuestionsNumber={answeredQuestionsNumber}
            questions={questions}
          />
          <DuelQuestion
            questions={questions}
            answerQuestion={answerDuelQuestion}
            question={question}
          />
        </DuelQuestionsBox>
        {answeredQuestionsNumber(questions) === questions.length && (
          <Redirect to="/duels/12345/congratulations" />
        )}
      </PageBox>
    </Page>
  );
};

export default DuelQuestions;
