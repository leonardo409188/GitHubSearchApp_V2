import api from './httpConfig';

export async function getUsers(user: string): Promise<any>  {
    try {
        const response = await api.get(`/search/users?q=${user}`);

        return response.data.items;

    } catch (error) {
        throw error;
    }
}

export async function getRepositories(user: string, page: number): Promise<any> {
    try {
        const response = await api.get(`/users/${user}/repos?page=${page}&per_page=15`);

        return response.data;

    } catch (error) {
        throw error;
    }
}
