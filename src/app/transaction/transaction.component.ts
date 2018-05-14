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

    _referenceIdFilter: string;
    filteredRows: ITransaction[];


    constructor() {
        this._columns = [
            { name: "Id", prop: "Id", ascending: false },
            { name: "Record Id", prop: "RecordId", ascending: false },
            { name: "Reference Id", prop: "ReferenceId", ascending: false },
            { name: "Settlement Batch Id", prop: "SettlementBatchId", ascending: false },
            { name: "Description", prop:"Description", ascending: false }
        ];

        this._referenceIdFilter = "";
    }

    get columns(): IColumnHeading[] {
        return this._columns;
    }

    get rows(): ITransaction[] {
        return this.filteredRows;
    }

    @Input() set rows(transactions: ITransaction[]) {
        this._rows = transactions;
        this.filteredRows = this._rows;
        this.performReferenceIdFilter();
    }

    get referenceIdFilter(): string {
        return this._referenceIdFilter;
    }

    set referenceIdFilter(value: string) {
        this._referenceIdFilter = value;
        this.filteredRows = this._rows;
        this.performReferenceIdFilter();
    }


    onColumnHeadingClick(column: IColumnHeading): void {
        column.ascending = !column.ascending;
        console.log(column.name);
        console.log(column.ascending);
    }


    performReferenceIdFilter(): void {
        let filterBy: string = this._referenceIdFilter.toLocaleLowerCase();
        if (filterBy) {
            this.filteredRows = this.filteredRows.filter((transaction: ITransaction) => {
                return transaction.ReferenceId.toLocaleLowerCase().indexOf(filterBy) !== -1;
            });
        }
    }


    ngOnChanges(changes: SimpleChanges) {
        console.dir(changes);
    }
}
