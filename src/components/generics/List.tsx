// Generic types, T is the convention ,we can use any
type ListProps<T>={
    items:T[]
    // items:string[] | number[]
    // onClick: (value:string|number) => void
    onClick: (value: T) => void
}

export const List=<T extends {id:number}> ({items,onClick}:ListProps<T>) => {
    return(
        <div>
            <h2>List of Items</h2>
            {items.map((item)=>{
               return(
                <div key={item.id} onClick={()=> onClick(item)}>
                    {item.id}
                </div>               
            )})}
        </div>
    )
}
