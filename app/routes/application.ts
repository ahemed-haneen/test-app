import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Job from 'drug-report/data-models/job';

export default class ApplicationRoute extends Route {
    @service store!: any;
    @service dataCoordinator!: any;

    async beforeModel() {
        await this.dataCoordinator.activate();
    }
    async model(){
        return await this.store.query((q: {findRecord: (attribute: {type: string, id: string}) => Job }) => q.findRecord({type: 'job', id: '001'}))
    }
}
