import axios from 'axios';

const StudentsService = {
    async getStudents() {
        const response = await axios.get('/students')
        return response.data;
    },
};

export default StudentsService;