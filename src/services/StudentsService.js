import axios from 'axios';

const StudentsService = {
    async getStudents(page) {
        return await axios.get('/students?page=' + page)
        // return response.data;
    },
    async createStudent(data) {
        const response = await axios.post('/students', data)
        return response.data;
    },
};

export default StudentsService;