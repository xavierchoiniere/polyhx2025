import { Logger, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserController } from "./controllers/user.controller";
import { User, UserSchema } from "./model/schema/user.schema";
import { UserService } from "./services/user.service";
import { FishController } from "./controllers/fish.controller";
import { Fish, FishSchema } from "./model/schema/fish.schema";
import { FishService } from "./services/fish.service";
import { PublicationController } from "./controllers/publication.controller";
import {
  Publication,
  PublicationSchema,
} from "./model/schema/publication.schema";
import { PublicationService } from "./services/publication.service";
import { PopulateService } from "./services/populate.service";
import { Dataset, DatasetSchema } from "./model/schema/dataset.schema";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>("DATABASE_CONNECTION_STRING"),
      }),
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Fish.name, schema: FishSchema },
      { name: Publication.name, schema: PublicationSchema },
      { name: Dataset.name, schema: DatasetSchema },
    ]),
  ],
  controllers: [UserController, FishController, PublicationController],
  providers: [
    Logger,
    UserService,
    FishService,
    PublicationService,
    PopulateService,
  ],
})
export class AppModule {}
