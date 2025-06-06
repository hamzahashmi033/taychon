import { Button } from "@/common/button";
import { Card, CardContent } from "@/common/card";

export const CaseStudyCard = ({ study, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
      {/* Image Section */}
      <div className="w-full lg:w-3/5 bg-red-500">
        <Card className="overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-700/30 backdrop-blur-lg">
          <CardContent className="p-0">
            <div className={`bg-gradient-to-br ${study.gradient} p-10 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
              <div className="relative z-10">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-2xl transform hover:scale-102 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Content Section */}
      <div className="w-full lg:w-2/5 space-y-8 bg-blue-500">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className={`px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r ${study.gradient} text-white shadow-lg`}>
              {study.category}
            </span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {study.title}
          </h3>
          
          <p className="text-gray-300 text-lg leading-relaxed font-light">
            {study.description}
          </p>
        </div>
        
        {/* Technologies */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-4 py-1.5 text-sm bg-gray-800/40 text-gray-200 rounded-lg border border-gray-700/30 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          <Button 
            className={`bg-gradient-to-r ${study.gradient} hover:opacity-95 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg`}
          >
            View Case Study
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-200 hover:bg-gray-800/30 px-8 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm"
          >
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};
