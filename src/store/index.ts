import { createStore } from 'vuex';
//Modules
import { JobsModule } from '@/store/modules/Jobs';
//Interfaces & Enums
import { type JobsState } from '@/store/modules/Jobs';

export interface StoreInterface {
  state: StateInterface;
  commit: any;
  dispatch: any;
}

export interface StateInterface {
  jobs: JobsState;
}

export const store = createStore({
  modules: {
    jobs: JobsModule
  },
  state(): StateInterface {
    return {} as StateInterface;
  },
});
