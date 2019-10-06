/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type characterHomeworldQueryVariables = {
    readonly cursor?: string | null;
};
export type characterHomeworldQueryResponse = {
    readonly allPlanets: {
        readonly planets: ReadonlyArray<{
            readonly id: string;
            readonly name: string | null;
            readonly terrains: ReadonlyArray<string | null> | null;
            readonly climates: ReadonlyArray<string | null> | null;
            readonly residentConnection: {
                readonly residents: ReadonlyArray<{
                    readonly gender: string | null;
                    readonly name: string | null;
                    readonly species: {
                        readonly name: string | null;
                    } | null;
                } | null> | null;
            } | null;
            readonly filmConnection: {
                readonly films: ReadonlyArray<{
                    readonly title: string | null;
                } | null> | null;
            } | null;
        } | null> | null;
        readonly pageInfo: {
            readonly endCursor: string | null;
        };
    } | null;
};
export type characterHomeworldQuery = {
    readonly response: characterHomeworldQueryResponse;
    readonly variables: characterHomeworldQueryVariables;
};



/*
query characterHomeworldQuery(
  $cursor: String
) {
  allPlanets(first: 5, after: $cursor) {
    planets {
      id
      name
      terrains
      climates
      residentConnection(first: 1) {
        residents {
          gender
          name
          species {
            name
            id
          }
          id
        }
      }
      filmConnection {
        films {
          title
          id
        }
      }
    }
    pageInfo {
      endCursor
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "terrains",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "climates",
  "args": null,
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "gender",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "characterHomeworldQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allPlanets",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "PlanetsConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "planets",
            "storageKey": null,
            "args": null,
            "concreteType": "Planet",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "residentConnection",
                "storageKey": "residentConnection(first:1)",
                "args": (v6/*: any*/),
                "concreteType": "PlanetResidentsConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "residents",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Person",
                    "plural": true,
                    "selections": [
                      (v7/*: any*/),
                      (v3/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "species",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Species",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "filmConnection",
                "storageKey": null,
                "args": null,
                "concreteType": "PlanetFilmsConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "films",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Film",
                    "plural": true,
                    "selections": [
                      (v8/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v9/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "characterHomeworldQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allPlanets",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "PlanetsConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "planets",
            "storageKey": null,
            "args": null,
            "concreteType": "Planet",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "residentConnection",
                "storageKey": "residentConnection(first:1)",
                "args": (v6/*: any*/),
                "concreteType": "PlanetResidentsConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "residents",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Person",
                    "plural": true,
                    "selections": [
                      (v7/*: any*/),
                      (v3/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "species",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Species",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          (v2/*: any*/)
                        ]
                      },
                      (v2/*: any*/)
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "filmConnection",
                "storageKey": null,
                "args": null,
                "concreteType": "PlanetFilmsConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "films",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Film",
                    "plural": true,
                    "selections": [
                      (v8/*: any*/),
                      (v2/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v9/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "characterHomeworldQuery",
    "id": null,
    "text": "query characterHomeworldQuery(\n  $cursor: String\n) {\n  allPlanets(first: 5, after: $cursor) {\n    planets {\n      id\n      name\n      terrains\n      climates\n      residentConnection(first: 1) {\n        residents {\n          gender\n          name\n          species {\n            name\n            id\n          }\n          id\n        }\n      }\n      filmConnection {\n        films {\n          title\n          id\n        }\n      }\n    }\n    pageInfo {\n      endCursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '77d22f5af09290254cd28d5444f7a75f';
export default node;
