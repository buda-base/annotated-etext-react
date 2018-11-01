//@flow 

import mockdata from './mockdata';

function fetchInData(url: string): Response {
    if (mockdata.url) {
        return new Response(JSON.stringify(mockdata.url), {status: 200});
    } else {
        return new Response("", {status: 404});
    }
}

//const fetch = jest.fn<Array<string>, Response> (fetchInData);
const fetch = jest.fn<any,any>(fetchInData);

export default fetch;