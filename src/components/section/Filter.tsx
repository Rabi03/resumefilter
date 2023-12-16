import { getFilteredResume, uploadResumes } from '@/services/PDFServices'
import Link from 'next/link'
import React, { useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
import Carousel from 'react-multi-carousel';
import { toast } from 'react-toastify';
import 'react-multi-carousel/lib/styles.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


type FilteredResume = {
    file: string
    score: number
    job_score: number
    skill_score: number
    experience_score: number
    education_score: number
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const resumeData = [
    {
        "file": "public\\resume\\Front-End-Dev_MD-Kamrul-Hasan.pdf",
        "score": 3.1004848044958453,
        "job_score": 0.4999999999999999,
        "skill_score": 0.34848547349522574,
        "experience_score": 0,
        "education_score": 0.35805743701971643
    },
    {
        "file": "public\\resume\\MD.Nazmus Sakib_Frontend_Developer .pdf",
        "score": 2.7552859598849464,
        "job_score": 0.4999999999999999,
        "skill_score": 0.30633583242699347,
        "experience_score": 0,
        "education_score": 0.223606797749979
    },
    {
        "file": "public\\resume\\Farhad_Resume.pdf",
        "score": 2.364257737682741,
        "job_score": 0,
        "skill_score": 0.421211769587116,
        "experience_score": 0,
        "education_score": 0.2581988897471611
    },
    {
        "file": "public\\resume\\SM MAHADEE HASAN.pdf",
        "score": 2.3343925575558364,
        "job_score": 0.40824829046386296,
        "skill_score": 0.28800921644239164,
        "experience_score": 0,
        "education_score": 0.0778498944161523
    },
    {
        "file": "public\\resume\\Kawsar_Hossain.pdf",
        "score": 2.3313335574362806,
        "job_score": 0.4999999999999999,
        "skill_score": 0.2297518743202451,
        "experience_score": 0,
        "education_score": 0.18257418583505533
    },
    {
        "file": "public\\resume\\Farhad Jaman.pdf",
        "score": 2.064654866453957,
        "job_score": 0.7071067811865475,
        "skill_score": 0.08712136837380643,
        "experience_score": 0,
        "education_score": 0.21483446221182986
    },
    {
        "file": "public\\resume\\Tushar_Ibtekar.pdf",
        "score": 2.033426608085981,
        "job_score": 0,
        "skill_score": 0.3143092785468561,
        "experience_score": 0,
        "education_score": 0.46188021535170054
    },
    {
        "file": "public\\resume\\Md Ahsan Ahmed Sultan Resume-1.pdf",
        "score": 1.8534482756581516,
        "job_score": 0.40824829046386296,
        "skill_score": 0.2073903389460851,
        "experience_score": 0,
        "education_score": 0
    },
    {
        "file": "public\\resume\\Ruhul-amin.pdf",
        "score": 1.815997503447631,
        "job_score": 0,
        "skill_score": 0.3170114791543561,
        "experience_score": 0,
        "education_score": 0.23094010767585027
    },
    {
        "file": "public\\resume\\Sadat_Shahriar_Bari_CV.pdf",
        "score": 1.6664451535769906,
        "job_score": 0.4999999999999999,
        "skill_score": 0.09677419354838711,
        "experience_score": 0,
        "education_score": 0.18257418583505533
    },
    {
        "file": "public\\resume\\Saif Rahman.pdf",
        "score": 1.1241198124443266,
        "job_score": 0,
        "skill_score": 0.20530596102989465,
        "experience_score": 0,
        "education_score": 0.0975900072948533
    }
]

export default function Filter() {
    const [job, setJob] = useState("")
    const [resumes, setResumes] = useState<FilteredResume[]>([])
    const [loading,setLoading]=useState(false);

    const getResumes = async () => {
        setLoading(true)
        if (job) {
            const resumes = await getFilteredResume(job);
            if (resumes !== null) {
                setResumes(resumes)
                setLoading(false)
            }
            else{
                setLoading(false)
            }
        }
    }

    const uploadFile=async(e:any)=>{
        setLoading(true)
        const image=e.target.files[0];
        const file=new FormData()

        file.append("file",image);

        const res = await uploadResumes(file);

        if(res){
            toast.success("Resume uploaded")
        }
        else{
            toast.error("Can not upload resume")
        }
        setLoading(false)
    }

    
    return (
        <section className='bg-gray-100 py-6'>
            <div>
                <div className="container mx-auto flex flex-col items-center py-6 sm:py-12">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">

                            <span className="text-red-500">Applicant  </span>
                            <span className="text-blue-500"> Tracking </span>
                            System
                        </h1>
                        <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 font-bold text-center text-lg sm:text-2xl">Provide job description and find your prefered Resume</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <label htmlFor='upload'  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Upload Resume | For Job Seeker </label>
                        <input type='file' className='hidden' id='upload' onChange={uploadFile} />
                
                    </div>
                </div>
            </div>
            
            <div className='max-w-4xl mx-auto '>
            <h1 className='text-gray-600 font-bold text-2xl my-2'>Job Description</h1>
                {resumes.length == 0 ?
                    <div className='w-full space-y-4 overflow-hidden'>

                        <textarea id="message" rows={15} value={job} onChange={e => setJob(e.target.value)} className="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your job description here..."></textarea>
                        <div className='w-full'>
                            <button disabled={loading} className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right" onClick={getResumes}>
                                {loading?"Please wait.....":"Find Resumes"}
                            </button>
                        </div>
                    </div>
                    :
                    <div className='w-full  p-5'>
                        <div className='w-[80%] flex justify-between items-center mx-auto'>
                            <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right" onClick={()=>setResumes([])}>
                             {"< Back"}
                            </button>
                            <h1 className='text-black font-bold text-2xl my-2'>{resumes.length > 0 ? resumes.length + " Results found" : "No match found"}</h1>
                        </div>
                        <Carousel responsive={responsive} className='w-[80%] mx-auto'>
                            {resumes.map((resume: FilteredResume,index:number) => (
                                <Link key={index} href={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + resume.file.replace("public", "").replace("\\", "/")} target='_blank' className='relative'>
                                    <Document className="border-2 rounded-lg overflow-hidden my-2 object-contain" file={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + resume.file.replace("public", "").replace("\\", "/")}>
                                        <Page height={800} pageIndex={0} renderTextLayer={false} renderAnnotationLayer={false} />
                                    </Document>
                                    <div className='absolute  right-2 bottom-2'>
                                        <table className="table-auto text-gray-200 border-separate border-spacing-y-2 border-spacing-x-4 border rounded-lg bg-gray-500">
                                            <thead className='text-gray-200'>
                                                <tr>
                                                    <th>Keyword</th>
                                                    <th>Score</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Job Position</td>
                                                    <td>{(resume.job_score * 4).toFixed(2)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Skills</td>
                                                    <td>{(resume.skill_score * 5).toFixed(2)}</td>

                                                </tr>
                                                <tr>
                                                    <td>Experience</td>
                                                    <td>{(resume.experience_score * 3).toFixed(2)}</td>

                                                </tr>
                                                <tr>
                                                    <td>Education</td>
                                                    <td>{(resume.education_score * 2).toFixed(2)}</td>

                                                </tr>
                                            </tbody>
                                        </table>


                                    </div>
                                </Link>
                            ))}
                        </Carousel>

                    </div>
                }
            </div>
        </section>
    )
}
