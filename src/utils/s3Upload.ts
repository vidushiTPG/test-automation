import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as fs from "fs";

const s3 = new S3Client({
  region: "us-east-1"
});

export async function uploadExcelToS3(
  bucketName: string,
  key: string,
  filePath: string
) {
  const fileStream = fs.createReadStream(filePath);

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: fileStream,
    ContentType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });

  await s3.send(command);
  console.log("Excel file uploaded successfully");
}
