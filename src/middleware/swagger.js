import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';

const swaggerPath = path.resolve(process.cwd(), 'swagger.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, 'utf-8'));

export const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
