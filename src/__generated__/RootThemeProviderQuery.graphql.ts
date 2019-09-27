/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type RootThemeProviderQueryVariables = {};
export type RootThemeProviderQueryResponse = {
    readonly theme: {
        readonly darkMode: boolean;
    } | null;
    readonly __typename: string;
};
export type RootThemeProviderQuery = {
    readonly response: RootThemeProviderQueryResponse;
    readonly variables: RootThemeProviderQueryVariables;
};



/*
query RootThemeProviderQuery {
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
    "name": "RootThemeProviderQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RootThemeProviderQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "RootThemeProviderQuery",
    "id": null,
    "text": "query RootThemeProviderQuery {\n  __typename\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '8bc7cfa27ab312f19d48e0f547baa585';
export default node;
