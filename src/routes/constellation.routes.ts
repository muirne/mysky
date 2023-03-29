import {Router, Request, Response} from 'express';
import {Constellation, Star} from "../models/contellation";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const result = await Constellation.findAll({
        include: [{ model: Star, as: 'stars' }],
    });
    res.status(200).json({constellation: result});
});

router.get('/:id', async (req: Request, res: Response) => {
    
    const id = Number(req.params.id);
    const result = await Constellation.findByPk(id, {
        include: [{ model: Star, as: 'stars' }],
    });
    res.status(200).json({constellation: result});
});

router.post('/add', async (req: Request, res: Response) => {
    let newConstellation = req.body as Constellation;
    console.log(newConstellation)
    const result = await Constellation.create({...newConstellation});
    newConstellation = result.dataValues as Constellation;
    res.status(201).json({constellation: newConstellation});
});

router.put('/edit/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    let constellation = req.body as Constellation;
    await Constellation.update({...constellation}, {where: {id}});
    const updatedConstellation: Constellation | null = await Constellation.findByPk(id);
    return res.status(200).json(updatedConstellation);
})

router.delete('/delete/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const constellationToDelete: Constellation | null = await Constellation.findByPk(id);
    await Constellation.destroy({where: {id}});
    return res.status(200).json(constellationToDelete);
})
export default router;