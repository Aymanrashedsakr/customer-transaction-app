import { ITransaction } from "./transaction";

export interface ICustomer {

  transactions: ITransaction[];
  id: number;
  name: string;
  date: string;

}
