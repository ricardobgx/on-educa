import { isDefaultPeople } from '../functions/entitiesValues';

export const isAuthenticated = (people: IPeople): boolean => {
  return !isDefaultPeople(people);
};
