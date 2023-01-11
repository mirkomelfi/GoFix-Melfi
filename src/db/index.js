import * as SQLite from "expo-sqlite"
const db = SQLite.openDatabase("carritoPrueba.db")

export const init=()=> {
    const promise = new Promise ((resolve,reject)=> {
        db.transaction((tx)=> {
            tx.executeSql(
                "create table if not exists carritoPrueba(id text not null, category text not null, name text not null, description text not null, price integer not null, quantity integer not null);",
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

export const insertProduct=(id,category,name,description,price,quantity)=> {
    const promise = new Promise ((resolve,reject)=> {
        db.transaction((tx)=> {
            tx.executeSql(
                "insert into carritoPrueba (id,category,name,description,price,quantity) VALUES(?,?,?,?,?,?);", 
                [id,category,name,description,price,quantity], 
                (_,result)=>resolve(),
                (_,err)=>reject(err)
            );
        });
    });
    return promise;
};

export const editProduct=(id,category,name,description,price,quantity)=> {
    const promise = new Promise ((resolve,reject)=> {
        db.transaction((tx)=> {
            tx.executeSql(
                `UPDATE carritoPrueba SET quantity=? where id=?;`, // debo agregar la clausula where?
                [quantity,id], // asi? o solo quantity
                (_,result)=>resolve(),
                (_,err)=>reject(err)
            );
        });
    });
    return promise;
};

export const fetchProduct=()=> {
    const promise = new Promise ((resolve,reject)=> {
        db.transaction((tx)=> {
            tx.executeSql(
                "SELECT * FROM carritoPrueba", 
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
                `DELETE FROM carritoPrueba WHERE id=${itemID};`, 
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
                "DELETE FROM carritoPrueba", 
                [],
                (_,result)=>resolve(),
                (_,err)=>reject(err)
            );
        });
    });
    return promise;
};