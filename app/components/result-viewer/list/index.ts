import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Sample from 'drug-report/data-models/sample';

interface ResultViewerListArgs {
samples: Array<Sample>
}

let timeoutId!: any;

export default class ResultViewerListComponent extends Component<ResultViewerListArgs> {
    @tracked selectedSample!: Sample;
    @tracked searchInput = ""

    @tracked filteredSamples = this.args.samples;
    @tracked isSearchOpen = false;


    @action
    selectSample(sample: Sample){
        this.selectedSample = sample
    }

    @action
    toggleSearch(){
        this.isSearchOpen = !this.isSearchOpen;
        this.filteredSamples = this.args.samples
    }

    @action 
    searchList(e: { target: { value: string } }){
        clearTimeout(timeoutId)

        timeoutId = setTimeout(function(this: any) {
            this.handleSearch(e.target.value) ;
        }.bind(this), 400)
    }

    handleSearch(this: any, searchKey: string){
        this.filteredSamples = this.args.samples.filter((sample: Sample) => sample.name.toLowerCase().includes(searchKey.toLowerCase()))
    }
}

