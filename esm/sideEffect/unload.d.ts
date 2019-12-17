/**
 * Unload saga
 *
 * When a user closes the browser window while an optimistic update/delete
 * hasn't been sent to the dataProvider yet, warn them that their edits
 * may be lost.
 *
 * To achieve that, this saga registers a window event handler on the
 * 'beforeunload' event when entering the optimistic mode, and removes
 * the event when quitting the optimistic mode.
 */
export default function watchUnload(): Generator<import("redux-saga/effects").ForkEffect, void, unknown>;
export declare function handleStartOptimistic(): Generator<never, void, unknown>;
export declare function handleStopOptimisticMode(): Generator<never, void, unknown>;
