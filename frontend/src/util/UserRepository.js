export function storeUser(user) {
    if (!user || !user.id || !user.info) {
        throw new Error('Invalid user object');
    }

    const userData = JSON.stringify(user);
    localStorage.setItem(user.id, userData);
}

export function getUser(id) {
    if (!id) {
        throw new Error('Invalid user id');
    }

    const userData = localStorage.getItem(id);
    return userData ? JSON.parse(userData) : null;
}

export function removeUser(id) {
    if (!id) {
        throw new Error('Invalid user id');
    }

    localStorage.removeItem(id);
}

export default {
    storeUser,
    getUser,
    removeUser
}