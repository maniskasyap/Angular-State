import { Action } from "@ngrx/store";

import { PeriodicElement } from "../models/elements";

export enum AppActionTypes {
  ROW_SELECT = "[App Table] ROW_SELECT",
  ROW_COPY = "[App Table] ROW_COPY"
}

export class RowSelect implements Action {
  readonly type = AppActionTypes.ROW_SELECT;
  constructor(public payload: { row: PeriodicElement }) {}
}

export class RowCopy implements Action {
  readonly type = AppActionTypes.ROW_SELECT;
  constructor(public payload: { row: PeriodicElement }) {}
}
