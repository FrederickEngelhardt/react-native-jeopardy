import { commitLocalUpdate } from "react-relay";
import environment from "../environment";

export const USER = "user";
export const USER_SCORE = "score";
export const USER_NAME = "name";

export function updateUserScore(modifier) {
  commitLocalUpdate(environment, store => {
    const user = store.getRoot().getLinkedRecord(USER)
    const currentValue = user.getValue(USER_SCORE)
    user.setValue((currentValue + modifier), USER_SCORE)
  })
}

export function generateUserStore() {
  commitLocalUpdate(environment, store => {
    const dataRecord = store.create(USER, "User");
    dataRecord.setValue('anon', USER_NAME)
    dataRecord.setValue(0, USER_SCORE)
    store.getRoot().setLinkedRecord(dataRecord, USER)
  });
}
