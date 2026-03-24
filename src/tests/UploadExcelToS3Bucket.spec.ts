import test from "@playwright/test";
import { uploadExcelToS3 } from "../utils/s3Upload";


test('Upload excel to s3 bucket', async () => {
  await uploadExcelToS3(
    "vidushi-mishra-s3-poc-2026",
    "reports/report1.xlsx",
    "test-data/OrdersLogs.xlsx"
  );
})

