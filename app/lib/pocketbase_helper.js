import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// Get a row by ID
export const getRow = async (table, id) => {
    try {
        const data = await pb.collection(table).getOne(id);
        return data;
    } catch (error) {
        if (error.status === 404) {
            throw new Error('Row not found');
        }
        throw new Error(error.message);
    }
};

// Get a row by ID
export const getUser = async (email, password) => {
    try {
        const data = await pb.collection('users').authWithPassword(email, password);
        return data;
    } catch (error) {
        if (error.status === 404) {
            throw new Error('Row not found');
        }
        throw new Error(error.message);
    }
};

// Get all data from a table
export const getAllData = async (table) => {
    try {
        const data = await pb.collection(table).getFullList();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get filtered data from a table
export const getFilteredData = async (table, filter) => {
    try {
        const queryString = Object.entries(filter)
            .map(([key, value]) => `${key}="${value}"`)
            .join(' && ');
        const data = await pb.collection(table).getList(1, 50, {
            filter: queryString,
        });
        return data.items;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Insert a row into a table
export const insertRow = async (table, rowData) => {
    try {
        const data = await pb.collection(table).create(rowData);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Bulk insert rows into a table
export const bulkInsert = async (table, rows) => {
    try {
        const data = await Promise.all(
            rows.map((row) => pb.collection(table).create(row))
        );
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a row by ID
export const updateRow = async (table, id, updatedData) => {
    try {
        const data = await pb.collection(table).update(id, updatedData);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update a row by a specific column and value
export const updateRowSpecial = async (table, updatedData, columnName, value) => {
    try {
        const queryString = `${columnName}="${value}"`;
        const items = await pb.collection(table).getList(1, 1, { filter: queryString });
        if (items.items.length === 0) throw new Error('No matching record found');
        const id = items.items[0].id;
        const data = await pb.collection(table).update(id, updatedData);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Bulk update rows in a table
export const bulkUpdate = async (table, updates) => {
    try {
        const data = await Promise.all(
            updates.map((update) => pb.collection(table).update(update.id, update))
        );
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a row by ID
export const deleteRowById = async (table, id) => {
    try {
        const data = await pb.collection(table).delete(id);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete a row by a specific column and value
export const deleteRowByColumn = async (table, columnName, value) => {
    try {
        const queryString = `${columnName}="${value}"`;
        const items = await pb.collection(table).getList(1, 1, { filter: queryString });
        if (items.items.length === 0) throw new Error('No matching record found');
        const id = items.items[0].id;
        const data = await pb.collection(table).delete(id);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Get user by email
export const getUserByEmailCollection = async (collection, email) => {
    try {
        const queryString = `email="${email}"`;
        console.log(`Query string for email filter: ${queryString}`);
        const items = await pb.collection(collection).getList(1, 1, { filter: queryString });
        if (items.items.length === 0) throw new Error('User not found');
        return items.items[0];
    } catch (error) {
        console.error('Error fetching user by email:', error.message);
        if (error.message === 'User not found') {
            return null; // Return null if user is not found
        }
        throw new Error(error.message);
    }
};
