//Endpoints
import { getJobs } from '@/api/dbApi'
//Interfaces & Enums
import { type JobInterface } from '@/types/interfaces/Job'
import { JobStateMutations } from '@/types/enums/Job';

export interface JobsState {
  jobs: Array<JobInterface>;
  updatedAt: Date;
}

export const JobsModule = {
  state: (): JobsState => ({
    jobs: [],
    updatedAt: new Date()
  }),
  actions: {
    async fetchJobs(context: any) {
      const data = await (await getJobs()).data
      context.commit(JobStateMutations.loadJobs, data)
    }
  },
  mutations: {
    loadJobs(state: JobsState, data: Array<JobInterface>) {
      state.jobs = data
    }
  }
};