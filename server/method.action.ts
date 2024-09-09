'use server'
const get = async (url: string, options: RequestInit = {}, cache: RequestCache = 'no-store') => {
    const data = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
        cache: cache
    });
    return data;
}

export {
    get
}
