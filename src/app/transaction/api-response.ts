import { ITransaction } from "./transaction";

export interface IApiResponse {
    List: ITransaction[];
    TotalCount: number;
    GrandTotal: number;
}
