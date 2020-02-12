export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";

var observers = [];
let instance = null;

class NotificationService {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    postNotification = (notifName, data) => {
        let obs = observers[notifName];
        console.log(obs.length);
        for (var i = 0; i < obs.length; i++) {
            console.log("postNotification loop iteration: " + (i+1));
            var obj = obs[i];
            obj.callBack(data);
        }
    }

    removeObserver = (observer, notifName) => {
        var obs = observers[notifName];

        if (obs) {
            for (var i = 0; i < obs.length; i++) {
                if (observer === obs[i].observer) {
                    obs.splice(i,1);
                    observers[notifName] = obs;
                    break;
                }
            }
        }
    }

    addObserver = (notifName, observer, callBack) => {
        let obs = observers[notifName];

        if (!obs) {
            observers[notifName] = [];
        }

        let obj = {observer: observer, callBack: callBack};
        console.log("addObserver Obj:  " + obj[observer]);
        observers[notifName].push(obj);
        console.log("added observer: " + observers[notifName]);
    }
}

export default NotificationService;