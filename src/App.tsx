import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, Settings, User, MapPin, Briefcase, DollarSign, Star, ChevronDown } from "lucide-react";

const applicants = [
  { name: "Karanjot Singh", company: "Somhako Inc.", salary: "5,000,000 JPY", location: "Minato, Tokyo, Japan", role: "Sr. Software Engineer", rating: 5 },
  { name: "Naman Doshi", company: "Somhako Inc.", salary: "5,000,000 JPY", location: "Minato, Tokyo, Japan", role: "Sr. Software Engineer", rating: 4 },
  { name: "Rahber Abbas", company: "Somhako Inc.", salary: "5,000,000 JPY", location: "Minato, Tokyo, Japan", role: "Sr. Software Engineer", rating: 5 },
  { name: "Ojas Dubey", company: "Somhako Inc.", salary: "5,000,000 JPY", location: "Minato, Tokyo, Japan", role: "Sr. Software Engineer", rating: 3 },
  { name: "Japneet Singh", company: "Somhako Inc.", salary: "5,000,000 JPY", location: "Minato, Tokyo, Japan", role: "Sr. Software Engineer", rating: 4 },
  { name: "Rakesh Gupta", company: "Somhako Inc.", salary: "5,000,000 JPY", location: "Minato, Tokyo, Japan", role: "Sr. Software Engineer", rating: 5 },
];

const statusItems = [
  { label: "Screening", count: "50" },
  { label: "1st Interview", count: "18" },
  { label: "2nd Interview", count: "8" },
  { label: "Offer", count: "2" },
  { label: "Hire", count: "1" },
  { label: "Joined", count: "1" },
];

export default function JobPortal() {
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 border-r space-y-4">
        <h1 className="text-xl font-semibold">Job Portal App</h1>
        <nav>
          <ul className="space-y-0.5">
            <li className="font-medium p-1 rounded-lg bg-blue-50 text-blue-600">NAMAN DOSHI</li>
            {['Software Engineer - I', 'Software Engineer - II', 'Full Stack Engineer', 'Data Scientist'].map((role, i) => (
              <li key={i} className="p-1 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                {role}
              </li>
            ))}
          </ul>
          <ul className="space-y-0.5">
            <li className="font-medium p-1 rounded-lg bg-blue-50 text-blue-600">TARO SUZUKI</li>
            {['Software Engineer - I', 'Software Engineer - II', 'Full Stack Engineer', 'Data Scientist'].map((role, i) => (
              <li key={i} className="p-1 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                {role}
              </li>
            ))}
          </ul>
          <ul className="space-y-0.5">
            <li className="font-medium p-1 rounded-lg bg-blue-50 text-blue-600">RAVI SHARMA</li>
            {['Software Engineer - I', 'Software Engineer - II', 'Full Stack Engineer', 'Data Scientist'].map((role, i) => (
              <li key={i} className="p-1 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                {role}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Applicants</h2>
          <div className="flex gap-4 text-gray-600">
            <Clock className="hover:text-blue-500 cursor-pointer transition-colors" />
            <Calendar className="hover:text-blue-500 cursor-pointer transition-colors" />
            <Settings className="hover:text-blue-500 cursor-pointer transition-colors" />
            <User className="text-blue-500" />
          </div>
        </header>

        {/* Status Overview */}
        <div className="flex items-center gap-4 mb-6 pl-2">
          {statusItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-800">{item.count}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
              {index !== statusItems.length - 1 && (
                <div className="h-8 w-px bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Applicants Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-7 gap-4 px-6 py-3 bg-gray-50 border-b font-semibold text-sm">
            <div className="flex items-center justify-center">Select</div>
            <div>Candidate</div>
            <div>Salary</div>
            <div>Location</div>
            <div>Position</div>
            <div>Rating</div>
            <div className="flex justify-center">Action</div>
          </div>

          <div className="divide-y">
            {applicants.map((applicant, index) => (
              <div 
                key={index}
                className="group relative grid grid-cols-7 gap-4 px-6 py-4 
                          transition-all duration-200 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <Checkbox className="h-5 w-5 text-blue-500" />
                </div>
                
                <div className="flex flex-col justify-center">
                  <p className="font-medium">{applicant.name}</p>
                  <p className="text-sm text-gray-500">{applicant.company}</p>
                </div>

                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span>{applicant.salary}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>{applicant.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-purple-500" />
                  <span>{applicant.role}</span>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < applicant.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <Button
                    onClick={() => setSelectedApplicant(applicant)}
                    className="bg-blue-500 hover:bg-blue-600 transition-colors px-4 flex gap-2"
                  >
                    Screening
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Schedule Section */}
          <div className="p-6 border-t">
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">SCHEDULE</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Rather Abbas - Recruiter screening interview</span>
              </div>
            </div>
            
            <div className="mt-4">
              <Button variant="outline" className="flex items-center gap-2 text-blue-500">
                <Calendar className="w-4 h-4" />
                Schedule an Interview
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}