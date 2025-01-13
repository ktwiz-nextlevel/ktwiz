//사용예제

import { http } from '.'

async function fetchData() {
  try {
    const response = await http.get('/hello')
    console.log('Data:', response)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchData()

async function fetchWithQuery() {
  try {
    const response = await http.get('/hello', {
      searchParams: { param1: 'value1', param2: 'value2' },
    })
    console.log('Response with query params:', response)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchWithQuery()
async function postData() {
  try {
    const response = await http.post('/submit', {
      payload: { name: 'John Doe', age: 30 },
    })
    console.log('Post Response:', response)
  } catch (error) {
    console.error('Error posting data:', error)
  }
}

postData()
async function updateData() {
  try {
    const response = await http.put('/update', {
      payload: { id: 1, value: 'newValue' },
    })
    console.log('Update Response:', response)
  } catch (error) {
    console.error('Error updating data:', error)
  }
}

updateData()

async function deleteData() {
  try {
    const response = await http.delete('/delete/1')
    console.log('Delete Response:', response)
  } catch (error) {
    console.error('Error deleting data:', error)
  }
}

deleteData()
async function patchData() {
  try {
    const response = await http.patch('/patch', {
      payload: { field: 'value' },
    })
    console.log('Patch Response:', response)
  } catch (error) {
    console.error('Error patching data:', error)
  }
}

patchData()

// const response = await http.get('/secure-endpoint', {
//   headers: { Authorization: 'Bearer token' },
// })
// interface User {
//   id: number
//   name: string
// }

// const response = await http.get<ApiSuccessResponse<User>>('/user/1')
// console.log('사용자 정보:', response.data)
