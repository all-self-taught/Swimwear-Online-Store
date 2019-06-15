const checkStatus = res => {
    if (res.status < 400) return res;
    else throw Error();
}

const parseJson = res => res.json();

export const serviceManager = (config, payload) => {
    return fetch(config.url)
        .then(checkStatus)
        .then(parseJson)
        .catch(err => ({ err: `an error has occured: ${err.message}`}))
}