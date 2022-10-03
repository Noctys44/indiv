const express = require('express')
const app = express()
const {getAllPersos, getOnePerso, postPerso, updatePerso, deletePerso} = require("./controller/app.js")
const port = 3000

require("dotenv").config()
app.use(express.json())


app.get('/', async (req, res) => {
    const data = await getAllPersos();
    res.json( data );
})

app.get('/:id', async (req, res) => {
    const data = await getOnePerso(req.params.id);
    res.json( data );
})

app.post('/', async (req, res) => {
    const data = await postPerso(req.body);
    res.json( data );
})

app.patch('/:id', async (req, res) => {
    const data = await updatePerso(req.params.id, req.body);
    res.json( data );
})

app.delete('/:id', async (req, res) => {
    const data = await deletePerso(req.params.id);
    res.json( {sucess: true} )
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
