import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";

export interface ICritterStore {
  name: string;
  greeting: string;
  setName(name: string): void;
}

export class CritterStore implements ICritterStore {
  @observable name = "World";

  @computed
  public get greeting(): string {
    return `Hello ${this.name}`;
  }

  @action.bound
  public setName(name: string): void {
    this.name = name;
  }
}
