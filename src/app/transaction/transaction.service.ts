import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { IApiResponse } from "./api-response";

@Injectable()
export class TransactionService {
    private _transactionUrl: string = "./api/transaction/transaction.json";

    constructor(private _http: HttpClient) {
    }

    getTransactions(): Observable<IApiResponse> {
        return this._http
            .get<IApiResponse>(this._transactionUrl)
            //.do(value => console.log(JSON.stringify(value)))
            .catch(this.handleError);
    }

    handleError(error: HttpErrorResponse): ErrorObservable {
        console.log(error.message);
        return Observable.throw(error.message);
    }
}
