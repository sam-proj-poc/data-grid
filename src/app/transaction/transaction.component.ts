import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import { IApiResponse } from "./api-response";
import { ITransaction } from "./transaction";
import { IColumnHeading } from "../shared/column-heading";

@Component({
    selector: "pq-data-table",
    templateUrl: "./transaction.component.html",
    styleUrls: ["./transaction.component.css"]
})
export class TransactionComponent implements OnChanges {
    _columns: IColumnHeading[];
    _rows: ITransaction[];
    _name: string;


    constructor() {
        this._columns = [
            { name: "Id", prop: "Id", ascending: false },
            { name: "Record Id", prop: "RecordId", ascending: false },
            { name: "Reference Id", prop: "ReferenceId", ascending: false },
            { name: "Settlement Batch Id", prop: "SettlementBatchId", ascending: false },
            { name: "Description", prop:"Description", ascending: false }
        ];
    }

    get columns(): IColumnHeading[] {
        return this._columns;
    }

    get rows(): ITransaction[] {
        return this._rows;
    }

    @Input() set rows(transactions: ITransaction[]) {
        this._rows = transactions;
    }

    onColumnHeadingClick(column: IColumnHeading): void {
        column.ascending = !column.ascending;
        console.log(column.name);
        console.log(column.ascending);
    }


    ngOnChanges(changes: SimpleChanges) {
        console.dir(changes);
    }
}
