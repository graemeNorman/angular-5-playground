import { IDeal } from './deal.interface';

export interface IResults {
  mainDeal: object;
  canonicalUrl: string;
  deals: IDeal[];
  // headline: string;
  // price: string;
}
