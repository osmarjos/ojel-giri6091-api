import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { connect } from "http2"
@Injectable()
export class PrismaService extends PrismaClient implements  OnModuleInit, OnModuleDestroy{



    constructor() {
        // npm i @prisma/adapter-pg pg
        // nmpm i dotenv --save-dev
        const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL});
        super({
            adapter 
        });
    }
    async onModuleInit() {
        await this.$connect();
    }


    async onModuleDestroy() {
        await this.$disconnect();
    }
}