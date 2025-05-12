const WA_API = process.env.WHATSAPP_SERVER_API;
const API_KEY = process.env.WHATSAPP_API_KEY;

if (!WA_API) {
  throw new Error('WHATSAPP_SERVER_API is not defined.');
}
if (!API_KEY) {
  throw new Error('WHATSAPP_API_KEY is not defined.');
}


export async function waFetch(path: string, method: string = 'GET', body?: any) {
    const options: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'access-token': API_KEY ? `Bearer ${API_KEY}` : '',
        },
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    const res = await fetch(`${WA_API}${path}`, options);
    return res.json();
}