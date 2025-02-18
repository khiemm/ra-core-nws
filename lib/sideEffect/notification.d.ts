import { NotificationType } from '../actions/notificationActions';
export interface NotificationSideEffect {
    body: string;
    level: NotificationType;
    messageArgs?: object;
}
export default function (): Generator<import("redux-saga/effects").ForkEffect, void, unknown>;
