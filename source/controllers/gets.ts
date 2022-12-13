
import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

interface Content {
    id: Number;
    key: string;
}

const data = require('./../data');

const getAidnContent = async (req: Request, res: Response, next: NextFunction) => {    
    return res.status(200).json(data);
};

export default { getAidnContent };