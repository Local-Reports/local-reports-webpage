/** @format */
import { MongoClient, ServerApiVersion } from "mongodb";
import { MONGODB_BACKEND_AUTH } from "./constants.js";
import { BackendClient } from "./simplifiedClient.js";

const client = new MongoClient(MONGODB_BACKEND_AUTH, {
	serverApi: ServerApiVersion.v2
});

console.log("hey");
const wrapper = new BackendClient(client);

console.log(wrapper);
await wrapper.connect();
console.log("connected");
wrapper.setDb("local-report");

const collection = wrapper.getCollection("reports");
console.log(collection);
