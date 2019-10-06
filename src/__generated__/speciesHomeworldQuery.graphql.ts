/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type speciesHomeworldQueryVariables = {
    readonly cursor?: string | null;
};
export type speciesHomeworldQueryResponse = {
    readonly allSpecies: {
        readonly species: ReadonlyArray<{
            readonly name: string | null;
            readonly homeworld: {
                readonly name: string | null;
            } | null;
        } | null> | null;
    } | null;
};
export type speciesHomeworldQuery = {
    readonly response: speciesHomeworldQueryResponse;
    readonly variables: speciesHomeworldQueryVariables;
};



/*
query speciesHomeworldQuery(
  $cursor: String
) {
  allSpecies(first: 5, after: $cursor) {
    species {
      name
      homeworld {
        name
        id
      }
      id
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "speciesHomeworldQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allSpecies",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SpeciesConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "species",
            "storageKey": null,
            "args": null,
            "concreteType": "Species",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "homeworld",
                "storageKey": null,
                "args": null,
                "concreteType": "Planet",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "speciesHomeworldQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allSpecies",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "SpeciesConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "species",
            "storageKey": null,
            "args": null,
            "concreteType": "Species",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "homeworld",
                "storageKey": null,
                "args": null,
                "concreteType": "Planet",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ]
              },
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "speciesHomeworldQuery",
    "id": null,
    "text": "query speciesHomeworldQuery(\n  $cursor: String\n) {\n  allSpecies(first: 5, after: $cursor) {\n    species {\n      name\n      homeworld {\n        name\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9a7a4c032ad3ef4373bd0b52dcdf2bb0';
export default node;
