
// For handling custom error
export const errorHandler=(statusCode,message)=>{
    // Error() is inbuilt in js so new error as per our need
    const error=new Error()
    error.statusCode=statusCode
    error.message=message
    return error
}