export default function sortObject(obj, param) {
    const ordered = {};
    Object.keys(obj).sort().forEach(function(key) {
        ordered[key] = obj[key];
    }); 
    
    const arr = [];
  
    //for(let i = 0; i< param.length; i++) {
       // arr.push({[param[i]]: obj[param[i]]});
    //}
    for(let i = 0; i< param.length; i++) {
        arr.push({key:param[i], value:obj[param[i]]});
     }
    for(let keys in ordered){
        if(arr.some(i => i.key == keys))
            continue;
        arr.push({key:keys, value:obj[keys]});
    }
    return arr;
}