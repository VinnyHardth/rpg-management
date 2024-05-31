import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Página Principal!');
});

router.get('/sobre', (req, res) => {
    res.send('Sobre o sistema!');
});


router.get('/rpgs', (req, res) => {
    res.send('Listar/Exibir rpgs');
});

router.get('/rpgs/:nome_rpg', (req, res) =>{
    res.send(`Esse é o mundo ${req.params.nome_rpg}`);
});

router.get('/:personagem', (req, res) => {
    res.send(`Apresentação do personagem ${req.params.personagem}`);
});

router.get('/rpgs/:nome_rpg', (req, res) =>{
    res.send(`Esse é o mundo ${req.params.nome_rpg}`);
});

export default router;
