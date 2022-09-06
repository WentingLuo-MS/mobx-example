import { MobxStore } from "./mobxStore";
import { create } from "mobx-persist";
import { todoStore } from "./todoStore";

interface Stores {
  [key: string]: any;
}

export const stores: Stores = {
  mobxStore: new MobxStore(),
  todoStore: todoStore,
};

const hydrate = create({
  storage: localStorage,
  jsonify: true,
});

Object.keys(stores).map((val) => hydrate(val, stores[val]));
