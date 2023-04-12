import { Model, attr, hasOne } from 'ember-orbit';
import Registration from 'drug-report/data-models/registration';


export default class Job extends Model {
    @attr('string') name!: string
    @attr('string') inserted_at!: string;
    @attr('string') status!: string;

    @hasOne('registration') registration!: Registration;
}
