export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

    this.get('/jobs/001', function(_schema, _request){
      return {
        "data": {
        "id": "001",
        "type": "job",
        "attributes": {
          "name": "HIV Results",
          "inserted_at": "2023-02-12T08:41:15.000Z",
          "status": "completed"
        },
        "relationships": {
          "samples": {
            "data": [
              {
                "type": "sample",
                "id": "001"
              },
              {
                "type": "sample",
                "id": "002"
              },
              {
                "type": "sample",
                "id": "003"
              },
              {
                "type": "sample",
                "id": "004"
              },
              {
                "type": "sample",
                "id": "005"
              },
              {
                "type": "sample",
                "id": "006"
              },
              {
                "type": "sample",
                "id": "007"
              },
              {
                "type": "sample",
                "id": "008"
              },
              {
                "type": "sample",
                "id": "009"
              },
              {
                "type": "sample",
                "id": "010"
              },
              {
                "type": "sample",
                "id": "011"
              },
              {
                "type": "sample",
                "id": "012"
              },
              {
                "type": "sample",
                "id": "013"
              },
              {
                "type": "sample",
                "id": "014"
              },
              {
                "type": "sample",
                "id": "015"
              },
              {
                "type": "sample",
                "id": "016"
              },
              {
                "type": "sample",
                "id": "017"
              },
              {
                "type": "sample",
                "id": "018"
              },
              {
                "type": "sample",
                "id": "019"
              },
              {
                "type": "sample",
                "id": "020"
              },
              {
                "type": "sample",
                "id": "021"
              },
              {
                "type": "sample",
                "id": "022"
              },
              {
                "type": "sample",
                "id": "023"
              },
              {
                "type": "sample",
                "id": "024"
              },
              {
                "type": "sample",
                "id": "025"
              },
              {
                "type": "sample",
                "id": "026"
              },
              {
                "type": "sample",
                "id": "027"
              },
              {
                "type": "sample",
                "id": "028"
              },
              {
                "type": "sample",
                "id": "029"
              },
              {
                "type": "sample",
                "id": "030"
              },
              {
                "type": "sample",
                "id": "031"
              },
              {
                "type": "sample",
                "id": "032"
              },
              {
                "type": "sample",
                "id": "033"
              },
              {
                "type": "sample",
                "id": "034"
              },
              {
                "type": "sample",
                "id": "035"
              },
              {
                "type": "sample",
                "id": "036"
              },
              {
                "type": "sample",
                "id": "037"
              },
              {
                "type": "sample",
                "id": "038"
              },
              {
                "type": "sample",
                "id": "039"
              },
              {
                "type": "sample",
                "id": "040"
              },
              {
                "type": "sample",
                "id": "041"
              },
              {
                "type": "sample",
                "id": "042"
              },
              {
                "type": "sample",
                "id": "043"
              },
              {
                "type": "sample",
                "id": "044"
              },
              {
                "type": "sample",
                "id": "045"
              },
              {
                "type": "sample",
                "id": "046"
              },
              {
                "type": "sample",
                "id": "047"
              },
              {
                "type": "sample",
                "id": "048"
              },
              {
                "type": "sample",
                "id": "049"
              },
              {
                "type": "sample",
                "id": "050"
              }
            ]
          },
          "assayversion": {
            "data": null
          },
          "registration": {
            "data": {
              "type": "registration",
              "id": "649003"
            }
          }
        }
      },
      "included": [
        {
          "id": "001",
          "type": "sample",
          "attributes": {
            "name": "Sample 001",
            "inserted_at": "2023-02-12T08:46:23.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "001"
              }
            }
          }
        },
        {
          "id": "002",
          "type": "sample",
          "attributes": {
            "name": "Sample 002",
            "inserted_at": "2023-02-12T08:58:15.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "002"
              }
            }
          }
        },
        {
          "id": "003",
          "type": "sample",
          "attributes": {
            "name": "Sample 003",
            "inserted_at": "2023-02-12T09:07:12.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "003"
              }
            }
          }
        },
        {
          "id": "004",
          "type": "sample",
          "attributes": {
            "name": "Sample 004",
            "inserted_at": "2023-02-12T09:06:03.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "004"
              }
            }
          }
        },
        {
          "id": "005",
          "type": "sample",
          "attributes": {
            "name": "Sample 005",
            "inserted_at": "2023-02-12T09:26:20.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "005"
              }
            }
          }
        },
        {
          "id": "006",
          "type": "sample",
          "attributes": {
            "name": "Sample 006",
            "inserted_at": "2023-02-12T09:19:57.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "006"
              }
            }
          }
        },
        {
          "id": "007",
          "type": "sample",
          "attributes": {
            "name": "Sample 007",
            "inserted_at": "2023-02-12T09:34:48.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "007"
              }
            }
          }
        },
        {
          "id": "008",
          "type": "sample",
          "attributes": {
            "name": "Sample 008",
            "inserted_at": "2023-02-12T09:44:11.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "008"
              }
            }
          }
        },
        {
          "id": "009",
          "type": "sample",
          "attributes": {
            "name": "Sample 009",
            "inserted_at": "2023-02-12T09:31:12.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "009"
              }
            }
          }
        },
        {
          "id": "010",
          "type": "sample",
          "attributes": {
            "name": "Sample 010",
            "inserted_at": "2023-02-12T09:42:25.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "010"
              }
            }
          }
        },
        {
          "id": "011",
          "type": "sample",
          "attributes": {
            "name": "Sample 011",
            "inserted_at": "2023-02-12T10:23:44.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "011"
              }
            }
          }
        },
        {
          "id": "012",
          "type": "sample",
          "attributes": {
            "name": "Sample 012",
            "inserted_at": "2023-02-12T10:15:39.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "012"
              }
            }
          }
        },
        {
          "id": "013",
          "type": "sample",
          "attributes": {
            "name": "Sample 013",
            "inserted_at": "2023-02-12T10:19:11.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "013"
              }
            }
          }
        },
        {
          "id": "014",
          "type": "sample",
          "attributes": {
            "name": "Sample 014",
            "inserted_at": "2023-02-12T10:30:55.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "014"
              }
            }
          }
        },
        {
          "id": "015",
          "type": "sample",
          "attributes": {
            "name": "Sample 015",
            "inserted_at": "2023-02-12T09:57:30.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "015"
              }
            }
          }
        },
        {
          "id": "016",
          "type": "sample",
          "attributes": {
            "name": "Sample 016",
            "inserted_at": "2023-02-12T11:10:51.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "016"
              }
            }
          }
        },
        {
          "id": "017",
          "type": "sample",
          "attributes": {
            "name": "Sample 017",
            "inserted_at": "2023-02-12T10:42:48.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "017"
              }
            }
          }
        },
        {
          "id": "018",
          "type": "sample",
          "attributes": {
            "name": "Sample 018",
            "inserted_at": "2023-02-12T10:13:03.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "018"
              }
            }
          }
        },
        {
          "id": "019",
          "type": "sample",
          "attributes": {
            "name": "Sample 019",
            "inserted_at": "2023-02-12T10:41:35.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "019"
              }
            }
          }
        },
        {
          "id": "020",
          "type": "sample",
          "attributes": {
            "name": "Sample 020",
            "inserted_at": "2023-02-12T11:57:35.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "020"
              }
            }
          }
        },
        {
          "id": "021",
          "type": "sample",
          "attributes": {
            "name": "Sample 021",
            "inserted_at": "2023-02-12T11:34:30.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "021"
              }
            }
          }
        },
        {
          "id": "022",
          "type": "sample",
          "attributes": {
            "name": "Sample 022",
            "inserted_at": "2023-02-12T10:40:47.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "022"
              }
            }
          }
        },
        {
          "id": "023",
          "type": "sample",
          "attributes": {
            "name": "Sample 023",
            "inserted_at": "2023-02-12T12:22:03.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "023"
              }
            }
          }
        },
        {
          "id": "024",
          "type": "sample",
          "attributes": {
            "name": "Sample 024",
            "inserted_at": "2023-02-12T11:03:15.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "024"
              }
            }
          }
        },
        {
          "id": "025",
          "type": "sample",
          "attributes": {
            "name": "Sample 025",
            "inserted_at": "2023-02-12T11:49:10.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "025"
              }
            }
          }
        },
        {
          "id": "026",
          "type": "sample",
          "attributes": {
            "name": "Sample 026",
            "inserted_at": "2023-02-12T11:08:09.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "026"
              }
            }
          }
        },
        {
          "id": "027",
          "type": "sample",
          "attributes": {
            "name": "Sample 027",
            "inserted_at": "2023-02-12T12:00:36.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "027"
              }
            }
          }
        },
        {
          "id": "028",
          "type": "sample",
          "attributes": {
            "name": "Sample 028",
            "inserted_at": "2023-02-12T12:14:03.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "028"
              }
            }
          }
        },
        {
          "id": "029",
          "type": "sample",
          "attributes": {
            "name": "Sample 029",
            "inserted_at": "2023-02-12T12:05:42.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "029"
              }
            }
          }
        },
        {
          "id": "030",
          "type": "sample",
          "attributes": {
            "name": "Sample 030",
            "inserted_at": "2023-02-12T11:53:15.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "030"
              }
            }
          }
        },
        {
          "id": "031",
          "type": "sample",
          "attributes": {
            "name": "Sample 031",
            "inserted_at": "2023-02-12T11:36:24.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "031"
              }
            }
          }
        },
        {
          "id": "032",
          "type": "sample",
          "attributes": {
            "name": "Sample 032",
            "inserted_at": "2023-02-12T12:30:03.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "032"
              }
            }
          }
        },
        {
          "id": "033",
          "type": "sample",
          "attributes": {
            "name": "Sample 033",
            "inserted_at": "2023-02-12T14:05:12.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "033"
              }
            }
          }
        },
        {
          "id": "034",
          "type": "sample",
          "attributes": {
            "name": "Sample 034",
            "inserted_at": "2023-02-12T13:27:59.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "034"
              }
            }
          }
        },
        {
          "id": "035",
          "type": "sample",
          "attributes": {
            "name": "Sample 035",
            "inserted_at": "2023-02-12T13:38:45.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "035"
              }
            }
          }
        },
        {
          "id": "036",
          "type": "sample",
          "attributes": {
            "name": "Sample 036",
            "inserted_at": "2023-02-12T13:14:15.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "036"
              }
            }
          }
        },
        {
          "id": "037",
          "type": "sample",
          "attributes": {
            "name": "Sample 037",
            "inserted_at": "2023-02-12T12:56:33.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "037"
              }
            }
          }
        },
        {
          "id": "038",
          "type": "sample",
          "attributes": {
            "name": "Sample 038",
            "inserted_at": "2023-02-12T13:54:07.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "038"
              }
            }
          }
        },
        {
          "id": "039",
          "type": "sample",
          "attributes": {
            "name": "Sample 039",
            "inserted_at": "2023-02-12T14:30:57.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "039"
              }
            }
          }
        },
        {
          "id": "040",
          "type": "sample",
          "attributes": {
            "name": "Sample 040",
            "inserted_at": "2023-02-12T15:00:35.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "040"
              }
            }
          }
        },
        {
          "id": "041",
          "type": "sample",
          "attributes": {
            "name": "Sample 041",
            "inserted_at": "2023-02-12T14:34:32.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "041"
              }
            }
          }
        },
        {
          "id": "042",
          "type": "sample",
          "attributes": {
            "name": "Sample 042",
            "inserted_at": "2023-02-12T14:53:39.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "042"
              }
            }
          }
        },
        {
          "id": "043",
          "type": "sample",
          "attributes": {
            "name": "Sample 043",
            "inserted_at": "2023-02-12T14:24:32.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "043"
              }
            }
          }
        },
        {
          "id": "044",
          "type": "sample",
          "attributes": {
            "name": "Sample 044",
            "inserted_at": "2023-02-12T15:52:27.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "044"
              }
            }
          }
        },
        {
          "id": "045",
          "type": "sample",
          "attributes": {
            "name": "Sample 045",
            "inserted_at": "2023-02-12T13:09:00.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "045"
              }
            }
          }
        },
        {
          "id": "046",
          "type": "sample",
          "attributes": {
            "name": "Sample 046",
            "inserted_at": "2023-02-12T15:22:13.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "046"
              }
            }
          }
        },
        {
          "id": "047",
          "type": "sample",
          "attributes": {
            "name": "Sample 047",
            "inserted_at": "2023-02-12T12:40:57.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "047"
              }
            }
          }
        },
        {
          "id": "048",
          "type": "sample",
          "attributes": {
            "name": "Sample 048",
            "inserted_at": "2023-02-12T16:18:51.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "048"
              }
            }
          }
        },
        {
          "id": "049",
          "type": "sample",
          "attributes": {
            "name": "Sample 049",
            "inserted_at": "2023-02-12T13:24:38.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "049"
              }
            }
          }
        },
        {
          "id": "050",
          "type": "sample",
          "attributes": {
            "name": "Sample 050",
            "inserted_at": "2023-02-12T16:51:15.000Z",
            "status": "completed"
          },
          "relationships": {
            "drug_call_result": {
              "data": {
                "type": "drugCallResult",
                "id": "050"
              }
            }
          }
        },
        {
          "id": "001",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RAL"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  }
                ],
                "mutations": [
                  "[RT] 317T",
                  "[RT] 936L",
                  "[RT] 198F"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 245W",
                  "[RT] 56R",
                  "[RT] 412N",
                  "[RT] 461G",
                  "[RT] 962M",
                  "[RT] 503H"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 431D",
                  "[RT] 958H"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "002",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 219P",
                  "[RT] 925G",
                  "[RT] 611K",
                  "[RT] 135K",
                  "[RT] 771G",
                  "[RT] 980S",
                  "[RT] 176H"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 170H",
                  "[RT] 966H"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 444R",
                  "[RT] 374A",
                  "[RT] 425R",
                  "[RT] 87G"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "003",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 631Q",
                  "[RT] 6K",
                  "[RT] 232G"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 213F",
                  "[RT] 730Y",
                  "[RT] 793V",
                  "[RT] 290G",
                  "[RT] 97M",
                  "[RT] 692K"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 411H",
                  "[RT] 953V",
                  "[RT] 151E",
                  "[RT] 194Y",
                  "[RT] 53D"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "004",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 798A",
                  "[RT] 268D",
                  "[RT] 860Q",
                  "[RT] 312G",
                  "[RT] 395T",
                  "[RT] 890D"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 367C",
                  "[RT] 657N",
                  "[RT] 354P",
                  "[RT] 682T",
                  "[RT] 127P",
                  "[RT] 285M",
                  "[RT] 325S"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 699E",
                  "[RT] 525C",
                  "[RT] 452C",
                  "[RT] 887T",
                  "[RT] 64W",
                  "[RT] 551L",
                  "[RT] 65V"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "005",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 328R",
                  "[RT] 731W",
                  "[RT] 275I",
                  "[RT] 984H",
                  "[RT] 490I"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "006",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 802K",
                  "[RT] 272K",
                  "[RT] 250P",
                  "[RT] 909Q",
                  "[RT] 285V",
                  "[RT] 33Y"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 984M",
                  "[RT] 28S",
                  "[RT] 166C",
                  "[RT] 279Q",
                  "[RT] 461A",
                  "[RT] 850A"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": []
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "007",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 700F",
                  "[RT] 381F",
                  "[RT] 208K",
                  "[RT] 248A"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 945Q",
                  "[RT] 296L",
                  "[RT] 246I",
                  "[RT] 454Y",
                  "[RT] 405D"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 617S",
                  "[RT] 815W",
                  "[RT] 176M",
                  "[RT] 119K",
                  "[RT] 554G"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 38G",
                  "[RT] 708W",
                  "[RT] 718W"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "008",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 933C",
                  "[RT] 826W",
                  "[RT] 477I",
                  "[RT] 668L"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 988W",
                  "[RT] 684N"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 249R",
                  "[RT] 714M",
                  "[RT] 487W"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 239N",
                  "[RT] 923A",
                  "[RT] 152K",
                  "[RT] 672P",
                  "[RT] 596L",
                  "[RT] 525E",
                  "[RT] 494W"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "009",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 818P",
                  "[RT] 294Y",
                  "[RT] 352Y",
                  "[RT] 474E",
                  "[RT] 867A",
                  "[RT] 741L"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 537L",
                  "[RT] 902Y",
                  "[RT] 273K",
                  "[RT] 390W"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": []
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "010",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 237K",
                  "[RT] 774F",
                  "[RT] 860M",
                  "[RT] 193Y",
                  "[RT] 955F"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 431K",
                  "[RT] 822C",
                  "[RT] 466V",
                  "[RT] 647Y",
                  "[RT] 327R",
                  "[RT] 34P",
                  "[RT] 353N"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 310T",
                  "[RT] 573R",
                  "[RT] 582S"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "011",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 78K",
                  "[RT] 550M",
                  "[RT] 907M",
                  "[RT] 592D"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 310S",
                  "[RT] 577K",
                  "[RT] 489W"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 193L",
                  "[RT] 551Q",
                  "[RT] 260A",
                  "[RT] 953Q",
                  "[RT] 800P"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 959W",
                  "[RT] 669W",
                  "[RT] 4R",
                  "[RT] 770H"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "012",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 833N",
                  "[RT] 71C",
                  "[RT] 194E"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "013",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 196N",
                  "[RT] 211N",
                  "[RT] 881R",
                  "[RT] 296R"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 132F",
                  "[RT] 281W",
                  "[RT] 800W",
                  "[RT] 213D",
                  "[RT] 523C",
                  "[RT] 882H"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 505P",
                  "[RT] 773S"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "014",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 991R",
                  "[RT] 623A",
                  "[RT] 751G",
                  "[RT] 383K",
                  "[RT] 504S",
                  "[RT] 57R",
                  "[RT] 562V"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 685L",
                  "[RT] 916P",
                  "[RT] 323P",
                  "[RT] 626T",
                  "[RT] 158M",
                  "[RT] 458N"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 659A",
                  "[RT] 848M"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": []
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "015",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 906Y",
                  "[RT] 839M",
                  "[RT] 695K",
                  "[RT] 110V",
                  "[RT] 908R",
                  "[RT] 673S"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 245V",
                  "[RT] 214E",
                  "[RT] 619L",
                  "[RT] 603T",
                  "[RT] 174D"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 63A",
                  "[RT] 178T"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "016",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 471S",
                  "[RT] 449E",
                  "[RT] 871K"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 692H",
                  "[RT] 514K",
                  "[RT] 802R",
                  "[RT] 713Q",
                  "[RT] 7D"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 47N",
                  "[RT] 127M",
                  "[RT] 409W",
                  "[RT] 542I",
                  "[RT] 341V"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 71Y",
                  "[RT] 37M",
                  "[RT] 63E",
                  "[RT] 698T",
                  "[RT] 892M",
                  "[RT] 673G"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "017",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 490L",
                  "[RT] 760I",
                  "[RT] 583C"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 461C",
                  "[RT] 485M",
                  "[RT] 482Q",
                  "[RT] 185H",
                  "[RT] 102H"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 909F",
                  "[RT] 387V"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "018",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 963W",
                  "[RT] 25R"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 505V",
                  "[RT] 656D",
                  "[RT] 409H"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 507Y",
                  "[RT] 90M",
                  "[RT] 526W",
                  "[RT] 649M"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "019",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 356S",
                  "[RT] 216T",
                  "[RT] 519I",
                  "[RT] 609F",
                  "[RT] 638H",
                  "[RT] 716H",
                  "[RT] 514N"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 34L",
                  "[RT] 975R",
                  "[RT] 640N",
                  "[RT] 193W",
                  "[RT] 38I"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 103N",
                  "[RT] 720F",
                  "[RT] 155T",
                  "[RT] 601P"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 524E",
                  "[RT] 804W",
                  "[RT] 888V",
                  "[RT] 529Q",
                  "[RT] 792D"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "020",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 902V",
                  "[RT] 816I",
                  "[RT] 669R",
                  "[RT] 216N",
                  "[RT] 562Q",
                  "[RT] 742K"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 355H",
                  "[RT] 723T",
                  "[RT] 810N",
                  "[RT] 963P",
                  "[RT] 893T",
                  "[RT] 962W"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 696A",
                  "[RT] 442R",
                  "[RT] 559S",
                  "[RT] 429C",
                  "[RT] 311T",
                  "[RT] 307E",
                  "[RT] 140H"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 965W",
                  "[RT] 26K",
                  "[RT] 691E",
                  "[RT] 513E",
                  "[RT] 994Y",
                  "[RT] 525L",
                  "[RT] 307D"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "021",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 198R",
                  "[RT] 971D",
                  "[RT] 328S",
                  "[RT] 231H",
                  "[RT] 968M",
                  "[RT] 719D"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 389D",
                  "[RT] 617Q",
                  "[RT] 878I",
                  "[RT] 686G",
                  "[RT] 286V",
                  "[RT] 297L",
                  "[RT] 976F"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 158V",
                  "[RT] 898K",
                  "[RT] 111S"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": []
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "022",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 250H",
                  "[RT] 504H"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 484F",
                  "[RT] 599G",
                  "[RT] 377H",
                  "[RT] 84P"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 236P",
                  "[RT] 638L",
                  "[RT] 758H"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "023",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 116L",
                  "[RT] 888W",
                  "[RT] 84A",
                  "[RT] 659E"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 589L",
                  "[RT] 143G",
                  "[RT] 470A",
                  "[RT] 542V",
                  "[RT] 317E"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 10G",
                  "[RT] 429F",
                  "[RT] 522V",
                  "[RT] 865N",
                  "[RT] 534H",
                  "[RT] 917A",
                  "[RT] 891Y"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "024",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 407A",
                  "[RT] 938A",
                  "[RT] 669N",
                  "[RT] 876R",
                  "[RT] 305Y"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 727D",
                  "[RT] 487L",
                  "[RT] 867C",
                  "[RT] 144M",
                  "[RT] 905F"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 281D",
                  "[RT] 734G",
                  "[RT] 790V",
                  "[RT] 959W",
                  "[RT] 268N",
                  "[RT] 498I"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": []
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "025",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 393H",
                  "[RT] 782C",
                  "[RT] 152D",
                  "[RT] 242E",
                  "[RT] 523G"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 83M",
                  "[RT] 655H",
                  "[RT] 254R"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 881H",
                  "[RT] 809G"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "026",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 141D",
                  "[RT] 289A",
                  "[RT] 527I",
                  "[RT] 899G",
                  "[RT] 274L",
                  "[RT] 591P",
                  "[RT] 376G"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 214F",
                  "[RT] 853E",
                  "[RT] 98I",
                  "[RT] 689W",
                  "[RT] 550H"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "027",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 357L",
                  "[RT] 982R",
                  "[RT] 364C"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 349P",
                  "[RT] 106R",
                  "[RT] 772I",
                  "[RT] 964T",
                  "[RT] 406V",
                  "[RT] 1R",
                  "[RT] 413G"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 893I",
                  "[RT] 279N",
                  "[RT] 886K",
                  "[RT] 166Y"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 850K",
                  "[RT] 494H",
                  "[RT] 649Y",
                  "[RT] 178P",
                  "[RT] 589W",
                  "[RT] 367Q",
                  "[RT] 551Y"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "028",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 597I",
                  "[RT] 480Q",
                  "[RT] 617I",
                  "[RT] 913P"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 810R",
                  "[RT] 968P",
                  "[RT] 932S"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 962M",
                  "[RT] 282M"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 714T",
                  "[RT] 489N",
                  "[RT] 480N",
                  "[RT] 462N"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "029",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 551L",
                  "[RT] 898E",
                  "[RT] 728L",
                  "[RT] 166V",
                  "[RT] 368S"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 276T",
                  "[RT] 92T"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": []
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "030",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 562L",
                  "[RT] 304M",
                  "[RT] 916K",
                  "[RT] 159G"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 468V",
                  "[RT] 427T",
                  "[RT] 389P",
                  "[RT] 603V",
                  "[RT] 140T"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 507H",
                  "[RT] 489D",
                  "[RT] 496G",
                  "[RT] 940T",
                  "[RT] 8I"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 735S",
                  "[RT] 138V",
                  "[RT] 540N",
                  "[RT] 823W",
                  "[RT] 981P",
                  "[RT] 629T",
                  "[RT] 443F"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "031",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 683V",
                  "[RT] 965D"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 231L",
                  "[RT] 357K",
                  "[RT] 602M",
                  "[RT] 29M"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 996G",
                  "[RT] 538I",
                  "[RT] 401Y",
                  "[RT] 821Y",
                  "[RT] 813S",
                  "[RT] 471A",
                  "[RT] 395W"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 608H",
                  "[RT] 541T",
                  "[RT] 446L"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "032",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 197M",
                  "[RT] 880W"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 723Y",
                  "[RT] 587L",
                  "[RT] 286F",
                  "[RT] 34V",
                  "[RT] 155C",
                  "[RT] 604I",
                  "[RT] 313D"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "033",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 769P",
                  "[RT] 116L",
                  "[RT] 475I",
                  "[RT] 345F",
                  "[RT] 205E",
                  "[RT] 678Q",
                  "[RT] 154L"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 25M",
                  "[RT] 887I",
                  "[RT] 105W",
                  "[RT] 144C",
                  "[RT] 12N",
                  "[RT] 151D",
                  "[RT] 653A"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 433P",
                  "[RT] 339E",
                  "[RT] 302L"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "034",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 220H",
                  "[RT] 424Q",
                  "[RT] 262K",
                  "[RT] 784N",
                  "[RT] 661V",
                  "[RT] 102W",
                  "[RT] 417M"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 897E",
                  "[RT] 556Q",
                  "[RT] 827N",
                  "[RT] 29Q",
                  "[RT] 296W"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "035",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 732C",
                  "[RT] 731S"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 245R",
                  "[RT] 839C",
                  "[RT] 67T",
                  "[RT] 694R"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 38Q",
                  "[RT] 516M",
                  "[RT] 921M",
                  "[RT] 239M",
                  "[RT] 873V"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": []
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "036",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 507L",
                  "[RT] 706K",
                  "[RT] 334F",
                  "[RT] 486F",
                  "[RT] 351K",
                  "[RT] 484P",
                  "[RT] 546V"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 957V",
                  "[RT] 657L",
                  "[RT] 441E",
                  "[RT] 487H"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 420I",
                  "[RT] 984D",
                  "[RT] 269S",
                  "[RT] 229M",
                  "[RT] 727R"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "037",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 274K",
                  "[RT] 14Y",
                  "[RT] 45M",
                  "[RT] 601A"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 269E",
                  "[RT] 636W",
                  "[RT] 89S"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 632P",
                  "[RT] 549V",
                  "[RT] 449F",
                  "[RT] 765Y",
                  "[RT] 213Q"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "038",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 689D",
                  "[RT] 784Y",
                  "[RT] 179V"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 444A",
                  "[RT] 393W",
                  "[RT] 67H",
                  "[RT] 178P",
                  "[RT] 948H",
                  "[RT] 755G",
                  "[RT] 861S"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 461Q",
                  "[RT] 582P",
                  "[RT] 775M"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "039",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 31I",
                  "[RT] 894I",
                  "[RT] 361G",
                  "[RT] 44S",
                  "[RT] 564A",
                  "[RT] 579E",
                  "[RT] 84L"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 448V",
                  "[RT] 573V",
                  "[RT] 363P",
                  "[RT] 930Y",
                  "[RT] 442Y",
                  "[RT] 977N"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 712S",
                  "[RT] 228L",
                  "[RT] 750E",
                  "[RT] 515P",
                  "[RT] 566F",
                  "[RT] 840R",
                  "[RT] 220P"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 961V",
                  "[RT] 947T",
                  "[RT] 549E",
                  "[RT] 818M"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "040",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 810R",
                  "[RT] 464N",
                  "[RT] 704P",
                  "[RT] 203D"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 690L",
                  "[RT] 478W",
                  "[RT] 60L",
                  "[RT] 411I"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 619P",
                  "[RT] 595W",
                  "[RT] 940F",
                  "[RT] 570I",
                  "[RT] 75T"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "041",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 558L",
                  "[RT] 437Q",
                  "[RT] 816L",
                  "[RT] 331H",
                  "[RT] 246E"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": []
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "042",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 506R",
                  "[RT] 883Y"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 887L",
                  "[RT] 209V",
                  "[RT] 551Y"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 459D",
                  "[RT] 23S",
                  "[RT] 827C",
                  "[RT] 441P"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "043",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 297R",
                  "[RT] 183S",
                  "[RT] 732G"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 120R",
                  "[RT] 360M",
                  "[RT] 188M",
                  "[RT] 487N",
                  "[RT] 216A",
                  "[RT] 455G",
                  "[RT] 511P"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 862N",
                  "[RT] 103W",
                  "[RT] 500V",
                  "[RT] 509W",
                  "[RT] 313N",
                  "[RT] 57H",
                  "[RT] 557H"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 982F",
                  "[RT] 203D",
                  "[RT] 829I",
                  "[RT] 506T",
                  "[RT] 93I"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "044",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 165D",
                  "[RT] 298F",
                  "[RT] 52P",
                  "[RT] 54L",
                  "[RT] 14M",
                  "[RT] 133H"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 806T",
                  "[RT] 142A",
                  "[RT] 511N",
                  "[RT] 503N",
                  "[RT] 260V"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "045",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 635P",
                  "[RT] 819L"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 913P",
                  "[RT] 641P",
                  "[RT] 638V",
                  "[RT] 738P"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 828I",
                  "[RT] 909F",
                  "[RT] 628V",
                  "[RT] 328L",
                  "[RT] 933S"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 963G",
                  "[RT] 557C",
                  "[RT] 214I",
                  "[RT] 136R"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "046",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 999Q",
                  "[RT] 216Y",
                  "[RT] 512I"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 432F",
                  "[RT] 105L",
                  "[RT] 804H",
                  "[RT] 340A",
                  "[RT] 528D",
                  "[RT] 255L"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 641T",
                  "[RT] 391N",
                  "[RT] 519E"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "047",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 929K",
                  "[RT] 82A",
                  "[RT] 669M",
                  "[RT] 213D"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "I",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 41F",
                  "[RT] 327D",
                  "[RT] 88S",
                  "[RT] 976H",
                  "[RT] 959Q",
                  "[RT] 686I"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "048",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 843K",
                  "[RT] 524G",
                  "[RT] 296Y",
                  "[RT] 454E",
                  "[RT] 279N",
                  "[RT] 36P"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 697D",
                  "[RT] 650N",
                  "[RT] 435C",
                  "[RT] 328C",
                  "[RT] 724F",
                  "[RT] 695A",
                  "[RT] 447A"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": []
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "049",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 324N",
                  "[RT] 352I",
                  "[RT] 590T",
                  "[RT] 894Y",
                  "[RT] 914D",
                  "[RT] 614M",
                  "[RT] 844Y"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": []
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 521I",
                  "[RT] 737R",
                  "[RT] 119G",
                  "[RT] 120A",
                  "[RT] 288Y",
                  "[RT] 295S",
                  "[RT] 697G"
                ]
              }
            ]
          },
          "relationships": {}
        },
        {
          "id": "050",
          "type": "drugCallResult",
          "attributes": {
            "drug_calls": [
              {
                "drug_class": "INSTI",
                "drugs": [
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "BIC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "CAB"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "DTG"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EVG"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RAL"
                  }
                ],
                "mutations": [
                  "[RT] 293C",
                  "[RT] 131E"
                ]
              },
              {
                "drug_class": "NNRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DOR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "EFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ETR"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "NVP"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "RPV"
                  }
                ],
                "mutations": [
                  "[RT] 424D",
                  "[RT] 464W",
                  "[RT] 970D",
                  "[RT] 84F",
                  "[RT] 819F",
                  "[RT] 334T",
                  "[RT] 987A"
                ]
              },
              {
                "drug_class": "NRTI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "3TC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ABC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "AZT"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "D4T"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DDI"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FTC"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "TDF"
                  }
                ],
                "mutations": [
                  "[RT] 112M",
                  "[RT] 982N",
                  "[RT] 234W",
                  "[RT] 182R",
                  "[RT] 299M",
                  "[RT] 179Q"
                ]
              },
              {
                "drug_class": "PI",
                "drugs": [
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "ATV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "DRV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "FPV/r"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "IDV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "LPV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "NFV"
                  },
                  {
                    "call": "S",
                    "score": 0,
                    "short_name": "SQV/r"
                  },
                  {
                    "call": "R",
                    "score": 0,
                    "short_name": "TPV/r"
                  }
                ],
                "mutations": [
                  "[RT] 670K",
                  "[RT] 551W",
                  "[RT] 406P"
                ]
              }
            ]
          },
          "relationships": {}
        }
      ]
    }
  })
}
