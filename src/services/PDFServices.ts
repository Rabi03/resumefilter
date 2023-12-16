import Axios from "../../utils/Axios"



export const getFilteredResume=async(job:string)=>{
    const res =await Axios.post("/api/resumes",{jobDescription:job});
    if(res.data.error==false){
        return res.data.filteredResumes;
    }
    else{
        return null
    }
}
export const uploadResumes=async(file:FormData)=>{
    const res=await Axios.post("/api/upload",file);
    if(res.data.error===false){
        return true
    }
    else{
        return false
    }
}