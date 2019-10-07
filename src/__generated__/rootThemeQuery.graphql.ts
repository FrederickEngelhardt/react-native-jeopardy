/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type rootThemeQueryVariables = {};
export type rootThemeQueryResponse = {
    readonly theme: {
        readonly darkMode: boolean;
    } | null;
    readonly __typename: string;
};
export type rootThemeQuery = {
    readonly response: rootThemeQueryResponse;
    readonly variables: rootThemeQueryVariables;
};



/*
query rootThemeQuery {
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
        "name": "theme",
        "storageKey": null,
        "args": null,
        "concreteType": "Theme",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "darkMode",
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
    "name": "rootThemeQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "rootThemeQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "rootThemeQuery",
    "id": null,
    "text": "query rootThemeQuery {\n  __typename\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f9f11e121e43a5dc1b2ff55cf9492a72';
export default node;
