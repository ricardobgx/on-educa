/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IQuestion } from '../../../interfaces/Question';
import { ActionCreators, State } from '../../../store';
import PracticeStatus from '../PracticeStatus';
import Question from '../Question';
import { Container } from './styles';

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

export interface IAnsweredQuestion {
  status: string;
}

interface IQuestionsProps {
  setPracticeCompleted: (value: boolean) => void;
}

const Questions = (props: IQuestionsProps): JSX.Element => {
  /* Props */

  const { setPracticeCompleted } = props;

  /* Local State */

  const [questionIndex, setQuestionIndex] = useState(0);

  /* Global State */

  // Dispatch

  const dispatch = useDispatch();

  // Actions

  const {
    loadPracticeQuestions: loadQuestions,
    answerPracticeQuestion: answerQuestion,
  } = bindActionCreators(ActionCreators, dispatch);

  // State

  const practice = useSelector((store: State) => store.practice);

  /* ComponentMount operations */

  useEffect((): any => {
    // if (practice === DEFAULT_PRACTICE) {
    loadQuestions(questionsTest);
    // }
  }, []);

  /* Global State */

  // Questions

  const { questions } = practice;

  /* Questions functions */

  // Number of Answered Questions

  const answeredQuestionsNumber = (practiceQuestions: IQuestion[]): number => {
    return practiceQuestions.filter((question: IQuestion) => {
      return question.selectedAlternativeId !== '';
    }).length;
  };

  // Answer Question

  const answerPracticeQuestion = (
    practiceQuestions: IQuestion[],
    practiceQuestionIndex: number,
    selectedAlternative: string,
  ): void => {
    const newQuestions = practiceQuestions.map((question, index) => {
      const newQuestion = { ...question };
      if (index === practiceQuestionIndex)
        newQuestion.selectedAlternativeId = selectedAlternative;
      return newQuestion;
    });

    answerQuestion(newQuestions);

    if (questionIndex < practiceQuestions.length - 1)
      setQuestionIndex(questionIndex + 1);

    if (answeredQuestionsNumber(questions) === questions.length - 1)
      setPracticeCompleted(true);
  };

  return (
    <Container>
      <PracticeStatus
        answeredQuestionsNumber={answeredQuestionsNumber}
        questions={questions}
      />
      <Question
        question={questions[questionIndex]}
        questions={questions}
        questionIndex={questionIndex}
        answerQuestion={answerPracticeQuestion}
      />
    </Container>
  );
};

export default Questions;
