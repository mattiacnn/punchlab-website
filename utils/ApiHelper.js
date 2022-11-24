
//import auth from '@react-native-firebase/auth';
//import firebase from '@react-native-firebase/app';


export async function callPublicApi(path, params) {

  const url = process.env.NEXT_PUBLIC_API_HOST + path;

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  try {

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });

    const json = await response.json();

    if (response.ok) {

      return { data: json };

    } else {

      const error = {};
      error.code = json.error.code;
      error.message = json.error.message;

      return { error };

    }

  } catch (fetchError) {

    const error = {};
    error.code = 'network_error';
    error.message = fetchError.message;

    return { error };

  }

}//callPublicApi


/*
export async function callApi(path, params, localhostUrl = null) {

  const authUser = auth().currentUser;
  const jwtToken = await authUser.getIdToken();

  const projectId = firebase.app().options.projectId;
  const host = localhostUrl && __DEV__ ? localhostUrl : 'https://' + projectId + '.uc.r.appspot.com';
  const url = host + '/secure/' + path;

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + jwtToken,
  };

  try {

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    });

    const json = await response.json();

    if (response.ok) {

      return { data: json };

    } else {

      const error = {};
      error.code = json.error.code;
      error.message = json.error.message;

      return { error };

    }

  } catch (fetchError) {

    const error = {};
    error.code = 'network_error';
    error.message = fetchError.message;

    return { error };

  }

}//callApi
*/
