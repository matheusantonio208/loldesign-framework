import { Schema } from 'mongoose';
import { Request, Response } from 'express';
//! types-start
export interface Request extends Request {
  body?: any;
  query?: any;
  params?: {
    id?: Schema.Types.ObjectId;
    key?: string;
    sort?: string;
    itensPerPage?: number;
    pagination?: number;
    name?: string;
  };
}

export interface Response extends Response {
  status: any;
}
//! types-end
