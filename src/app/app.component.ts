import { Component } from "@angular/core";
import { PeriodicElement } from "./models/elements";

import { Store } from "@ngrx/store";
import { RowSelect, RowCopy } from "./reducers/app.actions";

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" }
];
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  displayedColumns: string[] = ["name", "symbol"];
  dataSource = ELEMENT_DATA;

  constructor(private store: Store<any>) {}

  private selectedRow: PeriodicElement = null;

  onRowClick = rowObj => {
    this.selectedRow = rowObj;
    this.store.dispatch(new RowSelect({ row: this.selectedRow }));
    // this.store.dispatch(new RowCopy({ row: this.selectedRow }));
  };
}
