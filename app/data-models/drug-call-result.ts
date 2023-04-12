import { Model, attr } from 'ember-orbit';

interface IDrugCall {
    drug_class: string,
    drugs: Array<{
            call: string,
            score: string,
            short_name: string
          }>,
    mutations: Array<string>
}

export default class DrugCallResult extends Model {
    @attr('array') drug_calls!: Array<IDrugCall>
}
