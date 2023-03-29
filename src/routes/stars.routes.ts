import {Router, Request, Response} from 'express';
import {Star} from "../models/models";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const result = await Star.findAll();
    res.status(200).json({star: result});
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await Star.findByPk(id);
    res.status(200).json({star: result});
});

router.post('/add', async (req: Request, res: Response) => {
    let newStar = req.body as Star;
    console.log(newStar);
    const result = await Star.create({...newStar});
    newStar = result.dataValues as Star;
    res.status(201).json({star: newStar});
});

router.put('/edit/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    let star = req.body as Star;
    await Star.update({...star}, {where: {id}});
    const updatedStar: Star | null = await Star.findByPk(id);
    return res.status(200).json(updatedStar);
})

router.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const starToDelete: Star | null = await Star.findByPk(id);
    await Star.destroy({where: {id}});
    return res.status(200).json(starToDelete);
})
export default router;