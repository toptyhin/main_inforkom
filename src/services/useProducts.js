import { useState, useEffect } from 'react';

const parseProductsGaz = (obj)=>{

    let parsed = Object.entries(obj).map(e=>{
            let groups = e[1].groups;
            let items = groups.map(g=>{
                let prods = g.products.map(p=>{
                    return p.productId
                })

                return {
                    group: g.groupName,
                    id: g.groupId,
                    catId: e[1].catId,
                    products: prods
                }
            })
            return items               
    })

    for (let i=0; i<parsed.length;i++) {
        let groups = parsed[i];
        if (groups[0].catId === 259093) {
            let gazGroup = groups;
            let index = null;
            let dropIndex = null;
            for (let j = 0; j<gazGroup.length; j++) {
                if (gazGroup[j].id === 24547902) {
                    gazGroup[j].group = 'Метан'
                    if (index === null) {
                        index = j;
                    } else {
                        gazGroup[index].products = gazGroup[index].products.concat(gazGroup[j].products);
                        dropIndex = j;
                    }
                }
                if (gazGroup[j].id === 126612) {
                    gazGroup[j].group = 'Пропан-бутан'
                }                    
                if (gazGroup[j].id === 2187057) {
                    gazGroup[j].group = 'Метан';
                    if (index === null) {
                        index = j;
                    } else {
                        gazGroup[index].products = gazGroup[index].products.concat(gazGroup[j].products)
                        dropIndex = j;
                    }                        
                }                                        

            }

            index !== null && parsed[i].splice(dropIndex,1);
        }
    }

    return parsed;
}


const useProducts = () =>{

    const [products, setProducts] = useState([]);
    const [productsLoadStatus, setStatus] = useState(false);

    const getProducts = async () => {
        let refRequest,productReferenceRaw;
        try {
            refRequest = await fetch('https://data.inforkom.ru/api/v1/base/reference/products');
        } catch (err) {
            console.log('netw err',err)
            setStatus(false);
        }

        try {
            productReferenceRaw = await refRequest.json();
        } catch (err) {
            console.log('json data err',err)
            setStatus(false);
        }

        if (productReferenceRaw) {
            setProducts(parseProductsGaz(productReferenceRaw));           
            setStatus(false);
        } else {
            setStatus(false);
        }

    }


    useEffect(()=>{
        if (!products.length) {
            setStatus(true);
            getProducts();
        }
    },[products]);


    return {products,productsLoadStatus}
};

export default useProducts;