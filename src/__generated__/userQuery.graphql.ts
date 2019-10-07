/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type userQueryVariables = {};
export type userQueryResponse = {
    readonly user: {
        readonly name: string;
        readonly score: number;
    } | null;
    readonly __typename: string;
};
export type userQuery = {
    readonly response: userQueryResponse;
    readonly variables: userQueryVariables;
};



/*
query userQuery {
  __typename
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "__typename",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "score",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "userQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "userQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "userQuery",
    "id": null,
    "text": "query userQuery {\n  __typename\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ce9cd1d04bb086715b64fbad4464e587';
export default node;
