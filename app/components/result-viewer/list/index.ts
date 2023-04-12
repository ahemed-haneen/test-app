import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Sample from 'drug-report/data-models/sample';

export default class ResultViewerListComponent extends Component {
    @tracked selectedSample!: Sample;
    
    @action
    selectSample(sample: Sample){
        this.selectedSample = sample
    }
}
