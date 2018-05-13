import { Component, OnInit } from "@angular/core";
import { TransactionService } from "./transaction/transaction.service";
import { ITransaction } from "./transaction/transaction";
import { IApiResponse } from "./transaction/api-response";

@Component({
    selector: "pq-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    providers: [ TransactionService ]
})
export class AppComponent implements OnInit {
    title = "Data Grid Component";
    rows: ITransaction[];

    constructor(private _transactionService: TransactionService) {
    }


    ngOnInit(): void {
        this._transactionService
            .getTransactions()
            .subscribe(this.setTableRows.bind(this));
    }

    setTableRows(apiResponse: IApiResponse): void {
        this.rows = apiResponse.List;
    }
}
