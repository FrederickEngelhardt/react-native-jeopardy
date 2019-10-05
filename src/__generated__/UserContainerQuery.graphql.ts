/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UserContainerQueryVariables = {};
export type UserContainerQueryResponse = {
    readonly user: {
        readonly name: string;
        readonly score: number;
    } | null;
    readonly __typename: string;
};
export type UserContainerQuery = {
    readonly response: UserContainerQueryResponse;
    readonly variables: UserContainerQueryVariables;
};



/*
query UserContainerQuery {
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
    "name": "UserContainerQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserContainerQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserContainerQuery",
    "id": null,
    "text": "query UserContainerQuery {\n  __typename\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '0f556da1e306f688c721dc8586a51fa3';
export default node;
