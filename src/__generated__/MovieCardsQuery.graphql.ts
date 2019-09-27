/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type MovieCardsQueryVariables = {};
export type MovieCardsQueryResponse = {
    readonly allFilms: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly title: string | null;
            } | null;
        } | null> | null;
    } | null;
};
export type MovieCardsQuery = {
    readonly response: MovieCardsQueryResponse;
    readonly variables: MovieCardsQueryVariables;
};



/*
query MovieCardsQuery {
  allFilms {
    edges {
      node {
        id
        title
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allFilms",
    "storageKey": null,
    "args": null,
    "concreteType": "FilmsConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "FilmsEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Film",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              }
            ]
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
    "name": "MovieCardsQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MovieCardsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "MovieCardsQuery",
    "id": null,
    "text": "query MovieCardsQuery {\n  allFilms {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '7a7c9234fe8352c95dd46b941d0995bd';
export default node;
