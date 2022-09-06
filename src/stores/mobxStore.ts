import { observable, action, computed } from "mobx";
import { persist } from "mobx-persist";

export interface IMobxStore {
  name: string;
  greeting: string;
  setName(name: string): void;
  updateName(): void;
}

export class MobxStore implements IMobxStore {
  @persist @observable name = "World";

  constructor(){
    this.setName = this.setName.bind(this);
  }
  @computed
  public get greeting(): string {
    return `Hello ${this.name}`;
  }

  @action
  public setName(name: string): void {
    this.name = name;
  }

  @action.bound
  public updateName(): void {
    if (this.name == "World") {
      this.name = "MobX";
    }
    else if (this.name == "MobX") {
        this.name = "World";
    }
  }
}
