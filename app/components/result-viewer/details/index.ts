import Component from '@glimmer/component';
import Sample from 'drug-report/data-models/sample';

interface ResultViewerDetailsArgs {
    details: Sample
}
export default class ResultViewerDetailsComponent extends Component<ResultViewerDetailsArgs> {
    columns = [{
        name: "DRUG CLASS",
        value: "drug_class"
    }, 
{
    name: 'DRUG',
    value: 'drugs',
},
{
    name: 'CALL',
    value: 'drugs',
},{
name: 'MUTATIONS',
value: 'mutations'}]
get rows(){
    if (this.args.details)
    return this.args.details.drug_call_result.drug_calls.map((row: {drug_class: string, drugs: Array<any>, mutations: Array<string>}) => { return {drug_class: row.drug_class, mutations: row.mutations, drugs: row.drugs}})
else return []}
}

