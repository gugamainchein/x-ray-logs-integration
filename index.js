const express = require("express");
const AWSXRay = require("aws-xray-sdk");
const uuid = require("uuid");
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

const appName = "x-ray-lab";

// Captura todas as chamadas HTTP
AWSXRay.captureHTTPsGlobal(require("http"));

// Cria um novo segmento para cada requisição HTTP
const app = express();
app.use(AWSXRay.express.openSegment(appName));

// Cria um novo cliente DynamoDB com X-Ray capturando automaticamente chamadas de serviço
const dynamodb = AWSXRay.captureAWSv3Client(
  new DynamoDBClient({ region: "us-east-1" })
);

app.get("/", async (req, res) => {
  const headers = req.headers;
  const segment = AWSXRay.getSegment();
  segment.addAnnotation("route", "/");
  segment.addMetadata("headers", headers);

  if (!headers.authorization) {
    res.status(401).send("Authorization parameter is required!");

    segment.addError({
      name: "field is missing",
      message: "Authorization parameter is required!",
    });

    segment.close();
    return;
  }

  segment.addMetadata("user", { userJwt: headers.authorization });

  await dynamodb.send(
    new PutItemCommand({ TableName: appName, Item: { id: { S: uuid.v4() } } })
  );

  res.status(200).send("Hello World!");
  segment.close();
});

app.use(AWSXRay.express.closeSegment());

app.listen(8080, () => {
  console.log("App listening on port 8080");
});
