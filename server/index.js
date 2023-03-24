const express = require("express");
const connectDatabase = require("./config/mongoDb");
const importData = require("./dataImport");
const { notFound, errorHandler } = require("./middleware/Errors");
const orderRoute = require("./routes/orderRoute");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDatabase();

app.use(express.json());
app.use("/api/import", importData);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}!`);
});
