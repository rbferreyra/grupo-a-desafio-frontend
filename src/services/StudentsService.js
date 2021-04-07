import axios from 'axios';

const StudentsService = {
    async getStudents(page) {
        return await axios.get(`/students?page=${page}`)
        // return response.data;
    },
    async createStudent(data) {
        const response = await axios.post('/students', data)
        return response.data;
    },
    async getStudent(uiid) {
        const response = await axios.get(`/students/${uiid}`)
        return response.data;
    },
    async updateStudent(uiid, data) {
        const response = await axios.put(`/students/${uiid}`, data)
        return response.data;
    },    
};

export default StudentsService;