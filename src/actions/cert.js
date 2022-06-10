import base from "./base";

export default async (options) => {
    try{
        const requestOptions = {
            method: 'GET',
        }
        return await fetch(`${base}/certificate/${options.id}/${options.tempNum}/${options.date}/${options.description}/${options.hours}`, requestOptions).
        then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })

    }catch(e) {
        console.log(e);
    }
}

