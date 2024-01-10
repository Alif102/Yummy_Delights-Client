import axios from "axios"

export const saveUser = async (user) => {
    const currentUser = {
      email: user.email, 
      // designation : user.designation,
      
     
      role: 'employee',
      isVerified: 'false',
    }
    const { data } = await axios.put(`https://employeeserver.vercel.app/users/${user?.email}`, currentUser)

     return data
  }

  export const getRole = async email => {
    const {data} = await axios.get(`https://employeeserver.vercel.app/user/${email}`)
    return data.role
    // console.log(data)
  }