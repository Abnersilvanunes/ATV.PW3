const express = require('express');

/*CONFIGURAÇÃO DAS ROTAS DE CATEGORIA*/
const router = express.Router();

/* IMPORT DA MODEL DE CATEGORIA */
const Categoria = require('./Model');


router.get('/', (req, res)=>{

    //LISTANDO OS DADOS 
    Categoria.findAll()
        .then(
            (Categoria)=>{
                return res.status(200).json(Categoria);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados de Jogos',
                    erroBancoDados: erro
                });
            }
        );

});

//LISTANDO OS DADOS
router.get('/nome_Categoria/:id',(req, res)=>{

    let {id} = req.params;

    Categoria.findByPk(id)
        .then(
            (Categoria)=>{
                res.status(200).json(Categoria);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados da Artes Marcial',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirCategoria', (req, res)=>{
   
    //RECEBER OS DADOS

    let {nome_categoria, tipos_jogo, Classificacao, Estilo_jogo} = req.body;
    
    
    //GRAVAR OS DADOS
    Categoria.create(
        {nome_categoria, tipos_jogo, Classificacao, Estilo_jogo}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Categoria inserida com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao cadastrar a categoria',
                        erroBancoDados: erro
                    });
        }
    );

});

router.put('/alterarCategoria', (req, res)=>{



    //RECEBENDO OS DADOS:
    let {id, nome_categoria} = req.body;

    //ALTERANDO OS DADOS:
    Categoria.update(
        {Categoria},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Categoria alterada com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar a categoria',
                        erroBancoDados: erro
                    });
        }
    );

});

router.delete('/excluirCategoria', (req, res)=>{

  

    let {id} = req.params;

    Categoria.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Categoria excluida com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir a categoria',
                        erroBancoDados: erro
                    });
        }
    );

});

module.exports = router;