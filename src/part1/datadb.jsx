import React from "react";

function UserList(){
let Data=[
    {"name": "Lcenhqu", "email": "lcenhqu@example.com", "age": 29},
    {"name": "Qzljfkt", "email": "qzljfkt@test.org", "age": 41},
    {"name": "Uwcvjxp", "email": "uwcvjxp@mail.com", "age": 35},
    {"name": "Xotszmr", "email": "xotszmr@example.com", "age": 27},
    {"name": "Kphmxnr", "email": "kphmxnr@test.org", "age": 53}
  ];
  return (
    <div>
            {Data.map(({name, email, age}) =>(
                <div>
                    <h1> {name} </h1>
                    <h3>{email}</h3>
                    <h4>age is {age}</h4>
                </div>
            ))}
    </div>
);
  }  
export default UserList;