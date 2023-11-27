//VARIAVEIS REQUERENTES
const express = require('express')
const path = require('path')

const user = require('./models/user')
const ferias = require('./models/ferias')

const app = express()

//DEFININDO O TEMPLATE ENGINE
app.set('view engine', 'ejs')

//HABILITANDO O RECEBIMENTO DE INFORMAÇÕES VIA FORMULARIO 
app.use(express.urlencoded({ extended: true }))


//DEFININDO ARQUIVOS DA PASTA PUBLIC
const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)


//ROTAS 
app.get('/', (req, res) => {
    res.render('PaginaBoasVindas')
})

app.get('/cadastrar', (req, res) => {
    res.render('Cadastrar')
})

app.get('/ferias', (req, res) => {
    res.render('Ferias')
})

app.get('/pesquisar', async (req, res) => {
    res.render('Pesquisar')
})

app.get('/remover', async (req, res) => {
    await user.destroy({ where: req.query })

    res.render('Listar', {
        result: 'null',
        message: 'Cadastro removido com successo',
    })
})

app.get('/editar', async (req, res) => {
    const editar = await user.findOne({ where: req.query })
    res.render('paginaEdicao', { editar: editar })
})

app.get('/listar', async (req, res) => {
    res.render('Listar', {
        result: 'null'
    })
})


//REQUISIÇÕES
app.post('/pesquisar', async (req, res) => {

    const pesquisa = await user.findOne({ where: req.body })

    console.log(pesquisa)

    if (pesquisa == null) {
        res.render('Pesquisar', {
            message: 'Colaborador não encontrado'
        })
    } else {
        res.render('pesquisaResultado', {
            pesquisa: pesquisa,
        })
    }

})

app.post("/infoEditar", async (req, res) => {
    const id = req.body.id
    const obj = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        nascimento: req.body.nascimento,
        sexo: req.body.sexo,
        telefone: req.body.telefone,
        estado_civil: req.body.estado_civil,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
    }

    await user.update(obj, {
        where: { id }
    })

    res.render('Listar', {
        result: 'null',
        message: 'Cadastro alterado com successo'
    })
})

app.post('/cadastrar', async (req, res) => {
    await user.create(req.body)

    res.render('Cadastrar', {
        message: 'Colaborador Adicionado com Sucesso!'
    })
})

app.post('/ferias', async (req, res) => {
    await ferias.create(req.body)

    await user.update({ situacao: 'Ferias' }, {
        where: {
            nome: req.body.nome,
            cargo: req.body.cargo,
            departamento: req.body.departamento,
        }
    })

    res.render('Ferias', {
        message: 'Solicitação concluida com sucesso!',
    })
})

app.post('/listar', async (req, res) => {
    const listar = await user.findAll({
        where: req.body
    })

    res.render('Listar', {
        result: '',
        listar: listar,
    })
})


//ERRO 404
app.use((req, res) => {
    res.send('pagina não encontrada')
})


//CONEXÃO COM O SERVIDOR NA PORTA 8080
app.listen(8080, () => {
    console.log('servidor iniciado na porta 8080: http://localhost:8080');

})