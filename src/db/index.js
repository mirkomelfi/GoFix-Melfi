import * as SQLite from "expo-sqlite"
const db = SQLite.openDatabase("carrito1.db")

export const init=()=> {
    const promise = new Promise ((resolve,reject)=> {
        db.transaction((tx)=> {
            tx.executeSql(
                "create table if not exists carrito2(id text not null, category text not null, name text not null, description text not null, price integer not null);",
                [],
                ()=> {
                    resolve()
                },
                (_,err)=> {
                    reject(err)
                }
            );
        });
    });
    return promise;
};

export const insertProduct=(id,category,name,description,price)=> {
    const promise = new Promise ((resolve,reject)=> {
        db.transaction((tx)=> {
            tx.executeSql(
                "insert into carrito2 (id,category,name,description,price) VALUES(?,?,?,?,?);", 
                [id,category,name,description,price],
                (_,result)=>resolve(),
                (_,err)=>reject(err)
            );
        });
    });
    return promise;
};
/*
export const editProduct=(id,category,name,description,price)=> {
    const promise = new Promise ((resolve,reject)=> {
        db.transaction((tx)=> {
            tx.executeSql(
                "insert into carrito1 (id,category,name,description,price) VALUES(?,?,?,?,?);", 
                [id,category,name,description,price],
                (_,result)=>resolve(),
                (_,err)=>reject(err)
            );
        });
    });
    return promise;
};*/

export const fetchProduct=()=> {
    const promise = new Promise ((resolve,reject)=> {
        db.transaction((tx)=> {
            tx.executeSql(
                "SELECT * FROM carrito2", 
                [],
                (_,result)=>resolve(result),
                (_,err)=>reject(err)
            );
        });
    });
    return promise;
};



export const deleteProduct=(itemID)=> {
    const promise = new Promise ((resolve,reject)=> {
        db.transaction((tx)=> {
            tx.executeSql(
                `DELETE FROM carrito2 WHERE id=${itemID};`, 
                [],
                (_,result)=>resolve(result),
                (_,err)=>reject(err)
            );
        });
    });
    return promise;
};

export const deleteProducts=()=> {
    const promise = new Promise ((resolve,reject)=> {
        db.transaction((tx)=> {
            tx.executeSql(
                "DELETE FROM carrito2", 
                [],
                (_,result)=>resolve(),
                (_,err)=>reject(err)
            );
        });
    });
    return promise;
};