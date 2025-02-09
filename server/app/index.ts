import { AppModule } from "@app/app.module";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as bodyParser from "body-parser";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

  await app.listen(process.env.PORT || 3000);
};

bootstrap();
