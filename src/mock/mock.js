import Mock from "mockjs";
let data =  Mock.mock("/login","get",{
    "status":200,
    "page":1,
    "pageSize":5,
    "total":3000,
    "list|36":[
        {
            "id|+1":1,
            "name":"@cname",
            "price|100-1000":100,
            "pic":"https://dummyimage.com/150x100"
        }
    ]
})
export default data;