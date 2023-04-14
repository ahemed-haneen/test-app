import Component from "@glimmer/component";
import Sample from "drug-report/data-models/sample";
import { action } from "@ember/object";
import { debounce } from "@ember/runloop";

interface ResultViewerDetailsArgs {
  details: Sample;
}

export default class ResultViewerDetailsComponent extends Component<ResultViewerDetailsArgs> {
  columns = [
    {
      name: "DRUG CLASS",
      valuePath: "drug_class",
      minWidth: 250,
      maxWidth: 800,
    },
    {
      name: "DRUG",
      valuePath: "drugs",
      maxWidth: 90,
    },
    {
      name: "CALL",
      valuePath: "drugs",
      maxWidth: 90,
    },
    {
      name: "MUTATIONS",
      valuePath: "mutations",
      minWidth: 400,
      maxWidth: 800,
    },
  ];

  get rows() {
    if (this.args.details)
      return this.args.details.drug_call_result.drug_calls.map(
        (row: {
          drug_class: string;
          drugs: Array<any>;
          mutations: Array<string>;
        }) => {
          return {
            drug_class: row.drug_class,
            mutations: row.mutations.join(", "),
            drugs: row.drugs,
          };
        }
      );
    else return [];
  }

  @action
  didInsert() {
    window.addEventListener("resize", this.updateListHeight);

    this.updateListHeight();
  }

  @action
  updateListHeight() {
    debounce(this, this.setListHeight, 200);
  }

  @action
  setListHeight() {
    let reportElement = document.querySelector(
      "#reports-container"
    ) as HTMLElement;
    let sampleList = document.querySelector("#sample-list") as HTMLElement;
    sampleList.style.height = reportElement?.offsetHeight.toString() + "px";
  }
}
