import { IMissionRequirement } from './IMissionRequirement';

export interface IMission {
  id: string;
  title: string;
  relatedActivity: string;
  reward: number;
  repetitions: number;
  requirements: IMissionRequirement[];
}
