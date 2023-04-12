import { Model, attr, hasOne, hasMany } from 'ember-orbit';
import Registration from 'drug-report/data-models/registration';
import Sample from './sample';


export default class Job extends Model {
    @attr('string') name!: string
    @attr('string') inserted_at!: string;
    @attr('string') status!: string;

    @hasMany('sample') samples!: Sample
    @hasOne('registration') registration!: Registration;
}
