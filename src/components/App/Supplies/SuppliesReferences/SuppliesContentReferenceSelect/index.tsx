/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getContentsByUnity } from '../../../../../functions/content';
import {
  isDefaultContent,
  isDefaultUnity,
} from '../../../../../functions/entitiesValues';
import { IContent } from '../../../../../interfaces/IContent';
import { IUnity } from '../../../../../interfaces/IUnity';
import OnEducaAPI from '../../../../../services/api';
import {
  DEFAULT_CONTENT,
  DEFAULT_UNITY,
} from '../../../../../static/defaultEntitiesValues';
import { State } from '../../../../../store';
import {
  SuppliesReferenceSelectOption,
  SuppliesReferenceSelect,
} from '../styles';

interface ISuppliesContentReferenceSelectProps {
  unity: IUnity;
  selectedContent: IContent;
  setSelectedContent: (selectedContent: IContent) => void;
}

const SuppliesContentReferenceSelect = (
  props: ISuppliesContentReferenceSelectProps,
): JSX.Element => {
  /* Global State */

  const { aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  /* Local State */

  const [contents, setContents] = useState<IContent[]>([]);

  /* Props */

  const { unity, selectedContent, setSelectedContent } = props;

  /* Functions */

  const searchContent = (
    unityContents: IContent[],
    id: string,
  ): IContent | undefined => {
    const foundContent = unityContents.find((content) => content.id === id);

    return foundContent;
  };

  const setDefaultContent = (foundContents: IContent[]): void => {
    setContents(foundContents);

    if (foundContents.length > 0) {
      if (
        isDefaultContent(selectedContent) ||
        !searchContent(foundContents, selectedContent.id)
      )
        setSelectedContent(foundContents[0]);
    } else setSelectedContent(DEFAULT_CONTENT);
  };

  useEffect(() => {
    if (!isDefaultUnity(unity))
      getContentsByUnity(OnEducaAPI, unity.id, setDefaultContent, token);
    else {
      setSelectedContent(DEFAULT_CONTENT);
      setContents([]);
    }
  }, [unity]);

  return (
    <SuppliesReferenceSelect
      value={selectedContent.id}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedContent(
          searchContent(contents, event.target.value) || DEFAULT_CONTENT,
        )
      }
    >
      {contents.map((content) => (
        <SuppliesReferenceSelectOption key={content.id} value={content.id}>
          {content.title}
        </SuppliesReferenceSelectOption>
      ))}
    </SuppliesReferenceSelect>
  );
};

export default SuppliesContentReferenceSelect;
