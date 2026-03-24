import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";

const s3 = new S3Client({});

export async function downloadExcelFromS3(
  bucketName: string,
  key: string,
  downloadDir = "downloads"
) {
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: key
  });

  const response = await s3.send(command);

  if (!response.Body) {
    throw new Error("S3 object has no body");
  }

  fs.mkdirSync(downloadDir, { recursive: true });

  const filePath = path.join(downloadDir, path.basename(key));
  const writeStream = fs.createWriteStream(filePath);

  await pipeline(response.Body as any, writeStream);

  return filePath;
}
