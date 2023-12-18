import React from 'react'
export default function D6eg()
{
    const college=[{id:1,stuName: " dini",age: 23},
                   {id:2,stuName: "sasi",age: 23},
                   {id:3,stuName: "saseena", age:19}]
 const display=college.map((col)=><li key={col.id}>{col.stuName}{col.age}</li>)
 return(
    <div>
       <h1>List of students</h1>
       {display}
    </div>
 )
}