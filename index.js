const express = require('express');
var cors = require('cors')
const app = express();
const port = 9000;
app.use(cors())

app.get('/', (req, res) => {
    res.send('Helloss,oo from my second node server')
})

const users = [
    {id:1, name:'Rakib', email:'abc@mail.cc'},
    {id:2, name:'Aslam', email:'aslam@mail.cc'},
    {id:3, name:'Tansir', email:'tansir@mail.cc'},
    {id:4, name:'Mahbub', email:'mahbub@mail.cc'}
]
app.get('/users', (req, res)=>{
    const search = req.query.search;
    if(search){
        const searchReslut = 
        users.filter(user => user.name.toLocaleLowerCase().includes(search));
        return res.send(searchReslut);
    }else{
        res.send(users)
    }
})
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.post('/users', (req, res) =>{
    console.log('Hitting the post')
    res.send(true);
})

app.listen(port, () => {
    console.log('Listening to port', port)
})