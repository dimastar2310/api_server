// controller modules handle the business logic of the application.
// controllers are responsible for:
// validating the request data
// calling the appropriate data access layer function

import log from '@ajar/marker';
import * as user_model from "./user.model.mjs";

log.cyan(`user.controller loaded...`);

export async function create(user) {
    return await user_model.create(user);
}

export async function getAll(page = 1, limit = 20) {
    return await user_model.getAll(page,limit);
}

export async function getOne(id) {
    return await user_model.getOne(id);
}

export async function updateOne(userId,payload) {
    return await user_model.updateOne(userId,payload);
}

export async function replaceOne(userId,payload) {
    return await user_model.replaceOne(userId, payload);
}

export async function deleteOne(userId) {
    return await user_model.deleteOne(userId);
}