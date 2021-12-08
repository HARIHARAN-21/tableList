import {axiosInstance} from './interceptor'

const getUserList = async function() {
    console.log("iam in");
    let data = {};
    try{
        await axiosInstance.get(axiosInstance.baseUrl,{ handlerEnabled: false })
        .then(res => {
            if (res) {
                data = {...res.data.data};
                console.log(res);
            }
            else {
                console.log("no response coming");
            }
        })

    }
     catch (err) {
        console.log("this one...", err)
    }
    return data;
}

export default getUserList;