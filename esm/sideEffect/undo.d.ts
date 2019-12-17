export declare function handleUndoRace(undoableAction: {
    payload: {
        action: any;
    };
}): Generator<import("redux-saga/effects").PutEffect<any> | import("redux-saga/effects").RaceEffect, void, {
    complete: any;
}>;
export default function watchUndoable(): Generator<any, void, unknown>;
