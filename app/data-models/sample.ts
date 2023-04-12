import { Model, attr, hasOne, key } from 'ember-orbit';
import DrugCallResult from './drug-call-result';

export default class Sample extends Model {
    @key() remoteId!: string;
    @attr('string') name!: string
    @attr('string') inserted_at!: string;
    @attr('string') status!: string

    @hasOne('drugCallResult') drug_call_result!: DrugCallResult
}
