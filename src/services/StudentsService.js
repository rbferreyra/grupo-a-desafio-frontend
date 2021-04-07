import axios from 'axios';

const StudentsService = {
    async getStudents() {
        const response = await axios.get('/students')
        return response.data;
    },
    async createStudent(data) {
        const response = await axios.post('/students', data)
        return response.data;
    },
};

export default StudentsService;