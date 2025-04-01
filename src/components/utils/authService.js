import { login_api, register_api} from './backendconfig'


export const signIn = async (login_api, email, password) => {
    try {
        const response = await fetch(login_api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Sign-in failed');
        }
        return data; // Return the response data
    } catch (error) {
        throw new Error(error.message || 'An error occurred during sign-in');
    }
};

export const signUp = async (register_api, email, password, username) => {
    try {
        const response = await fetch(register_api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, username }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Sign-up failed');
        }
        return data; // Return the response data
    } catch (error) {
        throw new Error(error.message || 'An error occurred during sign-up');
    }
};