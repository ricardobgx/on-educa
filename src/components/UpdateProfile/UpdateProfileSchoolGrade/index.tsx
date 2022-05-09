import React, { useEffect, useState } from 'react';
import { getTeachingTypes } from '../../../functions/teachingType';
import OnEducaAPI from '../../../services/api';
import {
  UpdateProfileOption,
  UpdateProfileSectionBox,
  UpdateProfileSectionBoxLabel,
  UpdateProfileSelect,
} from '../styles';

interface IUpdateProfileSchoolGradeProps {
  selectedSchoolGradeId: string;
  setSelectedSchoolGradeId: (value: string) => void;
}

const UpdateProfileSchoolGrade = (
  props: IUpdateProfileSchoolGradeProps,
): JSX.Element => {
  /* Local State */

  const [teachingTypes, setTeachingTypes] = useState<ITeachingType[]>([]);

  /* Props */

  const { selectedSchoolGradeId, setSelectedSchoolGradeId } = props;

  const getTeachingTypesData = async (): Promise<void> => {
    const teachingTypesFound = await getTeachingTypes(OnEducaAPI);

    setTeachingTypes(teachingTypesFound);
  };

  useEffect(() => {
    getTeachingTypesData();
  }, []);

  return (
    <UpdateProfileSectionBox>
      <UpdateProfileSectionBoxLabel>Aprendizado</UpdateProfileSectionBoxLabel>
      <UpdateProfileSelect
        className="shadow-select bd-rd-20"
        value={selectedSchoolGradeId}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedSchoolGradeId(event.target.value)
        }
      >
        {teachingTypes.map((teachingType) =>
          teachingType.schoolGrades.map((schoolGrade) => (
            <UpdateProfileOption value={schoolGrade.id}>
              {schoolGrade.index}º ano - {teachingType.name}
            </UpdateProfileOption>
          )),
        )}
      </UpdateProfileSelect>
    </UpdateProfileSectionBox>
  );
};

export default UpdateProfileSchoolGrade;
