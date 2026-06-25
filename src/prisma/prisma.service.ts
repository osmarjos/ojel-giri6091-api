import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../generated/prisma/client";
import * as dotenv from 'dotenv'

import { PrismaPg } from "@prisma/adapter-pg";

dotenv.config();

@Injectable()
export class PrismaService extends PrismaClient implements  OnModuleInit, OnModuleDestroy{
    task: any;



    constructor() {
        // npm i @prisma/adapter-pg pg
        // nmpm i dotenv --save-dev
        console.log(process.env.DATABASE_URL);
        const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL});
        super({ adapter });
    }
    async onModuleInit() {
        await this.$connect();
    }


    async onModuleDestroy() {
        await this.$disconnect();
    }
}
// git commit -m "add: Uso de Prisma ORM y configuracion de servicios y modulos"