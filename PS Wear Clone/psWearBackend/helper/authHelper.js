import bycrypt from 'bcrypt';

export const hashPassword=async (password)=>
{
    try {
        const saltRounds=10;
    const hashPassword=await bycrypt.hash(password,saltRounds);
    return hashPassword;
    } catch (error) {
        console.log(error)
    }
}
export const comparePassword=async (password,hashPassword)=>
{
    return await bycrypt.compare(password,hashPassword);    
}

