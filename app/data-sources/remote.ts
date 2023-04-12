import SourceClass from '@orbit/jsonapi';
import { applyStandardSourceInjections } from 'ember-orbit';

export default {
  create(injections: any = {}) {
    applyStandardSourceInjections(injections);
    injections.name = 'remote';
    return new SourceClass(injections);
  }
};
