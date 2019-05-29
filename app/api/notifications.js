import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
import { NOTIFICATIONS_SCHEMA } from './constants';

const NOTIFICATION = {
    title: "Quiz Time!",
    body: "🎓🎓 Hi! It's time to expand your knowedge, let's make some quizes! 💪🤓",
    ios: {
        sound: true,
    },
    android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
    }
}

export const clearLocalNotification = async () => {
    try {
        const res = await Promise.resolve(AsyncStorage.removeItem(NOTIFICATIONS_SCHEMA));
        Notifications.cancelAllScheduledNotificationsAsync();
    } catch (err) {
        console.log('Error on clearing notifications', err);
    }
}
  
export const setLocalNotification = async () => {
    const data = await Promise.resolve(AsyncStorage.getItem(NOTIFICATIONS_SCHEMA));
    if (data == null) {
        const { status } = await Promise.resolve(Permissions.askAsync(Permissions.NOTIFICATIONS));
        if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(6)
            tomorrow.setMinutes(0)

            Notifications.scheduleLocalNotificationAsync(
                JSON.parse(JSON.stringify(NOTIFICATION)),
                {
                    time: tomorrow,
                    repeat: 'day',
                }
            )

            AsyncStorage.setItem(NOTIFICATIONS_SCHEMA, JSON.stringify(true));
        }
    }
}