export const useApi = () => {
    const fetchData = async () => {
        const response = await fetch('https://localhost:3000/data')
        const data = await response.json();
        return data;
    };
    return { fetchData };
}