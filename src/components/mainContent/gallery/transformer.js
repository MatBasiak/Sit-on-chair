
const transformer = (data)=>{
console.log(data);

    const dataArray=[];

    data.forEach(element => {
        dataArray.push({
            id: element.key,
            ...element.val()
        })
    });
    return dataArray
}

export default transformer