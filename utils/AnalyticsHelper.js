
import mixpanel from 'mixpanel-browser';

mixpanel.init('d7dbc723a0a4ff97150900c7914af875', { debug: true });


export function identify(userId) {

  mixpanel.identify(userId);

}//identify


export function setProperty(key, value, sendWithEvents = true) {

  if (sendWithEvents) {
    mixpanel.registerSuperProperties({ [key]: value });
  }

  mixpanel.getPeople().set(key, value);

  if (__DEV__) {
    mixpanel.flush();
  }

}//setProperty


export function logEvent(key, params) {

  mixpanel.track(key, params);

}//logEvent


/*export function logAppsFlyerEvent(eventName, params) {

  appsFlyer.logEvent(eventName, params,
    (res) => { },
    (err) => { console.error('appsFlyer.logEvent error: ', err); }
  );

}//logAppsFlyerEvent*/


export function reset() {

  mixpanel.reset();

}//reset
